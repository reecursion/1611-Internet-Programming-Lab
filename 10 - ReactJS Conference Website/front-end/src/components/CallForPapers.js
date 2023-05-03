import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CallForPapers = () => {
  return (
    <div>
      <h1>Call for Papers</h1>
      <p>
        The International Conference on Natural Language Processing invites submissions of original research papers on all
        aspects of natural language processing, machine learning, and computational linguistics.
      </p>
      <h2>Topics of Interest</h2>
      <ul>
        <li>Text Classification</li>
        <li>Named Entity Recognition</li>
        <li>Machine Translation</li>
        <li>Text Generation</li>
        <li>Language Modeling</li>
        <li>Sentiment Analysis</li>
        <li>Information Retrieval</li>
        <li>Question Answering</li>
        <li>Dialog Systems</li>
        <li>And more!</li>
      </ul>
      <h2>Submission Guidelines</h2>
      <ul>
        <li>Papers must be written in English.</li>
        <li>Papers should be no more than 8 pages long, including references.</li>
        <li>Papers must be formatted according to the ACL 2021 style guidelines.</li>
        <li>Submissions must be in PDF format.</li>
        <li>Authors may submit multiple papers, but each paper must be submitted separately.</li>
      </ul>
      <h2>Important Dates</h2>
      <ul>
        <li>Abstract Submission Deadline: September 1, 2023</li>
        <li>Full Paper Submission Deadline: September 15, 2023</li>
        <li>Notification of Acceptance: October 1, 2023</li>
      </ul>
      <p>
        We look forward to receiving your submissions and seeing you at the conference!
      </p>
      <p className='center-button'>
        <Link to="/registration">
            <Button variant="primary" type="submit">Learn more</Button>
        </Link>
      </p>
      <br></br>
    </div>
    
  );
};

export default CallForPapers;
