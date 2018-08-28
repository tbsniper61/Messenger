import { TMessage } from "../models/Message";

export const MESSAGES: TMessage[] = [
  {
    id: "asd",
    userId: "currentUser",
    content:
      "content1 asdasdasldka;lskdalskddjh jkhdkqhdjhqwdjh kjhdkj hjwdhqkjwhdlkqhwdkjhwjdhkjwh kjhkj dkqwjhd kqjwhd kqwhdkqhkwjdhkqjwhdkj hkjqhdk qjwhdkjqh wkd",
    date: new Date(2018, 3, 1, 11, 45)
  },
  {
    id: "qwe",
    userId: "asd",
    content: "content2 asdasdasldka;lskdalskd",
    date: new Date(2018, 3, 1, 11, 48)
  },
  {
    id: "zxc",
    userId: "qwe",
    content: "content3 asdasdasldka;lskdalskd",
    date: new Date(2018, 3, 1, 11, 50)
  },
  {
    id: "rty",
    userId: "zxc",
    content: "content4 asdasdasldka;lskdalskd",
    date: new Date(2018, 3, 1, 11, 55)
  }
];
