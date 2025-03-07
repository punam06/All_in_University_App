import React from 'react';

const EventsClubs = () => {
  const events = [
    { name: 'Photography Club Meetup', date: 'March 15, 2024', location: 'Art Center', organizer: 'Emma Thompson', spots: '15/30' },
    { name: 'Tech Innovation Fair', date: 'April 5, 2024', location: 'Engineering Block', organizer: 'Tech Club', type: 'Exhibition' },
    { name: 'Debate Club Finals', date: 'March 20, 2024', location: 'Main Auditorium', organizer: 'Debate Society', type: 'Free Entry' },
    { name: 'Music Club Performance', date: 'March 25, 2024', location: 'Student Center', organizer: 'Music Club', type: 'Concert' },
  ];

  return (
    <div className="events-clubs">
      <h1>Events & Clubs</h1>
      <table>
        <thead>
          <tr>
            <th>All Events</th>
            <th>My Events</th>
            <th>Clubs</th>
            <th>Calendar</th>
          </tr>
        </thead>
      </table>
      {events.map((event, index) => (
        <div key={index} className="event">
          <h2>{event.name}</h2>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Organizer: {event.organizer}</p>
          <p>Spots: {event.spots}</p>
          <button>RSVP Now</button>
        </div>
      ))}
    </div>
  );
};

export default EventsClubs;
