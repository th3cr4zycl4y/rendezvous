import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContextProvider';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import UserIcon from '../assets/icons/user';
import LocationIcon from '../assets/icons/location';
import TimeIcon from '../assets/icons/time';
import CalendarIcon from '../assets/icons/calender';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Button } from '@mui/material';
import MailIcon from '../assets/icons/mail';
import TwitterIcon from '../assets/icons/twitter';
import InstagramIcon from '../assets/icons/instagram';

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any | null>(null);
  const context = useContext(EventContext);

  useEffect(() => {
    if (context?.events) {
      const selectedEvent = context.events.find((e) => e.id.toString() === id);
      setEvent(selectedEvent || null);
    }
  }, [context?.events, id]);

  if (!event) {
    return <div>🧐 Network Error, kindly refresh 🔃</div>;
  }

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, "EEEE, MMMM do, yyyy", { locale: enUS });
  };

  const formatTime = (timeString: string) => {
    const time = parseISO(`1970-01-01T${timeString}:00`);
    return format(time, "haaa", { locale: enUS });
  };

  function calculatePrice(price: number) {
    const percent = 80;
    const amount = (price * percent) / 100;

    const totalPrice = price + amount;

    return totalPrice;
  }


  return (
    <section className='event-detail'>
      <div className="container">
        <div className='event-image'>
          <img src={event.imageUrl} alt={event.title} />
        </div>
        <div className='event-content'>
          <div className='event-info'>
            <h2 className='event-title'>{event.title}</h2>
            <div className='event-date'>
              <div className="flex">
                <div className='event-data-icon'>
                  <CalendarIcon />
                  <p>{formatDate(event.date)}</p>
                </div>
                <div className='event-data-icon'>
                  <TimeIcon />
                  <p>{formatTime(event.time)}</p>
                </div>
              </div>

              <div className='event-data-icon location'>
                <LocationIcon />
                <p>{event.address}</p>
              </div>
              <div className="flex">
                <div className='event-data-icon'>
                  <UserIcon />
                  <p>{event.organizer.name}</p>
                </div>
                <div className='event-data-icon'>
                  <CategoryOutlinedIcon color="primary" fontSize='small' />
                  <p>{event.category}</p>
                </div>
              </div>
            </div>
            <div className='event-description'>
              <h3>Event Description</h3>
              <p>{event.description}</p>
            </div>
            <div className='event-price'>
              <h3>Tickets Pricing</h3>

              <div className='event-amount'>
                <div className="single">
                  <h4>Single</h4>
                  <p>{event.price === 0 ? 'Free' : `NGN ${event.price}`}</p>
                </div>
                <div className="single">
                  <h4>Pair</h4>
                  <p>{event.price === 0 ? 'Free' : `NGN ${calculatePrice(event.price)}`}</p>
                </div>

              </div>
              <Button color="primary" variant="contained" size="small" sx={{ textTransform: 'none', px: 4, mr: 4, py: 1, mt: "3rem" }} >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="event-contact">
            <h3>
              Contact Organizers
            </h3>
            <div className="social-icon">
              <Link to={event.organizer.email} aria-label="Email">
                <MailIcon />
              </Link>
              <Link to={event.organizer.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </Link>
              <Link to={event.organizer.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </Link>
            </div>

            <h3>
              Direction
            </h3>

            <div className="map">
              <MapContainer center={[event.lat, event.long]} zoom={15} scrollWheelZoom={false} style={{ height: '492px', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[event.lat, event.long]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>

            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
