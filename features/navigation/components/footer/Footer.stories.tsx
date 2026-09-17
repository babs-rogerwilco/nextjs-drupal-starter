import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Footer from './Footer';
import { MenuItem } from '../../graphql';

const mockColumns: MenuItem[] = [
  {
    id: '1',
    title: 'Vehicles',
    url: '/vehicles',
    children: [
      { id: '1-1', title: 'D-MAX Bakkies', url: '/vehicles/d-max' },
      { id: '1-2', title: 'mu-X SUV', url: '/vehicles/mu-x' },
      { id: '1-3', title: 'N-Series Trucks', url: '/vehicles/n-series' },
    ],
  },
  {
    id: '2',
    title: 'Owners',
    url: '/owners',
    children: [
      { id: '2-1', title: 'Book a Service', url: '/owners/book-service' },
      { id: '2-2', title: 'Service Plans', url: '/owners/service-plans' },
      { id: '2-3', title: 'Accessories', url: '/owners/accessories' },
    ],
  },
  {
    id: '3',
    title: 'Quick Links',
    url: '/quick-links',
    children: [
      { id: '3-1', title: 'Find a Dealer', url: '/dealers' },
      { id: '3-2', title: 'Finance Options', url: '/finance' },
      { id: '3-3', title: 'Contact Us', url: '/contact' },
    ],
  },
];

const meta: Meta<typeof Footer> = {
  title: 'Features/Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    columns: mockColumns,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const copyright = canvas.getByText(new RegExp(`ISUZU Motors South Africa`));
    await expect(copyright).toBeInTheDocument();

    const dmaxLink = canvas.getByRole('link', { name: 'D-MAX Bakkies' });
    await expect(dmaxLink).toBeInTheDocument();
    await expect(dmaxLink).toHaveAttribute('href', '/vehicles/d-max');
  },
};

export const SingleColumn: Story = {
  args: {
    columns: [mockColumns[0]],
  },
};

export const Empty: Story = {
  args: {
    columns: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toBeInTheDocument();
  },
};
