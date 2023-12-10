import * as React from 'react';
import styles from './ShowPizza.module.css';

export const ShowPizza = () => {
  return (
    <div className={styles.showpizza_box}>
      <div className={styles.image_and_title}>
        <div className={styles.image_box}>
          <img className={styles.image} src="" alt="pizza image" />
        </div>
        <h2>Pizza Name</h2>
      </div>
      <div className={styles.description_and_ingredients}>
        <h3>Description/Ingredients</h3>
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
