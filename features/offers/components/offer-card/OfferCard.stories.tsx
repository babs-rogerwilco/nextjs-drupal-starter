import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import OfferCard from './OfferCard';

const meta: Meta<typeof OfferCard> = {
  title: 'Features/Offers/Offer Card',
  component: OfferCard,
  tags: ['autodocs'],
  argTypes: {
    tag: { control: 'text' },
    title: { control: 'text' },
    priceTag: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    ctaText: { control: 'text' },
    ctaUrl: { control: 'text' },
  },
  args: {
    title: 'Exclusive Resort Package',
    description:
      'Enjoy a luxury 5-star experience with complimentary breakfast and spa treatment included.',
    imageUrl:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
};

export default meta;

type Story = StoryObj<typeof OfferCard>;

export const Default: Story = {};

export const WithPriceTag: Story = {
  args: {
    tag: 'HOT DEAL',
    priceTag: '$299 / night',
    ctaText: 'CLAIM OFFER',
  },
};

export const LongContent: Story = {
  args: {
    tag: 'EARLY BIRD SPECIAL',
    title: 'Ultimate Maldives All-Inclusive Luxury Escape Package 2025',
    description:
      'Book early and save up to 40% on water villas with private pools, sunset cruises, unlimited fine dining, and roundtrip seaplane transfers included.',
    priceTag: 'From $1,499',
    ctaText: 'EXPLORE PACKAGE',
  },
};

export const Interactive: Story = {
  args: {
    ...WithPriceTag.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /CLAIM OFFER/i });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};
