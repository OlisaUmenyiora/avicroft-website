import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('About Page', () => {
  it('renders the main headline', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Building software that/i)).toBeInTheDocument();
    expect(screen.getByText('grows')).toBeInTheDocument();
  });

  it('renders the mission section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders mission description', () => {
    render(<AboutPage />);
    expect(screen.getByText(/We believe every business deserves access/i)).toBeInTheDocument();
  });

  it('renders the values section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Our Values')).toBeInTheDocument();
  });

  it('renders all core values', () => {
    render(<AboutPage />);
    const values = ['Simplicity', 'Reliability', 'Growth', 'Support', 'Innovation', 'Accessibility'];
    values.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('renders the CTA section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Ready to grow with us?')).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<AboutPage />);
    expect(screen.getByText('View Products')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('has correct link destinations', () => {
    render(<AboutPage />);
    expect(screen.getByText('View Products').closest('a')).toHaveAttribute('href', '/products');
    expect(screen.getByText('Contact Us').closest('a')).toHaveAttribute('href', '/contact');
  });
});
