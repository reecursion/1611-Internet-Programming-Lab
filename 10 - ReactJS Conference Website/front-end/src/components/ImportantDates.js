import React from 'react';
import './ImportantDates.css';

const ImportantDates = () => {
  return (
    <div className="important-dates">
      <h1>Important Dates</h1>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Submission Deadline</td>
            <td>June 30th, 2023</td>
          </tr>
          <tr>
            <td>Notification of Acceptance</td>
            <td>August 15th, 2023</td>
          </tr>
          <tr>
            <td>Camera-Ready Paper Deadline</td>
            <td>September 1st, 2023</td>
          </tr>
          <tr>
            <td>Conference Dates</td>
            <td>October 15th-17th, 2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDates;
