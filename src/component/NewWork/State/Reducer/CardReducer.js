import { uuid } from "uuidv4";
const CardReducer = (state = cardsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD":
      return {
        ...state,
        cardData: [action.card, ...state.cardData],
      };

    default:
      return state;
  }
};
const cardsDefaultState = {
  cardData: [
    {
      id: uuid(),
      Title: "Rose",
      Image: "Images/rose.jpg",
      Text: "This is Image 1",
      Link: "www.google.com",
    },
    {
      id: uuid(),
      Title: "Rose Flask",
      Image: "Images/rose1.jpg",
      Text: "This is Image 2",
      Link: "www.fb.com",
    },
    {
      id: uuid(),
      Title: "Rose pot",
      Image: "Images/rose2.jpg",
      Text: "This is Image 3",
      Link: "www.yahoo.com",
    },
    {
      id: uuid(),
      Title: "Black Rose",
      Image: "Images/rose3.jpg",
      Text: "This is Image 4",
      Link: "www.ymail.com",
    },
    {
      id: uuid(),
      Title: "Blue Rose",
      Image: "Images/rose4.jpg",
      Text: "This is Image 5",
      Link: "www.w3school.com",
    },
    {
      id: uuid(),
      Title: "Rose Bookey",
      Image: "Images/rose5.jpg",
      Text: "This is Image 6",
      Link: "www.google.com",
    },
  ],
};
export default CardReducer;
