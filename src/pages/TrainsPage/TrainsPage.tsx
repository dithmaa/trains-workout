import { useEffect, useState } from "react";
import { Menu, Preloader, Trains } from "../../components";
import { useCreateTrainingMutation } from "../../store/trainingsApi";

const tg = window.Telegram.WebApp;

export const TrainsPage = () => {
  const [userId, setUserId] = useState<number>(758575043);
  useEffect(() => {
    // Проверка, что WebApp инициализирован
    tg.ready();

    // Получение userId
    setUserId(tg?.initDataUnsafe?.user?.id);
  });

  const [createTraining, { isLoading }] = useCreateTrainingMutation();
  const [trainings, setTrainings] = useState([]);

  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({ init: userId.toString() }).unwrap();
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
