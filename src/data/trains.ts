export const trainCards = Array.from({ length: 10 }, (_, index) =>
  require(`../assets/img/train-cards/${index + 1}.jpg`)
);

// Интерфейс для описания структуры данных
interface TrainData {
  dateTitle: string;
  title: string;
  description: string;
  duration: string;
  image: string;
}

export const trainData: TrainData[] = [
  {
    dateTitle: "Сегодня",
    title: "Сегодня",
    description: "Комплекс ОФП для тела (корпус, кор)",
    duration: "30 мин",
    image: trainCards[0],
  },
  {
    dateTitle: "Сегодня",
    title: "Сегодня",
    description: "Комплекс ОФП для тела (корпус, кор)",
    duration: "30 мин",
    image: trainCards[1],
  },
];
