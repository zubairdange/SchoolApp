import { uuid } from "uuidv4";

export const addNewCard = (Title, Image, Text, Link) => ({
  type: "ADD_NEW_CARD",
  card: {
    id: uuid(),
    Title,
    Image,
    Text,
    link,
  },
});
