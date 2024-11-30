'use client';

import React from "react";
import { useRouter } from "next/navigation";  
import "./feedback-list.css";

const AdminfeedbackList = () => {
  
  const router = useRouter();
  const feedbacks = [
    { id: 1, name: "Karim", stars: 5, text: "The app is great! Thank you for making this app. Everything is so convenient." },
    { id: 2, name: "Karim", stars: 4, text: "The app is great! Thank you for making this app. Everything is so convenient." },
    { id: 3, name: "Karim", stars: 3, text: "The app is great! Thank you for making this app. Everything is so convenient." },
    { id: 4, name: "Karim", stars: 5, text: "The app is great! Thank you for making this app. Everything is so convenient." },
    { id: 5, name: "Karim", stars: 4, text: "The app is great! Thank you for making this app. Everything is so convenient." },
  ];

  const renderStars = (count) => {
    return (
      <span className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < count ? "filled-star" : "empty-star"}>
            ★
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="adminfeedback-container">
      <h1>Feedback Lists</h1>

      <span><button className="logout-button" 
      onClick={() => router.push("/")}>Log out</button></span>
      
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="feedback-card">
          <h3>{feedback.name}</h3>
          {renderStars(feedback.stars)}
          <p>{feedback.text}</p>
        </div>
      ))}
      
    </div>
  );
};

export default AdminfeedbackList;