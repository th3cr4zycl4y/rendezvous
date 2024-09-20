import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import axios from 'axios';


interface Organizer {
  name: string;
  email: string;
  twitterUrl: string;
  instagram: string;
  phone: string;
}
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  city: string;
  country: string;
  long: string;
  lat: string;
  category: string;
  imageUrl: string;
  price: number;
  description: string;
  organizer: Organizer;
}

interface EventContextType {
  events: Event[];
  loading: boolean;
}

export const EventContext = createContext<EventContextType | undefined>(undefined);

const EventProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://rendezvous-events.onrender.com/events?page=1');
        setEvents(response.data.data.allEvents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, loading }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
