import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

export default function (env: BuildEnv): webpack.Configuration {
  const paths: BuildPaths = {
    entery: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
}
