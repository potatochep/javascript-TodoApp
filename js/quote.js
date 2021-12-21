const quotes = [
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    quote: "Knowing yourself is the beginning of all wisdom",
    author: "Aristotle",
  },
  {
    quote:
      "One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors",
    author: "Plato",
  },
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
  },
  {
    quote:
      "Experience without theory is blind, but theory without experience is mere intellectual play.",
    author: "Immanuel Kant",
  },
  {
    quote:
      "Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice.",
    author: "Brauch Spinoza",
  },
  {
    quote: "We're all human beings, in the end, despite our differences.",
    author: "Timothy Morton",
  },
  {
    quote: "If you desire ease, forsake learning.",
    author: "Nagarjuna",
  },
  {
    quote: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius",
  },
  {
    quote: "Every man is born as many men and dies as a single one. ",
    author: "Martin Heidegger",
  },
];
const quote = document.querySelector("#quotes div:first-child");
const author = document.querySelector("#quotes div:last-child");

//math.radom()을 통해 랜덤한 숫자를 가져옴. 그 후 floor함수를 통해 내림을 해서 소수점을 없앰
//floor를 사용한 이유는 9.XX가 10이 되기를 원하지 않기 때문
//받은 숫자를 기반으로 quotes의 어레이 안에서 받은 숫자의 순번의 내용을 확인
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
