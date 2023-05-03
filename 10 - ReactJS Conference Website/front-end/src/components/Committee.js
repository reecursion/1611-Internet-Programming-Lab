import React from 'react';
import './Committee.css';
import person1 from '../images/person1.jpg';
import person2 from '../images/person2.png';
import person3 from '../images/person3.png';
import person4 from '../images/person4.png';

const Committee = () => {
  return (
    <div className="committee">
      <h1>Our Committee Members</h1>
      <div className="member-container">
        <div className="member">
          <img src={person2} alt="Committee Member 1" />
          <h2>John Doe</h2>
          <p>Position: Chair</p>
        </div>
        <div className="member">
          <img src={person1} alt="Committee Member 2" />
          <h2>Jane Smith</h2>
          <p>Position: Vice Chair</p>
        </div>
        <div className="member">
          <img src={person3} alt="Committee Member 3" />
          <h2>Mark Johnson</h2>
          <p>Position: Treasurer</p>
        </div>
        <div className="member">
          <img src={person4} alt="Committee Member 3" />
          <h2>Priya Jonas</h2>
          <p>Position: Member</p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
