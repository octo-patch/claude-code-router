import assert from "node:assert/strict";
import test from "node:test";
import { getProviderCatalogModels } from "@ccr/core/providers/model-catalog.ts";

test("MiniMax built-ins stay current even when the bundled catalog contains retired models", () => {
  for (const providerPresetId of ["minimax-global", "minimax-cn"]) {
    assert.deepEqual(getProviderCatalogModels({ providerPresetId }).models, ["MiniMax-M3.1-Flash", "MiniMax-M3"]);
  }
  for (const baseUrl of ["https://api.minimax.io/v1", "https://api.minimaxi.com/anthropic"]) {
    assert.deepEqual(getProviderCatalogModels({ baseUrl }).models, ["MiniMax-M3.1-Flash", "MiniMax-M3"]);
  }
});
