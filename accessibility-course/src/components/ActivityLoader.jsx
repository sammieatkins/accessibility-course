"use client";
import AltTextPractice from "./activities/AltTextPractice";
import LinkTextPractice from "./activities/LinkTextPractice";
import SensoryCharacteristicsPractice from "./activities/SensoryCharacteristicsPractice";
import HeadingLevelsPractice from "./activities/HeadingLevelsPractice";
import SemanticHtmlPractice from "./activities/SemanticHtmlPractice";
import AriaPractice from "./activities/AriaPractice";
import AssistiveTechnologyPractice from "./activities/AssistiveTechnologyPractice";
import TestingPractice from "./activities/TestingPractice";
import DecorativeImagePractice from "./activities/DecorativeImagePractice";
import SkipNavPractice from "./activities/SkipNavPractice";
import LinkTextMatching from "./activities/LinkTextMatching";

const activityMap = {
  AltTextPractice,
  LinkTextPractice,
  SensoryCharacteristicsPractice,
  HeadingLevelsPractice,
  SemanticHtmlPractice,
  AriaPractice,
  AssistiveTechnologyPractice,
  TestingPractice,
  DecorativeImagePractice,
  SkipNavPractice,
  LinkTextMatching
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
