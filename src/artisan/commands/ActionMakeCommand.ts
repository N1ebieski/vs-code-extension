import { Command } from "../types";

export const ActionMakeCommand: Command = {
    name: "app:make:action",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the cast class",
        },
    ],
};
