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
    dateTitle: "Завтра",
    title: "Персональная тренировка",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "15 мин",
    image: trainCards[1],
  },
  {
    dateTitle: "Чт, 14 ноября",
    title: "Корпус, кор",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[2],
  },
  {
    dateTitle: "Чт, 16 ноября",
    title: "Своя тренировка",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: "none",
  },
  {
    dateTitle: "Чт, 18 ноября",
    title: "Присед с весом",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[3],
  },
  {
    dateTitle: "Чт, 20 ноября",
    title: "Бегаем на дорожке",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[4],
  },
  {
    dateTitle: "Чт, 22 ноября",
    title: "Спринты",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[5],
  },
  {
    dateTitle: "Чт, 24 ноября",
    title: "Выносливость",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[6],
  },
  {
    dateTitle: "Чт, 26 ноября",
    title: "Бегаем на дорожке",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[7],
  },
  {
    dateTitle: "Чт, 30 ноября",
    title: "Прыжки на скакалке",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[8],
  },
  {
    dateTitle: "Пн, 2 декабря",
    title: "Прыжки на скакалке",
    description: "Тренировка для окрепших любителей среднего уровня и выше",
    duration: "25 мин",
    image: trainCards[9],
  },
];
