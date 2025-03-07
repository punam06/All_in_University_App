import React from 'react';

const ClassRoutine = () => {
  const classes = [
    { name: 'Computer Science 101', time: '10:00 AM - 11:30 AM', room: 'Room 301', faculty: 'Dr. John Smith', type: 'Lecture' },
    { name: 'Advanced Mathematics', time: '11:45 AM - 1:15 PM', room: 'Room 205', faculty: 'Dr. Sarah Johnson', type: 'Lecture' },
    { name: 'Physics Lab', time: '2:00 PM - 4:00 PM', lab: 'Physics Lab 2', faculty: 'Prof. Michael Chen', type: 'Practical' },
  ];

  return (
    <div className="class-routine">
      <h1>Class Routine</h1>
      <table>
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lectures</td>
            <td>Labs</td>
            <td>Exams</td>
            <td>Lectures</td>
            <td>Labs</td>
            <td>Exams</td>
            <td>Free</td>
          </tr>
        </tbody>
      </table>
      {classes.map((cls, index) => (
        <div key={index} className="class">
          <h2>{cls.name}</h2>
          <p>Time: {cls.time}</p>
          <p>Room: {cls.room}</p>
          <p>Faculty: {cls.faculty}</p>
          <p>Type: {cls.type}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ClassRoutine;
