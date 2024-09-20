import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import EventCard from './EventCard'; // Adjust the import based on your file structure

const mockProps = {
  id: '1',
  title: 'Sample Event',
  date: '2024-09-30',
  time: '18:00',
  imageUrl: 'https://via.placeholder.com/240',
  description: 'This is a sample event description that has more than thirty-six words to demonstrate truncation in the EventCard component. It includes details about the event and other important information.',
};

describe('EventCard Component', () => {
  test('renders the EventCard with the correct title and details', () => {
    render(
      <MemoryRouter>
        <EventCard {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    expect(screen.getByText(/2024-09-30/i)).toBeInTheDocument();
    expect(screen.getByText(/18:00/i)).toBeInTheDocument();

    expect(screen.getByText(/This is a sample event description/i)).toBeInTheDocument();
    expect(screen.getByText(/demonstrate truncation/i)).toBeInTheDocument();
    expect(screen.getByText(/.../)).toBeInTheDocument();
  });

  test('renders the event image', () => {
    render(
      <MemoryRouter>
        <EventCard {...mockProps} />
      </MemoryRouter>
    );

    const eventImage = screen.getByRole('img', { name: mockProps.title });
    expect(eventImage).toBeInTheDocument();
    expect(eventImage).toHaveAttribute('src', mockProps.imageUrl);
  });

  test('renders the View details button with correct link', () => {
    render(
      <MemoryRouter>
        <EventCard {...mockProps} />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /view details/i });
    expect(button).toBeInTheDocument();

    expect(button.closest('a')).toHaveAttribute('href', '/event/1');
  });
});
