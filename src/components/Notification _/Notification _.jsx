import styles from "./Notification_.module.css";

const Notification_ = ({ totalFeedback }) => {
  return totalFeedback ? null : (
    <>
      <p> No feedback yet </p>
    </>
  );
};

export default Notification_;
