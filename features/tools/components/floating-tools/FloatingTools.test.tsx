import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TOOL_ACTIONS } from '../../constants';
import FloatingTools from './FloatingTools';

describe('FloatingTools Component', () => {
  it('renders quick action sidebar container with correct accessibility label', () => {
    render(<FloatingTools />);
    const sidebar = screen.getByRole('complementary', { name: /quick action navigation/i });
    expect(sidebar).toBeInTheDocument();
  });

  it('renders all action links with correct href attributes', () => {
    render(<FloatingTools />);

    TOOL_ACTIONS.forEach((action) => {
      const link = screen.getByRole('link', { name: new RegExp(action.label, 'i') });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', action.href);
    });
  });
});
