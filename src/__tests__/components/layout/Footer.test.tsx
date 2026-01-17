import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from '@/components/layout/Footer';

describe('Footer', () => {
  it('renders the trusted by section', () => {
    render(<Footer />);
    expect(screen.getByText(/Trusted and loved by fast growing/i)).toBeInTheDocument();
  });

  it('renders social media icons in social proof section', () => {
    render(<Footer />);
    const youtubeLinks = screen.getAllByLabelText('YouTube');
    expect(youtubeLinks.length).toBeGreaterThan(0);

    const twitterLinks = screen.getAllByLabelText('X (Twitter)');
    expect(twitterLinks.length).toBeGreaterThan(0);

    const facebookLinks = screen.getAllByLabelText('Facebook');
    expect(facebookLinks.length).toBeGreaterThan(0);

    const instagramLinks = screen.getAllByLabelText('Instagram');
    expect(instagramLinks.length).toBeGreaterThan(0);

    const linkedinLinks = screen.getAllByLabelText('LinkedIn');
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  it('renders Follow Us text', () => {
    render(<Footer />);
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
  });

  it('renders newsletter signup section', () => {
    render(<Footer />);
    expect(screen.getByText(/Sign up for updates/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Get the latest updates/i)).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('renders privacy and terms links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
  });

  it('renders the Avicroft logo', () => {
    render(<Footer />);
    const logos = screen.getAllByAltText('Avicroft');
    expect(logos.length).toBeGreaterThan(0);
  });

  it('handles newsletter form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Footer />);

    const emailInput = screen.getByPlaceholderText(/Get the latest updates/i);
    const submitButton = screen.getByText('Sign up');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith('Newsletter signup:', 'test@example.com');
    consoleSpy.mockRestore();
  });
});
