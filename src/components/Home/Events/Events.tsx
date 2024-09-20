import React, { ChangeEvent, useContext, useState } from 'react';
import { Button, Pagination } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { EventContext } from '../../../context/EventContextProvider';
import CardSkeleton from '../../loader/CardSkeleton';
import EventCard from './EventCard';

const Events = () => {
  const eventContext = useContext(EventContext);
  const [page, setPage] = useState(1);
  const eventsPerPage = 3;

  if (!eventContext) {
    return <div>🧐 Network Error, kindly refresh 🔃</div>;
  }

  const { events, loading } = eventContext;

  const indexOfLastEvent = page * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className="events">
      <div className="container">
        <div className="title">
          <h2>Trending Events</h2>
          <Button
            variant="contained"
            size="small"
            className="arrow-button"
            endIcon={<NorthEastIcon />}
          >
            View All Trending Events
          </Button>
        </div>
        <div className="cards">
          {loading
            ?
            [...Array(eventsPerPage)].map((_, index) => (
              <CardSkeleton key={index} />
            ))
            :
            currentEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                imageUrl={event.imageUrl}
                description={event.description}
              />
            ))
          }
        </div>

        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </section>
  );
};

export default Events;
