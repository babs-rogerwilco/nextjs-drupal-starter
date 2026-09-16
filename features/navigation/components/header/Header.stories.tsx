import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Features/Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const CustomNavigation: Story = {
  args: {
    menuItems: [
      { id: '1', title: 'SPECIAL DEALS', url: '/deals' },
      { id: '2', title: 'FLEET SOLUTIONS', url: '/fleet' },
      { id: '3', title: 'CONTACT US', url: '/contact' },
    ],
  },
};
