export * from './configs';
export * from './env';
export * from './globs';
export * from './plugins';

import type { Linter } from 'eslint';
import {
  ignores,
  javascript,
  jsonc,
  node,
  prettier,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unocss,
  vue
} from './configs';
import { hasUnocss, hasVue } from './env';

/** Ignore common files and include javascript support */
export const presetJavaScript = [...ignores, ...javascript, ...node];
/** Includes basic json(c) file support and sorting json keys */
export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortTsconfig];
/** Includes markdown, yaml + `presetJsonc` support */
export const presetLangsExtensions = [...presetJsonc];
/** Includes `presetJavaScript` and typescript support */
export const presetBasic = [...presetJavaScript, ...typescript];
/**
 * Includes
 * - `presetBasic` (JS+TS) support
 * - `presetLangsExtensions` (markdown, yaml, jsonc) support
 * - Vue support
 * - UnoCSS support (`uno.config.ts` is required)
 * - Prettier support
 */
export const presetAll = [...presetBasic, ...presetLangsExtensions, ...vue, ...unocss, ...prettier];
export { presetAll as all, presetBasic as basic };

/**
 *
 * @param config
 * @param features
 * @returns
 */
export function config(
  config: Linter.Config | Linter.Config[] = [],
  {
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue
  }: Partial<{
    /** Vue support. Auto-enable. */
    vue: boolean;
    /** Prettier support. Default: true */
    prettier: boolean;
    /** UnoCSS support. Auto-enable. */
    unocss: boolean;
  }> = {}
): Linter.Config[] {
  const configs = [...presetBasic, ...presetJsonc];
  if (enableVue) {
    configs.push(...vue);
  }
  if (enableUnocss) {
    configs.push(...unocss);
  }
  if (enablePrettier) {
    configs.push(...prettier);
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]));
  }
  return configs;
}
