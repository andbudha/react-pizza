import * as React from 'react';
import styles from './ShowPizza.module.css';

export const ShowPizza = () => {
  return (
    <div className={styles.showpizza_box}>
      <div className={styles.image_and_title}>
        <img src="" alt="pizza image" />
        <h3>Pizza Name</h3>
      </div>
      <div className={styles.description_and_ingredients}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          placeat impedit nihil aperiam minima, facere iure tenetur magni. Eos
          sunt, itaque praesentium perspiciatis nam odit deserunt, libero in
          enim assumenda quo aut iste, ea repellat earum dolores sint commodi
          fugit? Aliquam rerum totam omnis debitis nobis officia eveniet,
          eligendi accusantium unde facere, iste beatae veniam perspiciatis
          placeat illum, ea doloribus magni. Autem ut blanditiis voluptas ipsam
          exercitationem qui fuga officiis ullam amet necessitatibus quae
          similique sit iusto harum, sed, architecto voluptates, dicta facere
          officia nostrum ad. Minima saepe vitae praesentium excepturi hic odit
          facere id, ipsam magni labore quas illo.
        </p>
      </div>
    </div>
  );
};
