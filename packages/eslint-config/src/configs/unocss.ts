import type { Linter } from 'eslint';
import { pluginUnocss } from '../plugins';

export const unocss: Linter.FlatConfig[] = [pluginUnocss.configs.flat as any as Linter.FlatConfig];
