import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  it('renders the page title', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument();
  });

  it('renders the page description', () => {
    render(<ContactPage />);
    expect(screen.getByText(/Have questions about our products/i)).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /Send us a message/i })).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/^Name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product of Interest/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Message$/i)).toBeInTheDocument();
  });

  it('renders product options in select', () => {
    render(<ContactPage />);
    expect(screen.getByRole('option', { name: 'Avicroft Wellness' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Avicroft Education (Coming Soon)' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Other' })).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactPage />);
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('renders contact information section', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /Contact Information/i })).toBeInTheDocument();
    // These are headings within contact info cards
    expect(screen.getByRole('heading', { name: /^Email$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Phone$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Location$/i })).toBeInTheDocument();
  });

  it('renders contact details', () => {
    render(<ContactPage />);
    expect(screen.getByText('hello@avicroft.com')).toBeInTheDocument();
    expect(screen.getByText('+234 123 456 7890')).toBeInTheDocument();
    expect(screen.getByText('Lagos, Nigeria')).toBeInTheDocument();
  });

  it('validates required fields', () => {
    render(<ContactPage />);
    const nameInput = screen.getByLabelText(/^Name$/i);
    const emailInput = screen.getByLabelText(/^Email$/i);
    const messageInput = screen.getByLabelText(/^Message$/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(messageInput).toBeRequired();
  });

  it('submits form with valid data', async () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByLabelText(/^Name$/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/^Email$/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/^Message$/i), { target: { value: 'Test message' } });

    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitButton);

    await waitFor(
      () => {
        expect(screen.getByText('Message sent!')).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
