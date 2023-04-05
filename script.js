const quotes = [
  {
    person: "Martin Fowler",
    quote: `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."`,
  },
  {
    person: "John Johnson",
    quote: `"First, solve the problem. Then, write the code."`,
  },
  {
    person: "Oscar Wilde",
    quote: `"Experience is the name everyone gives to their mistakes."`,
  },
  {
    person: "Coco Chanel",
    quote: `"In order to be irreplaceable, one must always be different."`,
  },
  {
    person: "Chris Heilmann",
    quote: `"Java is to Javascript what car is to Carpet."`,
  },
  {
    person: "Francis Bacon",
    quote: `"Knowledge is power."`,
  },
  {
    person: "Dan Salomon",
    quote: `"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code."`,
  },
  {
    person: "Antoine de Saint – Exupery",
    quote: `"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."`,
  },
  {
    person: "Nikita Popov",
    quote: `"Ruby is rubbish! PHP is phpantastic!."`,
  },
  {
    person: "Cory House",
    quote: `"Code is like humor. When you have to explain it, it’s bad."`,
  },
  {
    person: "Steve Maguire",
    quote: `"Fix the cause, not the symptom."`,
  },
  {
    person: "Kent Beck",
    quote: `"Optimism is an occupational hazard of programming: feedback is the treament."`,
  },
  {
    person: "Martin Fowler",
    quote: `"When to use iterative development? You should use iterative development only on projects that you want to succeed."`,
  },
  {
    person: "Austin Freeman",
    quote: `"Simplicity is the soul of efficiency."`,
  },
  {
    person: "Ralph Johnson",
    quote: `"Before software can be reusable it first has to be usable."`,
  },
  {
    person: "Kent Beck",
    quote: `"Make it work, make it right, make it fast."`,
  },
];

let quoteBtn = document.querySelector(".quote-btn");

let personText = document.querySelector(".person-text");

let quoteText = document.querySelector(".blockquote-text");
let quoteHeader = document.querySelector(".quote-title");
console.log(quoteBtn);
debugger;
quoteBtn.addEventListener("click", function onClick() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomNum].quote;
  personText.textContent = quotes[randomNum].person;
});
