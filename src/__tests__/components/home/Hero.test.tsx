import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/home/Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Software Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Built to Grow/i)).toBeInTheDocument();
  });

  it('renders the "YOU!" emphasis text', () => {
    render(<Hero />);
    expect(screen.getByText(/YOU!/i)).toBeInTheDocument();
  });

  it('renders the "Get Started for free now" CTA button', () => {
    render(<Hero />);
    expect(screen.getByText(/Get Started for free now/i)).toBeInTheDocument();
  });

  it('renders CTA links', () => {
    render(<Hero />);
    // Multiple "Learn more" links exist (hero + carousel cards)
    const learnMoreLinks = screen.getAllByText(/Learn more/i);
    expect(learnMoreLinks.length).toBeGreaterThan(0);
  });

  it('has correct CTA link destinations', () => {
    render(<Hero />);
    const getStartedLink = screen.getByText(/Get Started for free now/i).closest('a');
    // Get the Learn more link in the hero section (links to /about)
    const learnMoreLinks = screen.getAllByText(/Learn more/i);
    const heroLearnMoreLink = learnMoreLinks.find(
      (el) => el.closest('a')?.getAttribute('href') === '/about'
    );

    expect(getStartedLink).toHaveAttribute('href', '/products');
    expect(heroLearnMoreLink).toBeDefined();
  });

  it('renders the ProductCarousel component', () => {
    render(<Hero />);
    // Check for carousel controls - there are 2 carousels (mobile and desktop)
    const swipeTexts = screen.getAllByText('Swipe');
    expect(swipeTexts.length).toBeGreaterThan(0);

    const prevButtons = screen.getAllByLabelText('Previous product');
    const nextButtons = screen.getAllByLabelText('Next product');
    expect(prevButtons.length).toBeGreaterThan(0);
    expect(nextButtons.length).toBeGreaterThan(0);
  });
});
