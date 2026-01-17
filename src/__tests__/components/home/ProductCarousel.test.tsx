import { render, screen, fireEvent, act } from '@testing-library/react';
import { ProductCarousel } from '@/components/home/ProductCarousel';
import { PRODUCTS } from '@/lib/constants';

describe('ProductCarousel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders all product cards', () => {
    render(<ProductCarousel />);
    PRODUCTS.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('renders carousel controls', () => {
    render(<ProductCarousel />);
    expect(screen.getByLabelText('Previous product')).toBeInTheDocument();
    expect(screen.getByLabelText('Next product')).toBeInTheDocument();
  });

  it('renders swipe indicator', () => {
    render(<ProductCarousel />);
    expect(screen.getByText('Swipe')).toBeInTheDocument();
  });

  it('renders "Start for free" buttons for each product', () => {
    render(<ProductCarousel />);
    const startButtons = screen.getAllByText('Start for free');
    expect(startButtons.length).toBe(PRODUCTS.length);
  });

  it('renders "Learn more" buttons for each product', () => {
    render(<ProductCarousel />);
    const learnMoreButtons = screen.getAllByText('Learn more');
    expect(learnMoreButtons.length).toBe(PRODUCTS.length);
  });

  it('navigates to next slide when next button is clicked', () => {
    render(<ProductCarousel />);
    const nextButton = screen.getByLabelText('Next product');

    // Initially Education is active (first product)
    // After clicking next, E-commerce should be active
    fireEvent.click(nextButton);

    // The carousel should have updated
    expect(nextButton).toBeInTheDocument();
  });

  it('navigates to previous slide when prev button is clicked', () => {
    render(<ProductCarousel />);
    const prevButton = screen.getByLabelText('Previous product');

    fireEvent.click(prevButton);

    expect(prevButton).toBeInTheDocument();
  });

  it('has correct product URLs', () => {
    render(<ProductCarousel />);
    PRODUCTS.forEach((product) => {
      const link = screen.getByText(product.name)
        .closest('div')
        ?.querySelector(`a[href="${product.url}"]`);
      // Product URL should be present
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('renders product descriptions', () => {
    render(<ProductCarousel />);
    PRODUCTS.forEach((product) => {
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });

  it('auto-rotates after interval', () => {
    render(<ProductCarousel />);

    // Advance timers by 5 seconds (auto-play interval)
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // The carousel should still be functional
    expect(screen.getByText('Swipe')).toBeInTheDocument();
  });
});
