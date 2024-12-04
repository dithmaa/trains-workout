import { useEffect, useState } from "react";
import { Workouts } from "../../../components";
import { useCreateExercizeMutation } from "../../../store/trainingsApi";

export default function ExercisePage() {
  const [createTraining, { data, isLoading, error }] =
    useCreateExercizeMutation();
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      officiis similique distinctio qui tempora, ducimus consectetur suscipit
      dicta ipsa saepe neque incidunt dolores quas repellendus voluptates
      mollitia minima non nulla assumenda voluptatibus autem porro ratione illo
      aliquid. Eaque eligendi repellat, facere quam, in possimus iste ex id
      commodi dolorum reprehenderit cupiditate! Dolore neque iusto expedita
      minus? Enim laudantium, tempora praesentium sed aliquam maiores.
      Perferendis ratione perspiciatis ab aspernatur ipsa corporis iusto esse
      possimus beatae provident repudiandae, at itaque quod accusantium officia
      consequatur, eos adipisci. Nobis, vitae a sapiente adipisci error,
      consequatur architecto quas laboriosam blanditiis optio, esse facere dolor
      ut sequi aliquam? Natus laborum incidunt, impedit mollitia expedita
      repellendus debitis eveniet illo, a cupiditate voluptatem deserunt rem
      cumque. Neque vel ab quae aut vero veritatis porro debitis, consectetur
      inventore nemo tempore optio nesciunt, amet accusamus reprehenderit fugit
      quod sapiente minus. Consequuntur minus sequi voluptatum suscipit
      inventore asperiores? Cumque inventore quia et distinctio ipsa, amet
      eveniet ea a laudantium expedita obcaecati aperiam qui in magni.
      Repudiandae ipsum dolorum illum eum. Temporibus impedit sapiente ea sit,
      aliquam inventore accusamus! Id aspernatur amet voluptates earum doloribus
      sapiente, similique, doloremque cum quia modi culpa, vel recusandae
      necessitatibus! Sint sapiente inventore ea aliquid quisquam eius iste
      aliquam, amet officia provident, sed dolorum quod adipisci, enim dolorem
      ad ut neque. Molestias vel fugit officiis odit quis eveniet nobis eaque
      repellendus distinctio officia impedit iure soluta vero, sint nesciunt
      expedita a neque quod voluptatem minima dolorum deserunt? Autem ea iusto
      fugit atque ex culpa qui mollitia labore similique sequi minima,
      doloremque neque repudiandae cupiditate odit illo sunt ullam eos, ducimus
      sapiente? Blanditiis earum, aperiam nobis eaque unde facere quod nesciunt
      provident a iure. Excepturi amet veniam sint sit culpa. Inventore dolore,
      velit neque provident similique eos facilis, laboriosam sint molestias
      aliquam, dolorem tempora consequuntur. Delectus totam placeat cum id aut
      magnam, minima rem dolor quidem incidunt tempora praesentium fugit
      adipisci nobis earum ut odio expedita architecto iure. Ullam cumque
      voluptates adipisci eos porro maxime eum animi maiores quo consequuntur
      ratione blanditiis vel voluptate vitae ipsum officia eveniet nobis, nam id
      est obcaecati officiis nisi omnis libero? Iste, quisquam placeat saepe
      fugiat unde aperiam eveniet ipsum soluta fuga tenetur praesentium quasi
      quas dicta at quod ea, omnis repudiandae quaerat sint dolorum autem
      reprehenderit, repellendus quia. Numquam modi nam alias iste error dolor
      asperiores expedita et corporis. Accusamus sunt dicta officiis expedita?
      Voluptas magnam perspiciatis accusamus omnis dolore suscipit.
      <Workouts exercizes={exercizes} />
    </div>
  );
}
