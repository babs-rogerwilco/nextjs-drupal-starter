import type { Preview } from '@storybook/react';

// Polyfill global process object for Next.js internal packages
if (typeof window !== 'undefined') {
  window.process = window.process || { env: {} };
}

// @ts-expect-error SCSS side-effect import
import '../styles/_index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
