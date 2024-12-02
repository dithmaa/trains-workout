import { Workout } from "./Workout/Workout";
interface WorkoutsProps {
  exercizes: any;
}
export const Workouts: React.FC<WorkoutsProps> = ({ exercizes }) => {
  return (
    <div className="workouts">
      {exercizes.map((item: any, index: number) => (
        <Workout title={item.title} image={item.title_photo} key={index} />
      ))}
    </div>
  );
};
