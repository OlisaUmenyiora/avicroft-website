import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders the Hero component', () => {
    render(<Home />);
    expect(screen.getByText(/Software Products/i)).toBeInTheDocument();
  });

  it('renders the main tagline', () => {
    render(<Home />);
    expect(screen.getByText(/Built to Grow/i)).toBeInTheDocument();
    expect(screen.getByText(/YOU!/i)).toBeInTheDocument();
  });

  it('renders CTAs', () => {
    render(<Home />);
    expect(screen.getByText(/Get Started for free now/i)).toBeInTheDocument();
    // Multiple "Learn more" links exist (one in hero, multiple in carousel cards)
    const learnMoreLinks = screen.getAllByText(/Learn more/i);
    expect(learnMoreLinks.length).toBeGreaterThan(0);
  });

  it('renders the product carousel', () => {
    render(<Home />);
    // Multiple "Swipe" texts exist (mobile and desktop carousels)
    const swipeTexts = screen.getAllByText('Swipe');
    expect(swipeTexts.length).toBeGreaterThan(0);
  });
});
