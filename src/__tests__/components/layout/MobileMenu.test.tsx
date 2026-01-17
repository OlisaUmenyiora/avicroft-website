import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from '@/components/layout/MobileMenu';

describe('MobileMenu', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders nothing when closed', () => {
    const { container } = render(<MobileMenu open={false} onClose={mockOnClose} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders menu content when open', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders close button when open', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    const closeButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders login button', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('has correct link destinations', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  it('renders Avicroft logo', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    expect(screen.getByAltText('Avicroft')).toBeInTheDocument();
  });

  it('calls onClose when navigation link is clicked', () => {
    render(<MobileMenu open={true} onClose={mockOnClose} />);
    const productsLink = screen.getByText('Products');
    fireEvent.click(productsLink);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
