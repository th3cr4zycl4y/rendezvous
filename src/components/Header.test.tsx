
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const renderWithTheme = (ui: React.ReactElement) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('Header Component', () => {
  test('renders the logo and menu buttons correctly on desktop', () => {
    renderWithTheme(<Header />);

    expect(screen.getByText('rendezvous')).toBeInTheDocument();
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('FAQS')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('displays drawer menu when clicking on menu icon in mobile view', () => {
    renderWithTheme(<Header />);

    const menuButton = screen.getByLabelText('Menu button');
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('closes the drawer when the close button is clicked', () => {
    renderWithTheme(<Header />);

    fireEvent.click(screen.getByLabelText('Menu button'));

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(screen.queryByText('Discover')).not.toBeVisible();
  });

  test('menu items are not visible on mobile', () => {
    renderWithTheme(<Header />);

    const menuButton = screen.getByLabelText('Menu button');
    fireEvent.click(menuButton);

    const discoverMenuItem = screen.getByText('Discover');
    expect(discoverMenuItem).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(discoverMenuItem).not.toBeVisible();
    const aboutMenuItem = screen.getByText('About us');
    expect(aboutMenuItem).not.toBeVisible();
  });
});
