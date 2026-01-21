import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/layout/Navbar';

describe('Navbar', () => {
  it('renders the Avicroft logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Avicroft');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders login button', () => {
    render(<Navbar />);
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it('has correct link destinations', () => {
    render(<Navbar />);
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  it('renders mobile menu button', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('opens mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    // MobileMenu should now be visible - check for close button
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });
});
