/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GrowthBook } from "@growthbook/growthbook";
import { getContext } from "svelte";
import { ContextSymbol } from "./context";
import type { GrowthBookContext } from "./context";

export function useGrowthBook<
  AppFeatures extends Record<string, any> = Record<string, any>
>(): GrowthBook<AppFeatures> | undefined {
  const { growthbook } = getContext<GrowthBookContext>(ContextSymbol);
  return growthbook as GrowthBook<AppFeatures> | undefined;
}
