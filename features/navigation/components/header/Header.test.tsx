import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders the brand logo correctly', () => {
    render(<Header />);
    expect(screen.getByText('ISUZU')).toBeInTheDocument();
  });

  // it('renders default navigation menu items', () => {
  //   render(<Header />);
  //   expect(screen.getByText('BAKKIES')).toBeInTheDocument();
  //   expect(screen.getByText('OFFERS')).toBeInTheDocument();
  // });

  // it('renders custom menu items passed via props', () => {
  //   const customItems = [{ id: '10', title: 'ELECTRIC VEHICLES', url: '/ev' }];
  //   render(<Header menuItems={customItems} />);
  //   expect(screen.getByText('ELECTRIC VEHICLES')).toBeInTheDocument();
  //   expect(screen.queryByText('BAKKIES')).not.toBeInTheDocument();
  // });
});
