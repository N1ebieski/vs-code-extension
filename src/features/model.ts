import { HoverActions } from "@src/hoverAction/support";
import AutocompleteResult from "@src/parser/AutocompleteResult";
import {
    getModelByClassname,
    getModelByName,
    getModels,
} from "@src/repositories/models";
import { config } from "@src/support/config";
import { detect } from "@src/support/parser";
import { AutocompleteParsingResult } from "@src/types";
import * as vscode from "vscode";
import { CompletionProvider, Eloquent, FeatureTag } from "..";

const isInHoverRange = (
    range: vscode.Range,
    method: AutocompleteParsingResult.MethodCall,
): boolean => {
    if (!method.start || !method.end) {
        return false;
    }

    const nodeRange = new vscode.Range(
        new vscode.Position(method.start.line, method.start.column),
        new vscode.Position(method.end.line, method.end.column),
    );

    // vs-code-php-parser-cli returns us the position of the entire node, for example:
    //
    // Example::popular()
    //    ->traitScope()
    //    ->active();
    //
    // so we don't have to check equality of the start and end positions.
    // It's enough to check if the node range contains the scope range
    return nodeRange.contains(range);
};

export const completionModelProvider: vscode.CompletionItemProvider = {
    provideCompletionItems(): vscode.ProviderResult<vscode.CompletionItem[]> {
        if (!config("model.completion", true)) {
            return undefined;
        }

        return Object.entries(getModels().items).flatMap(([, value]) => {
            return value.name_cases.slice(0, 2).map((name) => {
                return new vscode.CompletionItem(
                    name,
                    vscode.CompletionItemKind.Variable,
                );
            });
        });
    },
};

export const completionAttributeProvider: CompletionProvider = {
    tags() {
        return Object.values(getModels().items)
            .flatMap((model) => {
                return [
                    {
                        method: [...model.name_cases],
                    },
                    {
                        name: [...model.name_cases],
                    },
                ];
            })
            .filter((item) => item !== null) as FeatureTag;
    },

    provideCompletionItems(
        result: AutocompleteResult,
    ): vscode.CompletionItem[] {
        if (!config("model.completion_attribute", true)) {
            return [];
        }

        const name = result.name() ?? result.func();

        if (!name) {
            return [];
        }

        const model = getModelByName(name);

        if (!model) {
            return [];
        }

        const createCompleteItem = (
            item: Eloquent.Attribute | Eloquent.Relation,
        ) => {
            let completeItem = new vscode.CompletionItem(
                item.name,
                vscode.CompletionItemKind.Property,
            );

            if (item.type) {
                completeItem.detail = item.type;
            }

            return completeItem;
        };

        return model.attributes
            .map(createCompleteItem)
            .concat(model.relations.map(createCompleteItem));
    },
};

export class ScopeHoverProvider implements vscode.HoverProvider {
    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
    ): vscode.ProviderResult<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position);

        if (!range) {
            return null;
        }

        const scopeName = document.getText(range);

        return detect(document).then((results) => {
            if (!results) {
                return null;
            }

            const result = results
                .filter((result) => result.type === "methodCall")
                .find(
                    (result) =>
                        result.methodName === scopeName &&
                        isInHoverRange(range, result),
                );

            if (!result || !result.className) {
                return null;
            }

            const scope = getModelByClassname(result.className)?.scopes?.find(
                (scope) => scope.name === scopeName,
            );

            if (!scope || !scope.uri) {
                return null;
            }

            const hoverActions = new HoverActions([
                {
                    title: "Go to implementation",
                    command: "laravel.open",
                    arguments: [
                        vscode.Uri.file(scope.uri),
                        scope.start_line,
                        0,
                    ],
                },
            ]);

            return new vscode.Hover(hoverActions.getAsMarkdownString(), range);
        });
    }
}
