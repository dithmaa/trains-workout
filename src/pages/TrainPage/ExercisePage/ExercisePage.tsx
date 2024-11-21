import workoutImg1 from "../../../assets/img/workouts/1.png";
export default function ExercisePage() {
  return (
    <div className="exercise-page">
      <div className="workouts">
        <div className="workout">
          <h3 className="workout__title">Тренировка #1</h3>
          <div className="workout__content">
            <div className="workout__picture">
              <img src={workoutImg1} alt="" />
            </div>
            <div className="workout__text">
              Найдете баланс в тренировках — найдете его в жизни. В этом поможет
              ком..
            </div>
          </div>
        </div>
        <div className="workout">
          <h3 className="workout__title">Тренировка #2</h3>
          <div className="workout__content">
            <div className="workout__picture">
              <img src={workoutImg1} alt="" />
            </div>
            <div className="workout__text">
              Короткое, но интенсивное занятие. Всего за 10 минут вы мощн...
            </div>
          </div>
        </div>
        <div className="workout">
          <h3 className="workout__title">Тренировка #3</h3>
          <div className="workout__content">
            <div className="workout__picture">
              <img src={workoutImg1} alt="" />
            </div>
            <div className="workout__text">
              Барре — это не только эстетичные движение, но и интенсивные на...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
