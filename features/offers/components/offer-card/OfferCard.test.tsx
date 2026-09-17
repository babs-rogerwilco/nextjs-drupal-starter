/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import OfferCard, { OfferCardProps } from './OfferCard';

// Mock next/image
// Mock next/image for Vitest DOM tests
// Mock next/image for Vitest DOM tests
vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    _fill,
    _priority,
    _sizes,
    ...props
  }: {
    src: string;
    alt?: string;
    _fill?: boolean;
    _priority?: boolean;
    _sizes?: string;
  }) => <img src={src} alt={alt || ''} {...props} />,
}));

describe('OfferCard Component', () => {
  const defaultProps: OfferCardProps = {
    title: 'Summer Getaway Special',
    description: 'Book now and enjoy up to 30% off luxury beach resorts across Europe.',
    imageUrl: '/images/summer-offer.jpg',
  };

  it('renders correctly with default props', () => {
    render(<OfferCard {...defaultProps} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Summer Getaway Special' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Book now and enjoy up to 30% off luxury beach resorts across Europe.')
    ).toBeInTheDocument();
    expect(screen.getByText('SPECIAL OFFER')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'LEARN MORE' })).toBeInTheDocument();

    const image = screen.getByRole('img', { name: 'Summer Getaway Special' });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/summer-offer.jpg');
  });

  it('renders custom tag, priceTag, and custom ctaText when provided', () => {
    render(
      <OfferCard {...defaultProps} tag="LIMITED DEAL" priceTag="From $199" ctaText="BOOK NOW" />
    );

    expect(screen.getByText('LIMITED DEAL')).toBeInTheDocument();
    expect(screen.getByText('From $199')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'BOOK NOW' })).toBeInTheDocument();
  });

  it('handles interaction with the CTA button', async () => {
    const user = userEvent.setup();
    render(<OfferCard {...defaultProps} />);

    const ctaButton = screen.getByRole('button', { name: 'LEARN MORE' });
    expect(ctaButton).toBeInTheDocument();

    await user.click(ctaButton);
    expect(ctaButton).toBeEnabled();
  });
});
