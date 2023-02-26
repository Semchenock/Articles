import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/cssLoader';
import { buildSvgLoader } from '../build/loaders/svgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entery: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  const svgLoader = buildSvgLoader();
  const cssLoaders = buildCssLoader(true);
  config.module?.rules?.push(cssLoaders, svgLoader);

  return config;
};
