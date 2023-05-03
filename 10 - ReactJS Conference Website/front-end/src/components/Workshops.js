import React from 'react';
import './Workshops.css';
import workshop1 from '../images/workshop1.jpg';
import workshop2 from '../images/workshop2.jpg';
import workshop3 from '../images/workshop3.jpg';

const Workshops = () => {
  return (
    <div className="workshops">
      <div className="workshop">
        <h2>ACL-IJCNLP Workshop on Multilingual Surface Realisation</h2>
        <img src={workshop1} alt="Workshop 1" />
        <p>
          This workshop aims to bring together researchers interested in
          multilingual surface realization, including sentence planning and
          surface realization tasks for different languages. The workshop will
          cover a wide range of topics related to multilingual surface
          realization, such as deep learning-based models, neural machine
          translation, and many more.
        </p>
        <a href="https://msr2021.github.io/">
          <button className="center-button">Register</button>
        </a>
      </div>
      <div className="workshop">
        <h2>The Fourth Workshop on Representation Learning for NLP</h2>
        <img src={workshop2} alt="Workshop 2" />
        <p>
          The RepL4NLP workshop aims to bring together researchers interested in
          the latest advances in representation learning for natural language
          processing. Topics covered in this workshop include word and sentence
          embeddings, neural language models, graph-based methods, and more.
        </p>
        <a href="https://rep4nlp2021.github.io/">
          <button className="center-button">Register</button>
        </a>
      </div>
      <div className="workshop">
        <h2>The First Workshop on NLP for Positive Impact</h2>
        <img src={workshop3} alt="Workshop 3" />
        <p>
          The NLP4PI workshop focuses on the positive impact that NLP techniques
          can have on society. Topics covered include NLP for disaster relief,
          healthcare, sustainability, and other areas where NLP can be used for
          social good. This workshop brings together researchers, practitioners,
          and policymakers interested in using NLP for positive change.
        </p>
        <a href=" https://sites.google.com/view/nlp4pi2021/home">
          <button className="center-button">Register</button>
        </a>
      </div>
    </div>
  );
};

export default Workshops;
