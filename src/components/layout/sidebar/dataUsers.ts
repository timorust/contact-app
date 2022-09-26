import { IUser } from "../../../types";

export const users: IUser[] = [
  {
    _id: "1",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
    name: "Tim",
    isInNetwork: true,
  },
  {
    _id: "2",
    avatar:
      "https://th.bing.com/th/id/OIP.8DDnZg9-q5BkyTcfOAYsbwHaGA?w=215&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Tom",
    isInNetwork: true,
  },
  {
    _id: "3",
    avatar:
      "https://th.bing.com/th/id/OIP.obV5KTWZPdbxODJekwix4gHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7",
    name: "Tam",
    isInNetwork: false,
  },
  {
    _id: "4",
    avatar:
      "https://th.bing.com/th/id/OIP.PqBYGErQeWQWhbA_VeUBDQHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7",
    name: "Tum",
    isInNetwork: false,
  },
];
