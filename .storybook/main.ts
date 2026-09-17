import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../features/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        // Injects global process.env so next/link and next/navigation don't throw ReferenceErrors
        'process.env': process.env,
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          unoptimized: true,
        }),
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, '../'),
          'next/image': path.resolve(__dirname, './next-image-mock.tsx'),
        },
      },
    };
  },
};

export default config;
