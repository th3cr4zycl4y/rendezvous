import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { EventContext } from '../context/EventContextProvider';
import EventPage from './EventPage';


const mockEvent = {
  id: '1',
  title: 'Sample Event',
  date: '2024-09-30',
  time: '18:00',
  imageUrl: 'https://via.placeholder.com/240',
  description: 'This is a sample event description.',
  address: '123 Event St, City',
  organizer: { name: 'John Doe' },
  category: 'Music',
  price: 2000,
  lat: 12.34,
  long: 56.78,
};

const mockContextValue = {
  events: [mockEvent],
};

describe('EventPage Component', () => {
  test('renders the event details correctly', async () => {
    render(
      <EventContext.Provider value={mockContextValue}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Route path="/event/:id">
            <EventPage />
          </Route>
        </MemoryRouter>
      </EventContext.Provider>
    );

    expect(await screen.findByText(mockEvent.title)).toBeInTheDocument();

    expect(screen.getByText(/September 30th, 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/6:00pm/i)).toBeInTheDocument();

    expect(screen.getByText(mockEvent.address)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.organizer.name)).toBeInTheDocument();

    expect(screen.getByText(mockEvent.description)).toBeInTheDocument();

    expect(screen.getByText(/NGN 2000/i)).toBeInTheDocument();
  });

  test('renders the map with correct coordinates', async () => {
    render(
      <EventContext.Provider value={mockContextValue}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Route path="/event/:id">
            <EventPage />
          </Route>
        </MemoryRouter>
      </EventContext.Provider>
    );

    expect(await screen.findByText(/Direction/i)).toBeInTheDocument();
  });

  test('calculates ticket prices correctly', () => {
    const { result } = renderHook(() => EventPage());
    const { calculatePrice } = result.current;

    expect(calculatePrice(2000)).toBe(3600);
  });

  test('renders the Buy Now button', async () => {
    render(
      <EventContext.Provider value={mockContextValue}>
        <MemoryRouter initialEntries={['/event/1']}>
          <Route path="/event/:id">
            <EventPage />
          </Route>
        </MemoryRouter>
      </EventContext.Provider>
    );

    const button = screen.getByRole('button', { name: /buy now/i });
    expect(button).toBeInTheDocument();
  });
});
