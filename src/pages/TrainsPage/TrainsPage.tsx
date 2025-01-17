import { useEffect, useState } from "react";
import { Menu, Preloader, Trains } from "../../components";
import { useCreateTrainingMutation } from "../../store/trainingsApi";

const tg = window.Telegram.WebApp;

export const TrainsPage = () => {
  const [initData, setInitData] = useState();

  const [createTraining, { isLoading }] = useCreateTrainingMutation();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    tg.ready();

    // Устанавливаем initData только если оно ещё не установлено
    if (!initData && tg?.initData) {
      setInitData(tg.initData);
    }
  }, [initData]);

  const handleCreateTraining = async () => {
    if (!initData) return; // Предотвращаем лишние вызовы

    try {
      const result = await createTraining({ init: initData }).unwrap();
      setTrainings(result.trainings);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    handleCreateTraining();
  }, [initData]);

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
