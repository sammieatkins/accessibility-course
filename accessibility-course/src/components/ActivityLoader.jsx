import AltTextPractice from "./activities/altTextPractice";
import LinkTextPractice from "./activities/LinkTextPractice";

const activityMap = {
  AltTextPractice,
  LinkTextPractice,
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
