import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviewsLS = localStorage.getItem("reviewsLS");
    return savedReviewsLS
      ? JSON.parse(savedReviewsLS)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("reviewsLS", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setReviews({
          ...reviews,
          good: reviews.good + 1,
        });
        break;
      case "neutral":
        setReviews({
          ...reviews,
          neutral: reviews.neutral + 1,
        });
        break;
      case "bad":
        setReviews({
          ...reviews,
          bad: reviews.bad + 1,
        });
        break;
      case "reset":
        setReviews({
          good: 0,
          neutral: 0,
          bad: 0,
        });
    }
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const percentagePositiveReviews = Math.round(
    (reviews.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options onClick={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positiveReviews={percentagePositiveReviews}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
