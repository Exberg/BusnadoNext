'use client';

import React, { useState }from 'react';
import "./Feedback.css";
import Link from 'next/link';

function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="feedback-container">
      {isSubmitted ?(
        <div className="tq-container">
          <h2>Thank you for your feedback!</h2>
          <div className="link-style">
            <Link href="/feedback">Submit another feedback</Link>
            <Link href="/">Return Home</Link>
          </div>
        </div>
        
      ):(
        <form onSubmit={handleSubmit}>
          <div className="feedback-form">
            <h2>Feedback</h2>
            <p>Help us improve our service by providing your feedback</p>

            {/* Star Rating */}
            <label>Rate your experience:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star">
                  ★
                </span>
              ))}
            </div>

            {/* Comments Section */}
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              placeholder="Share your thoughts about our services..."
            ></textarea>

            {/* Submit Button */}
            <button className="submit-btn">Submit Feedback</button>
          </div>
        </form>
      )}

    </div>
  );
};

export default Feedback;