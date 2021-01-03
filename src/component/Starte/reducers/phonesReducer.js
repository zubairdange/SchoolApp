import uuid from "uuid/v4";

const phonesDefaultState = {
  phones: [
    {
      id: uuid(),
      brand: "Woodland",
      name: `Casual Shoe For Men  (Olive)`,
      price: 130,
      picture: "3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Reebok",
      name: `Casual `,
      price: 350,
      picture: "2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Reebok",
      name: `Mi 9t`,
      price: 300,
      picture: "12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Adidas",
      name: `Formal`,
      price: 130,
      picture: "4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Adidas",
      name: `Sport`,
      price: 120,
      picture: "5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Adidas",
      name: `Ladies Sandal`,
      price: 330,
      picture: "1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Puma",
      name: `Men's Rapido Fg Football Shoes`,
      price: 650,
      picture: "7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "bugatti",
      name: `Office Formal shoes`,
      price: 760,
      picture: "8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "bugatti",
      name: `Formal`,
      price: 580,
      picture: "9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "bugatti",
      name: `P20 Lite`,
      price: 200,
      picture: "10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "bugatti",
      name: `Ladies Pink Shoes`,
      price: 550,
      picture: "11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "bugatti",
      name: `Y9 Prime`,
      price: 220,
      picture: "12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "PUMA",
      name: `Sport 7 Plus`,
      price: 690,
      picture: "13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "PUMA",
      name: `Branded Shoes for Women | `,
      price: 1000,
      picture: "14",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "PUMA",
      name: `Puma ladies 37/40 idr 219 Grosir Sepatu`,
      price: 500,
      picture: "15",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "PUMA",
      name: `Women's Shoes | Ladies Shoes In All Styles | Dune London`,
      price: 770,
      picture: "16",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Woodland",
      name: `Z6 Pro`,
      price: 400,
      picture: "17",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
    {
      id: uuid(),
      brand: "Woodland",
      name: `A6000`,
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio",
      stats: {
        size: "6.26 inches, 97.8 cm2 ",
        resolution: "720 x 1520 pixels, 19:9 ratio",
        GPU: "Mali-G76 MP12 - EMEA",
        CPU: "Octa-core, 2x2.73 GHz Mongoose M4",
        camera: "12+ 2MP rear camera",
        battery: "1400 mAh",
      },
    },
  ],
  cart: [],
  total: 0,
};

const phonesReducer = (state = phonesDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_PHONE":
      return {
        ...state,
        phones: [...state.phones, action.phone],
      };
    case "ADD_TO_CART":
      const addedPhone = state.phones.find((phone) => action.id === phone.id);
      const existingPhone = state.cart.find(
        (existingPhone) => action.id === existingPhone.id
      );

      if (existingPhone) {
        addedPhone.quantity += 1;
        return {
          ...state,
          total: state.total + addedPhone.price,
        };
      } else {
        addedPhone.quantity = 1;
        const newTotal = state.total + addedPhone.price;
        return {
          ...state,
          cart: [...state.cart, addedPhone],
          total: newTotal,
        };
      }
    case "REMOVE_FROM_CART":
      const phoneToRemove = state.cart.find((phone) => action.id === phone.id);
      const removePhone = state.cart.filter((phone) => action.id !== phone.id);

      const newTotal =
        state.total - phoneToRemove.price * phoneToRemove.quantity;
      return {
        ...state,
        cart: removePhone,
        total: newTotal,
      };
    case "DECREMENT":
      const phone = state.cart.find((phone) => action.id === phone.id);

      if (phone.quantity > 1) {
        phone.quantity -= 1;
        const newTotal = state.total - phone.price;
        return {
          ...state,
          total: newTotal,
        };
      } else {
        return state;
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default phonesReducer;
