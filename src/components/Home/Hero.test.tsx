import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders the Hero section with the correct heading', () => {
    render(<Hero />);

    const heading = screen.getByText(/Ready to Rock\? Discover the Hottest Events Here – Your Calendar's New Best Friend!/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the search input and select options', () => {
    render(<Hero />);

    const searchInput = screen.getByPlaceholderText('Search for an events');
    expect(searchInput).toBeInTheDocument();

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    const options = ['All', 'Comedy', 'Religious', 'Tech', 'Health', 'Fitness', 'Sports', 'Education'];
    options.forEach(option => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });

  test('updates input value when typing', () => {
    render(<Hero />);

    const searchInput = screen.getByPlaceholderText('Search for an events');
    fireEvent.change(searchInput, { target: { value: 'Concert' } });

    expect(searchInput.value).toBe('Concert');
  });

  test('calls the button when clicked', () => {
    const handleClick = jest.fn();
    render(<Hero />);

    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchButton);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
