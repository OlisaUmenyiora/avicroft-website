import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/app/login/page';

describe('Login Page', () => {
  it('renders the welcome message', () => {
    render(<LoginPage />);
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
  });

  it('renders the Avicroft logo', () => {
    render(<LoginPage />);
    const logo = screen.getByAltText('Avicroft');
    expect(logo).toBeInTheDocument();
  });

  it('renders Google sign-in button', () => {
    render(<LoginPage />);
    expect(screen.getByText('Continue with Google')).toBeInTheDocument();
  });

  it('renders other options button', () => {
    render(<LoginPage />);
    expect(screen.getByText('See other options')).toBeInTheDocument();
  });

  it('renders email input', () => {
    render(<LoginPage />);
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument();
  });

  it('renders continue button', () => {
    render(<LoginPage />);
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('renders terms and privacy links', () => {
    render(<LoginPage />);
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('has correct legal link destinations', () => {
    render(<LoginPage />);
    const termsLink = screen.getByText('Terms of Service').closest('a');
    const privacyLink = screen.getByText('Privacy Policy').closest('a');

    expect(termsLink).toHaveAttribute('href', '/terms');
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('shows product selection after form submit', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText('Enter email address');
    const submitButton = screen.getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    // After submission, should show product selection
    expect(screen.getByText('Select your product to continue')).toBeInTheDocument();
  });
});
