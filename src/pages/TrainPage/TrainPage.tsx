import React, { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { ExercisesTop, Preloader, TopNav, Workouts } from "../../components";
import { Exercises } from "../../components/Exercises/Exercises";
import classNames from "classnames";
import {
  useCreateExercizeMutation,
  useCreateTrainingMutation,
} from "../../store/trainingsApi";
import { formatScheduleDate } from "../../hook_functions/hook_functions";

interface Training {
  id: number;
  title: string;
  title_photo: string;
  duration: number;
  schedule: string;
}

interface TrainPageProps {}

export const TrainPage: React.FC<TrainPageProps> = () => {
  const { id } = useParams();
  const location = useLocation();
  const isExercisePage =
    location.pathname === `/train-page/${id}/exercise-page`;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const linkPath = isExercisePage ? `/train-page/${0}` : `/trains`;

  const [createExercisez, { data, isLoading, error }] =
    useCreateExercizeMutation();
  const [createTraining] = useCreateTrainingMutation();

  const [training, setTraining] = useState({} as Training);
  const [exercizes, setExercizes] = useState([]);

  const handleCreateExercizes = async () => {
    try {
      const result = await createExercisez({
        init: "758575043",
        training_id: 1,
      }).unwrap();

      setExercizes(result.exercizes);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({
        init: "758575043",
      }).unwrap();

      const selectedTraining = result.trainings.find(
        (item: Training) => item.id === parseInt(id!)
      );
      console.log("result.trainings", result.trainings);

      setTraining(selectedTraining);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  useEffect(() => {
    handleCreateExercizes();
    handleCreateTraining();
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <div className="train-page">
      <div className="container">
        <TopNav
          linkPath={linkPath}
          handleSetActivePage={() => null}
          title={formatScheduleDate(training.schedule)}
        />
        {training.title_photo !== "none" && (
          <div className="train-page__picture">
            <img src={training.title_photo} alt="" />
          </div>
        )}
        <div
          className={classNames("exercises", {
            "no-image": training.title_photo === "none",
          })}
        >
          <ExercisesTop
            title={training.title}
            isExercisePage={isExercisePage}
            id={Number(id)}
          />
          {<Workouts trainingId={training.id} exercizes={exercizes} />}
        </div>
      </div>
    </div>
  );
};
