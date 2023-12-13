import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f7f7f7"
    foregroundColor="#fdfaff"
  >
    <circle cx="137" cy="138" r="110" />
    <rect x="0" y="266" rx="10" ry="10" width="278" height="27" />
    <rect x="2" y="400" rx="5" ry="5" width="50" height="44" />
    <rect x="173" y="399" rx="20" ry="20" width="104" height="44" />
    <rect x="190" y="410" rx="0" ry="0" width="4" height="10" />
    <rect x="0" y="306" rx="10" ry="10" width="278" height="86" />
  </ContentLoader>
);
