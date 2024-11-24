import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { ExercisesTop, TopNav } from "../../components";
import { trainData } from "../../data/trains";
import { Exercises } from "../../components/Exercises/Exercises";
import classNames from "classnames";

interface TrainPageProps {}

export const TrainPage: React.FC<TrainPageProps> = () => {
  const { id } = useParams();
  const location = useLocation();
  const isExercisePage =
    location.pathname === `/train-page/${id}/exercise-page`;

  const trainDateString = trainData[Number(id)].dateTitle;
  const trainPicture = trainData[Number(id)].image;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="train-page">
      <div className="container">
        <TopNav title={trainDateString} id={Number(id)} />
        {trainPicture !== "none" && (
          <div className="train-page__picture">
            <img src={trainPicture} alt="" />
          </div>
        )}
        <div
          className={classNames("exercises", {
            "no-image": trainPicture === "none",
          })}
        >
          <ExercisesTop isExercisePage={isExercisePage} id={Number(id)} />
          {!isExercisePage ? <Exercises id={Number(id)} /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};
