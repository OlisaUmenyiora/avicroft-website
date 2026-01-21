import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders the Hero component', () => {
    render(<Home />);
    expect(screen.getByText(/Software products/i)).toBeInTheDocument();
  });

  it('renders the main tagline', () => {
    render(<Home />);
    expect(screen.getByText(/built to grow/i)).toBeInTheDocument();
    expect(screen.getByText('YOU')).toBeInTheDocument();
  });

  it('renders CTAs', () => {
    render(<Home />);
    expect(screen.getByText(/Get started free/i)).toBeInTheDocument();
    expect(screen.getByText(/See our products/i)).toBeInTheDocument();
  });

  it('renders the stats section', () => {
    render(<Home />);
    expect(screen.getByText(/A growing ecosystem of/i)).toBeInTheDocument();
    expect(screen.getByText(/2 products/i)).toBeInTheDocument();
  });

  it('renders the product showcase section', () => {
    render(<Home />);
    expect(screen.getByText('Our products')).toBeInTheDocument();
  });

  it('renders trusted by section', () => {
    render(<Home />);
    expect(screen.getByText(/Trusted by design teams at/i)).toBeInTheDocument();
  });
});
