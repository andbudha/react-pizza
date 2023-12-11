import * as React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './ShowPizzaSkeleton.module.css';

export const ShowPizzaSkeleton = () => {
  <ContentLoader
    className={styles.showpizza_box}
    speed={2}
    width={500}
    height={750}
    viewBox="0 0 500 750"
    backgroundColor="#f7f7f7"
    foregroundColor="#fdfaff"
  >
    <circle cx="231" cy="211" r="174" />
    <rect x="98" y="405" rx="10" ry="10" width="278" height="44" />
    <rect x="190" y="410" rx="0" ry="0" width="4" height="10" />
    <rect x="10" y="466" rx="10" ry="10" width="472" height="260" />
  </ContentLoader>;
};
