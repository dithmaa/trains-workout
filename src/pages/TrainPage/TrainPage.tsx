import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ExercisesTop, Preloader, TopNav, Workouts } from "../../components";
import classNames from "classnames";
import {
  useCreateExercizeMutation,
  useCreateTrainingMutation,
} from "../../store/trainingsApi";
import { formatScheduleDate } from "../../utils/formatDate";

interface Training {
  id: number;
  title: string;
  title_photo: string;
  duration: number;
  schedule: string;
}

interface TrainPageProps {}

const tg = window.Telegram.WebApp;

export const TrainPage: React.FC<TrainPageProps> = () => {
  const [initData, setInitData] = useState();
  useEffect(() => {
    // Проверка, что WebApp инициализирован
    tg.ready();

    // Получение userId
    setInitData(tg?.initData);
  });

  const { id } = useParams();
  const location = useLocation();
  const isExercisePage =
    location.pathname === `/train-page/${id}/exercise-page`;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const linkPath = isExercisePage ? `/train-page/${0}` : `/trains`;

  const [createExercisez, { isLoading }] = useCreateExercizeMutation();
  const [createTraining] = useCreateTrainingMutation();

  const [training, setTraining] = useState({} as Training);
  const [exercizes, setExercizes] = useState([]);

  const handleCreateExercizes = async () => {
    try {
      const result = await createExercisez({
        init: initData,
        training_id: id,
      }).unwrap();

      setExercizes(result.exercizes);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({
        init: initData,
      }).unwrap();

      const selectedTraining = result.trainings.find(
        (item: Training) => item.id === parseInt(id!)
      );

      setTraining(selectedTraining);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  useEffect(() => {
    if (initData) {
      handleCreateExercizes();
      handleCreateTraining();
    }
  }, [initData]);

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
