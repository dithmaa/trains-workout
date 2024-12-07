import { TrainCard } from "..";
import styles from "./Trains.module.scss";
import { formatScheduleDate } from "../../hook_functions/hook_functions";

type Training = {
  id: number;
  sample_type: string;
  title_photo: string | null;
  training_sample_id: number;
  title: string;
  schedule: string;
};
interface TrainsProps {
  trainings: Training[];
}
export const Trains: React.FC<TrainsProps> = ({ trainings }) => {
  return (
    <div className={styles.root}>
      {trainings.map((train, index) => (
        <div key={index}>
          <h2 className="trains__title">
            {formatScheduleDate(train.schedule)}
          </h2>
          <TrainCard
            index={train.id}
            image={String(train.title_photo)}
            describtion={"Описание"}
            duration={String(train.training_sample_id)}
            title={train.title}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};
