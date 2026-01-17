import { render, screen } from '@testing-library/react';
import LoginPage from '@/app/login/page';
import { PRODUCTS } from '@/lib/constants';

describe('Login Page', () => {
  it('renders the welcome message', () => {
    render(<LoginPage />);
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
  });

  it('renders product selection instructions', () => {
    render(<LoginPage />);
    expect(screen.getByText('Select your product to login')).toBeInTheDocument();
  });

  it('renders all product options', () => {
    render(<LoginPage />);
    PRODUCTS.forEach((product) => {
      expect(screen.getByText(`Avicroft ${product.name}`)).toBeInTheDocument();
    });
  });

  it('renders product taglines', () => {
    render(<LoginPage />);
    PRODUCTS.forEach((product) => {
      expect(screen.getByText(product.tagline)).toBeInTheDocument();
    });
  });

  it('has correct links to product login pages', () => {
    render(<LoginPage />);
    PRODUCTS.forEach((product) => {
      const link = screen.getByText(`Avicroft ${product.name}`).closest('a');
      expect(link).toHaveAttribute('href', product.url);
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('renders sign up link', () => {
    render(<LoginPage />);
    expect(screen.getByText(/Don't have an account/i)).toBeInTheDocument();
    expect(screen.getByText('Get started for free')).toBeInTheDocument();
  });

  it('has correct link to products page for signup', () => {
    render(<LoginPage />);
    const signupLink = screen.getByText('Get started for free').closest('a');
    expect(signupLink).toHaveAttribute('href', '/products');
  });

  it('renders support link', () => {
    render(<LoginPage />);
    expect(screen.getByText('Contact support')).toBeInTheDocument();
  });

  it('has correct link to contact page for support', () => {
    render(<LoginPage />);
    const supportLink = screen.getByText('Contact support').closest('a');
    expect(supportLink).toHaveAttribute('href', '/contact');
  });
});
