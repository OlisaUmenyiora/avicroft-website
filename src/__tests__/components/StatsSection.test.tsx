import { render, screen } from '@testing-library/react';
import { StatsSection } from '@/components/home/StatsSection';

describe('StatsSection', () => {
  it('renders the stats content', () => {
    render(<StatsSection />);
    expect(screen.getByText(/A growing ecosystem of/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/10,000\+ users/i)).toBeInTheDocument();
    expect(screen.getByText(/25\+ countries/i)).toBeInTheDocument();
  });

  describe('Floating Icons Positioning', () => {
    it('renders left side icons container', () => {
      render(<StatsSection />);
      const leftContainer = screen.getByTestId('left-icons-container');
      expect(leftContainer).toBeInTheDocument();
      expect(leftContainer).toHaveClass('left-0');
    });

    it('renders right side icons container', () => {
      render(<StatsSection />);
      const rightContainer = screen.getByTestId('right-icons-container');
      expect(rightContainer).toBeInTheDocument();
      expect(rightContainer).toHaveClass('right-0');
    });

    it('renders left side floating icons', () => {
      render(<StatsSection />);
      const leftIcons = ['wellness', 'chat', 'social', 'booking'];

      leftIcons.forEach((iconName) => {
        const icon = screen.getByTestId(`floating-icon-${iconName}`);
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('data-side', 'left');
      });
    });

    it('renders right side floating icons', () => {
      render(<StatsSection />);
      const rightIcons = ['education', 'cloud', 'payments', 'analytics'];

      rightIcons.forEach((iconName) => {
        const icon = screen.getByTestId(`floating-icon-${iconName}`);
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('data-side', 'right');
      });
    });

    it('ensures icons are positioned on edges only (no center positioning)', () => {
      render(<StatsSection />);

      // Get all floating icons
      const allIcons = screen.getAllByTestId(/^floating-icon-/);

      allIcons.forEach((icon) => {
        const side = icon.getAttribute('data-side');
        expect(side).toMatch(/^(left|right)$/);

        // Verify icons have edge positioning classes
        if (side === 'left') {
          expect(icon.className).toMatch(/-left-3|left-2/);
        } else {
          expect(icon.className).toMatch(/-right-3|right-2/);
        }
      });
    });

    it('renders correct number of icons on each side', () => {
      render(<StatsSection />);

      const leftIcons = screen.getAllByTestId(/^floating-icon-/).filter(
        (el) => el.getAttribute('data-side') === 'left'
      );
      const rightIcons = screen.getAllByTestId(/^floating-icon-/).filter(
        (el) => el.getAttribute('data-side') === 'right'
      );

      expect(leftIcons).toHaveLength(4);
      expect(rightIcons).toHaveLength(4);
    });

    it('all icons have rounded corners and shadow styling', () => {
      render(<StatsSection />);

      const allIcons = screen.getAllByTestId(/^floating-icon-/);

      allIcons.forEach((icon) => {
        expect(icon).toHaveClass('rounded-2xl');
        expect(icon).toHaveClass('shadow-lg');
      });
    });
  });
});
