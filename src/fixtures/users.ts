import { TUser } from "../models/User";

const mattIcon = "/src/assets/icons/matt-photo.svg";
const claireIcon = "/src/assets/icons/claire-photo.png";
const kristenIcon = "/src/assets/icons/kristen-photo.png";
// const shaunIcon = "/src/assets/icons/shaun-photo.png";
// const maseIcon = "/src/assets/icons/mase-photo.png";
// const kayneIcon = "/src/assets/icons/kayne-photo.png";

export const USERS: TUser[] = [
  {
    id: "asd1",
    name: "Matt Thompson",
    avatar: mattIcon,
    isOnline: true,
    phone: "072 143 9920",
    birthday: new Date("01.01.1998"),
    gender: "Male",
    language: "English",
    location: "Cape Town, RSA",
    lastMessage: {
      id: "msg-1",
      userId: "asd1",
      content: "Thanks again you have been...",
      date: new Date("08.01.2018")
    }
  },
  {
    id: "asd2",
    name: "Claire Sharwood",
    avatar: claireIcon,
    isOnline: true,
    phone: "072 143 9920",
    birthday: new Date("01.01.1998"),
    gender: "Female",
    language: "English",
    location: "Cape Town, RSA",
    lastMessage: {
      id: "msg-2",
      userId: "asd2",
      content: "My selfie game is lacking can...",
      date: new Date("08.03.2018")
    }
  },
  {
    id: "asd3",
    name: "Kristen Mckellar",
    avatar: kristenIcon,
    isOnline: true,
    phone: "072 143 9920",
    birthday: new Date("01.01.1998"),
    gender: "Female",
    language: "English",
    location: "Cape Town, RSA",
    lastMessage: {
      id: "msg-3",
      userId: "asd3",
      content: "Thanks again you have been...",
      date: new Date("08.10.2018")
    }
  }
];
