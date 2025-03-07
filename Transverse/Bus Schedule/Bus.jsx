import React from 'react';

const BusSchedule = () => {
  const routes = [
    { route: 'Route 4 - Shabbag', currentLocation: 'TSC', nextStop: 'Nilkhet (4 mins)', passengers: '32/40' },
    { route: 'Route 5 - DCHS', currentLocation: 'Mohakhali', nextStop: 'Banani (7 mins)', passengers: '25/40' },
    { route: 'Route 6 - Mirpur 10', currentLocation: 'Mirpur 1', nextStop: 'Sony Cinema (6 mins)', passengers: '30/40' },
    { route: 'Route 7 - Kakrayil', currentLocation: 'Malibagh', nextStop: 'Mouchak (3 mins)', passengers: '22/40' },
    { route: 'Route 8 - Magbazar', currentLocation: 'Malibagh', nextStop: 'Mouchak (3 mins)', passengers: '22/40' },
    { route: 'Route 9 - Khamarbari', currentLocation: 'Farngate', nextStop: 'Bijoy Sarani (8 mins)', passengers: '35/40' },
  ];

  return (
    <div className="bus-schedule">
      <h1>Bus Schedule</h1>
      {routes.map((route, index) => (
        <div key={index} className="route">
          <h2>{route.route}</h2>
          <p>Current Location: {route.currentLocation}</p>
          <p>Next Stop: {route.nextStop}</p>
          <p>Passengers: {route.passengers}</p>
          <button>Track Live</button>
        </div>
      ))}
    </div>
  );
};

export default BusSchedule;
