import { useEffect, useState } from "react";
import { Menu, Preloader, Trains } from "../../components";
import { useCreateTrainingMutation } from "../../store/trainingsApi";

export const TrainsPage = () => {
  const [createTraining, { data, isLoading, error }] =
    useCreateTrainingMutation();
  const [trainings, setTrainings] = useState([]);

  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({ init: "758575043" }).unwrap();
      setTrainings(result.trainings);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  useEffect(() => {
    handleCreateTraining();
  }, []);

  if (isLoading)
    return (
      <>
        <Menu active={1} />
        <Preloader hasMenu />
      </>
    );

  return (
    <div className="container">
      <Menu active={1} />
      <Trains trainings={trainings} />
    </div>
  );
};
