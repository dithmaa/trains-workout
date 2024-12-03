import { useEffect, useState } from "react";
import { Workouts } from "../../../components";
import { useCreateExercisezMutation } from "../../../store/equipmentsApi";

export default function ExercisePage() {
  const [createTraining, { data, isLoading, error }] =
    useCreateExercisezMutation();
  const [exercizes, setExercizes] = useState([]);

  const handleCreateTraining = async () => {
    try {
      const result = await createTraining({
        init: "758575043",
        training_id: 1,
      }).unwrap();

      setExercizes(result.exercizes);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  useEffect(() => {
    handleCreateTraining();
  }, []);

  return (
    <div className="exercise-page">
      <Workouts exercizes={exercizes} />
    </div>
  );
}
