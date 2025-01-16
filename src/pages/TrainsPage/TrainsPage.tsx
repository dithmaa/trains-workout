import { useEffect, useState } from "react";
import { Menu, Preloader, Trains } from "../../components";
import { useCreateTrainingMutation } from "../../store/trainingsApi";

const tg = window.Telegram.WebApp;

export const TrainsPage = () => {
  const [initData, setInitData] = useState();
  useEffect(() => {
    // Проверка, что WebApp инициализирован
    tg.ready();

    // Получение userId
    setInitData(tg?.initData);
  });

  const [createTraining, { isLoading }] = useCreateTrainingMutation();
  const [trainings, setTrainings] = useState([]);

  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({ init: initData }).unwrap();
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
