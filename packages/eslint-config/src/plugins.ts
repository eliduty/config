// @ts-nocheck

export type InteropDefault<T> = T extends { default: infer U } ? U : T;

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
  return (m as any).default || m;
}

import tseslint from 'typescript-eslint';
export { tseslint };

import * as _pluginVue from 'eslint-plugin-vue';
export const pluginVue: any = interopDefault(_pluginVue);

import * as _pluginNode from 'eslint-plugin-n';
export const pluginNode: typeof import('eslint-plugin-n') = interopDefault(_pluginNode);

import * as _pluginUnocss from '@unocss/eslint-plugin';
export const pluginUnocss: typeof import('@unocss/eslint-plugin').default =
  interopDefault(_pluginUnocss);

import * as _pluginPrettier from 'eslint-plugin-prettier';
export const pluginPrettier: any = interopDefault(_pluginPrettier);

import * as _configPrettier from 'eslint-config-prettier';
export const configPrettier: any = interopDefault(_configPrettier);

import * as _pluginUnusedImports from 'eslint-plugin-unused-imports';
export const pluginUnusedImports: any = interopDefault(_pluginUnusedImports);

export * as pluginImport from 'eslint-plugin-import-x';

export * as pluginJsonc from 'eslint-plugin-jsonc';

export * as parserVue from 'vue-eslint-parser';

export * as parserJsonc from 'jsonc-eslint-parser';
