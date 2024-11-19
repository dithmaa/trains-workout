import { TrainCard } from ".";
import { trainData } from "../data/trains";

export const Trains = () => {
  return (
    <div className="trains">
      {trainData.map((train, index) => (
        <div key={index}>
          {/* Заголовок даты */}
          <h2 className="trains__title">{!(index == 0) && train.dateTitle}</h2>

          {/* Карточка тренировки */}
          <TrainCard
            index={index}
            image={train.image}
            describtion={train.description}
            duration={train.duration}
            title={train.title}
          />
        </div>
      ))}
    </div>
  );
};
