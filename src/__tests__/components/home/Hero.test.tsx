import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/home/Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Software products/i)).toBeInTheDocument();
    expect(screen.getByText(/built to grow/i)).toBeInTheDocument();
  });

  it('renders the "YOU" emphasis text', () => {
    render(<Hero />);
    expect(screen.getByText('YOU')).toBeInTheDocument();
  });

  it('renders the primary CTA button', () => {
    render(<Hero />);
    expect(screen.getByText(/Get started free/i)).toBeInTheDocument();
  });

  it('renders the secondary CTA button', () => {
    render(<Hero />);
    expect(screen.getByText(/See our products/i)).toBeInTheDocument();
  });

  it('has correct CTA link destinations', () => {
    render(<Hero />);
    const getStartedLink = screen.getByText(/Get started free/i).closest('a');
    const seeProductsLink = screen.getByText(/See our products/i).closest('a');

    expect(getStartedLink).toHaveAttribute('href', '/products');
    expect(seeProductsLink).toHaveAttribute('href', '/about');
  });

  it('renders the flip box with product names', () => {
    render(<Hero />);
    // The flip box shows either Aura or Scholar
    const flipBoxText = screen.getByText(/Aura|Scholar/);
    expect(flipBoxText).toBeInTheDocument();
  });

  it('renders the social proof section', () => {
    render(<Hero />);
    expect(screen.getByText(/Trusted by design teams at/i)).toBeInTheDocument();
  });

  it('renders trusted brand names', () => {
    render(<Hero />);
    expect(screen.getByText('Uber')).toBeInTheDocument();
    expect(screen.getByText('airbnb')).toBeInTheDocument();
    expect(screen.getByText('Revolut')).toBeInTheDocument();
    expect(screen.getByText('Pinterest')).toBeInTheDocument();
  });
});
