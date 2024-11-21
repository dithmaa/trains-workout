import { useParams } from "react-router-dom";
import { TopNav } from "../../components";
import { trainData } from "../../data/trains";
import timeIcon from "../../assets/img/train-cards/time-icon.svg";
import exercisesImg1 from "../../assets/img/exercises/1.jpg";

interface TrainPageProps {}

export const TrainPage: React.FC<TrainPageProps> = () => {
  const { id } = useParams();

  const trainDateString = trainData[Number(id)].dateTitle;

  return (
    <div className="train-page">
      <div className="container">
        <TopNav trainDate={trainDateString} />
        <div className="train-page__picture">
          <img src={trainData[Number(id)].image} alt="" />
        </div>
        <div className="exercises">
          <div className="exercises__top">
            <h2>{trainData[Number(id)].title}</h2>
            <div className="train-page__duration">
              <img src={timeIcon} alt="time" />
              <span>{trainData[Number(id)].duration}</span>
            </div>
          </div>
          <div className="exercises__item">
            <div className="exercises__item_img">
              {/* <img src="" alt="" /> */}
            </div>
            <h4 className="exercises__item_title">Скручивания</h4>
            <p>
              Приводим в тонус приводящие мышцы, а также мускулатуру задней
              части бедер 3 похода по 10 повторений
            </p>
            <div className="train-page__duration">
              <img src={timeIcon} alt="time" />
              <span>{trainData[Number(id)].duration}</span>
            </div>
          </div>
          <div className="exercises__item">
            <div className="exercises__item_img">
              <img src={exercisesImg1} alt="" />
            </div>
            <h4 className="exercises__item_title">Скручивания</h4>
            <p>
              Приводим в тонус приводящие мышцы, а также мускулатуру задней
              части бедер 3 похода по 10 повторений
            </p>
            <div className="train-page__duration">
              <img src={timeIcon} alt="time" />
              <span>{trainData[Number(id)].duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
