import { render, screen } from '@testing-library/react';
import ProductsPage from '@/app/products/page';
import { PRODUCTS } from '@/lib/constants';

describe('Products Page', () => {
  it('renders the page title', () => {
    render(<ProductsPage />);
    expect(screen.getByText('Our Products')).toBeInTheDocument();
  });

  it('renders the page description', () => {
    render(<ProductsPage />);
    expect(screen.getByText(/Software solutions designed to help your business grow/i)).toBeInTheDocument();
  });

  it('renders all products', () => {
    render(<ProductsPage />);
    PRODUCTS.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.tagline)).toBeInTheDocument();
    });
  });

  it('renders product features', () => {
    render(<ProductsPage />);
    PRODUCTS.forEach((product) => {
      product.features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });
  });

  it('renders CTA buttons for each product', () => {
    render(<ProductsPage />);
    // Each product has its own CTA text (Get started free, Join waitlist)
    PRODUCTS.forEach((product) => {
      expect(screen.getByRole('link', { name: new RegExp(product.ctaText, 'i') })).toBeInTheDocument();
    });
    const learnMoreButtons = screen.getAllByText('Learn more');
    expect(learnMoreButtons.length).toBe(PRODUCTS.length);
  });

  it('renders the bottom CTA section', () => {
    render(<ProductsPage />);
    expect(screen.getByText('Ready to get started?')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
  });

  it('has correct links to product pages', () => {
    render(<ProductsPage />);
    PRODUCTS.forEach((product) => {
      const learnMoreLink = screen.getAllByText('Learn more').find((el) =>
        el.closest('a')?.getAttribute('href') === `/products/${product.id}`
      );
      expect(learnMoreLink).toBeInTheDocument();
    });
  });
});
