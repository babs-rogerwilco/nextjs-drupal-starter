import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';
import { MenuItem } from '../../graphql';

const mockColumns: MenuItem[] = [
  {
    id: 'col-1',
    title: 'Vehicles',
    url: '/vehicles',
    children: [
      { id: 'link-1-1', title: 'D-MAX', url: '/vehicles/d-max' },
      { id: 'link-1-2', title: 'mu-X', url: '/vehicles/mu-x' },
    ],
  },
  {
    id: 'col-2',
    title: 'Services',
    url: '/services',
    children: [
      { id: 'link-2-1', title: 'Book a Service', url: '/services/book' },
      { id: 'link-2-2', title: 'Warranty', url: '/services/warranty' },
    ],
  },
];

describe('Footer Component', () => {
  it('renders correctly without columns', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} ISUZU Motors South Africa`))
    ).toBeInTheDocument();
  });

  it('renders columns and child links correctly', () => {
    render(<Footer columns={mockColumns} />);

    expect(screen.getByRole('heading', { name: 'Vehicles', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Services', level: 3 })).toBeInTheDocument();

    const dmaxLink = screen.getByRole('link', { name: 'D-MAX' });
    expect(dmaxLink).toBeInTheDocument();
    expect(dmaxLink).toHaveAttribute('href', '/vehicles/d-max');

    const muxLink = screen.getByRole('link', { name: 'mu-X' });
    expect(muxLink).toBeInTheDocument();
    expect(muxLink).toHaveAttribute('href', '/vehicles/mu-x');

    const bookLink = screen.getByRole('link', { name: 'Book a Service' });
    expect(bookLink).toBeInTheDocument();
    expect(bookLink).toHaveAttribute('href', '/services/book');
  });

  it('renders column without children gracefully', () => {
    const columnsWithoutChildren: MenuItem[] = [
      {
        id: 'col-empty',
        title: 'About Us',
        url: '/about',
        children: [],
      },
    ];

    render(<Footer columns={columnsWithoutChildren} />);

    expect(screen.getByRole('heading', { name: 'About Us', level: 3 })).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
