import React, { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { ExercisesTop, TopNav } from "../../components";
import { trainData } from "../../data/trains";
import { Exercises } from "../../components/Exercises/Exercises";
import classNames from "classnames";
import { useCreateExercisezMutation } from "../../store/equipmentsApi";

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

  const linkPath = isExercisePage ? `/train-page/${id}` : `/trains`;
  console.log(linkPath);

  const [createTraining, { data, isLoading, error }] =
    useCreateExercisezMutation();
  const [exercizes, setExercizes] = useState([]);

  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({
        init: "758575043",
        training_id: 1,
      }).unwrap();
      console.log(result.exercizes);

      setExercizes(result.exercizes);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  useEffect(() => {
    handleCreateTraining();
  }, []);

  return (
    <div className="train-page">
      <div className="container">
        <TopNav linkPath={linkPath} title={trainDateString} />
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
          {!isExercisePage ? (
            <Exercises exercizes={exercizes} id={Number(id)} />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};
