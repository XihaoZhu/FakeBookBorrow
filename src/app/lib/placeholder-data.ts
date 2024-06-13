import { describe } from "node:test";

const accounts:[{[key:string]:string|number}] = [
  {
    name: 'Nick_owner_of_here',
    password: '1598753aswq',
    borrowing:'',
  },
];

const books:[{[key:string]:string|number}] = [
  {
    name:'First',
    author:"Nick_Zhu",
    time:"2024-06-13",
    cata: "love story",
    description:"The first book in this system, I handly write the fake information about his book. Other books will be generated by ChatGPT, I think it's fine as everything is fake here in this system. P: ",
  }
]

const comments : [{[key:string]:string|number}] = [
  {
    id: 1,
    content:"A very lovely love story ! It's about Nick finds his job after hard working."
  }
]

const histories : [{[key:string]:string|number}] = [
  {
    id:1,
    person:'Nick_owner_of_here',
  }
]



module.exports = {
  accounts,
  books,
  comments,
  histories,
};
