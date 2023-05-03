import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1>Welcome to the NLP Conference</h1>
        <p>
          Join us for a stimulating exchange of ideas on the latest developments
          in Natural Language Processing. The conference will take place from
          September 1st to 3rd, 2023, in New York City.
        </p>
        <Link to="/call-for-papers">
          <Button variant="primary" type="submit">
            Learn more
          </Button>
        </Link>
      </div>

      <div className="about-section">
        <h2>About the Conference</h2>
        <p>
          The NLP Conference is an international gathering of researchers,
          developers, and practitioners who work on Natural Language Processing.
          The conference provides a platform for discussing the latest
          developments, exchanging ideas, and fostering collaborations.
        </p>
        <p>
          This year's conference will feature keynote speeches, research
          presentations, tutorials, workshops, and a poster session.
          Participants will have the opportunity to network with their peers and
          learn about the latest developments in NLP.
        </p>
      </div>
      <div className="sponsors-section">
        <h2>Our Sponsors</h2>
        <div className="sponsor-logos">
          <img src="https://via.placeholder.com/100" alt="Sponsor 1" />
          <img src="https://via.placeholder.com/100" alt="Sponsor 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
