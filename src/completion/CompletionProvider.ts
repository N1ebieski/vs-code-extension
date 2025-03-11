"use strict";

import { completionProvider as appBinding } from "@src/features/appBinding";
import { completionProvider as asset } from "@src/features/asset";
import { completionProvider as auth } from "@src/features/auth";
import { completionProvider as config } from "@src/features/config";
import { completionProvider as controllerAction } from "@src/features/controllerAction";
import { completionProvider as env } from "@src/features/env";
import { completionProvider as inertia } from "@src/features/inertia";
import { completionProvider as middleware } from "@src/features/middleware";
import { completionProvider as mix } from "@src/features/mix";
import { completionProvider as route } from "@src/features/route";
import { completionProvider as storage } from "@src/features/storage";
import { completionProvider as translation } from "@src/features/translation";
import { completionProvider as view } from "@src/features/view";
import { GeneratedConfigKey } from "@src/support/generated-config";
import { CompletionProvider } from "..";

const allProviders: Partial<Record<GeneratedConfigKey, CompletionProvider>> = {
    "appBinding.completion": appBinding,
    "asset.completion": asset,
    "auth.completion": auth,
    "config.completion": config,
    "controllerAction.completion": controllerAction,
    "env.completion": env,
    "inertia.completion": inertia,
    "middleware.completion": middleware,
    "mix.completion": mix,
    "route.completion": route,
    "storage.completion": storage,
    "translation.completion": translation,
    "view.completion": view,
};

export const completionProviders = Object.entries(allProviders).map(
    ([_, provider]) => provider,
);
