import * as React from 'react';
import styles from './ShowPizza.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShowPizzaSkeleton } from '../Skeletons/ShowPizzaSkeleton';

export const ShowPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  console.log(pizza);
  React.useEffect(() => {
    const getPizza = async () => {
      const res = await axios.get(
        `https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items/${id}`
      );
      try {
        setPizza(res.data);
      } catch (error) {}
    };
    getPizza();
  }, []);

  if (!pizza) {
    return <ShowPizzaSkeleton />;
  }
  return (
    <div className={styles.showpizza_box}>
      <div className={styles.image_and_title}>
        <div className={styles.image_box}>
          <img
            className={styles.image}
            src={pizza.imageUrl}
            alt="pizza image"
          />
        </div>
      </div>
      <div className={styles.description_and_ingredients}>
        <h2>{pizza.name}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In fugit,
          dolorem consequuntur nesciunt explicabo animi vitae architecto debitis
          provident incidunt mollitia expedita perspiciatis laborum, at
          doloribus quidem facilis quos ut atque. Sequi eligendi id nihil
          mollitia nobis optio magnam est, natus laboriosam veritatis
          perferendis! Culpa illum, architecto fugiat beatae similique
          distinctio inventore hic repellat sequi ad nihil qui ipsum numquam
          corporis exercitationem reiciendis? Nesciunt ab maiores sit, dolorem
          mollitia enim nobis? Architecto eius deserunt minima laudantium odit!
          Alias, illo facere.
        </p>
      </div>
    </div>
  );
};
