import React from "react";
import { useParams } from "react-router-dom";
import { OwnTrainsPage } from "../OwnTrainPage/OwnTrainPage";

export const TrainPage = () => {
  const { id } = useParams();

  return (
    <div className="train-page">
      {Number(id) === 3 ? (
        <OwnTrainsPage />
      ) : (
        <div className="train-page-base">
          <h1>Страница тренировки {id}</h1>
        </div>
      )}
    </div>
  );
};
