import React from 'react';

const Contact = () => {
  return (
    <div class="contact-page">
      <h1>Contact Us</h1>
      <div class="contact-info">
        <div class="contact-details">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
          <ul>
            <li>
              <strong>Address:</strong> 123 Main Street, Anytown USA
            </li>
            <li>
              <strong>Phone:</strong> (555) 123-4567
            </li>
            <li>
              <strong>Email:</strong> info@conference.com
            </li>
          </ul>
        </div>
        <div class="contact-form">
          <h2>Contact Form</h2>
          <form>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
