// {
//     "id": "0",
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
//     "name": "Supreme Pizza",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30
//     ],
//     "price": 11,
//     "category": 1,
//     "rating": 4
//   }

export type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};
