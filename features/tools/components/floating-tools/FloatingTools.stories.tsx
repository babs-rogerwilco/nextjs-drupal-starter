import type { Meta, StoryObj } from '@storybook/react';
import FloatingTools from './FloatingTools';

const meta: Meta<typeof FloatingTools> = {
  title: 'Features/Tools/FloatingTools',
  component: FloatingTools,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FloatingTools>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#f4f6f8' }}>
      <FloatingTools />
    </div>
  ),
};
