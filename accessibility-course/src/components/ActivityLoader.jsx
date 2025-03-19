"use client";
import AltTextPractice from "./activities/AltTextPractice";
import LinkTextPractice from "./activities/LinkTextPractice";
import SensoryCharacteristicsPractice from "./activities/SensoryCharacteristicsPractice";

const activityMap = {
  AltTextPractice,
  LinkTextPractice,
  SensoryCharacteristicsPractice,
};

const ActivityLoader = ({ activity }) => {
  const ActivityComponent = activityMap[activity] || null;

  return (
    <div>
      {ActivityComponent ? <ActivityComponent /> : <p>Loading activity...</p>}
    </div>
  );
};

export default ActivityLoader;
