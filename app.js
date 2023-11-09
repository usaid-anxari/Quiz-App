const quizData = [
  {
    question: "What Dose Stand of HTML?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink And Text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "What Dose Stand Of CSS?",
    options: [
      "Correct Style Sheet",
      "CaseCading style Sheet",
      "Chart Sheet Style",
      "Changning Style Sheet",
    ],
    correct: 1,
  },
  {
    question:
      "what the javascript function used to select an html elements by its id?",
    options: [
      "document.qeury",
      "getElementById",
      "selectElement",
      "findElementbyId",
    ],
    correct: 1,
  },
  {
    question:
      "in React.js,which hook is used to perform side effect in a function component?",
    options: ["useEffect", "useState", "useContext", "uselocation"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

// inti
let quiz = document.querySelector(".quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
let submitBtn = document.querySelector("#submit");
let button = document.getElementById('submit')
let userInput = document.getElementsByClassName('answer')
let currentQuiz = 0;
let score = 0;

// load quiz
let quizLoad = () => {
  const { question, options } = quizData[currentQuiz];
  questionElm.innerText = question;
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

quizLoad();

// Chechk

const getOptions = () => {
  // let ans_index
  // answerElm.forEach((curOption,index)=>{
  //     if (curOption.checked) {
  //         ans_index = index
  //     }
  // })
  // return ans_index
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curOption) => curOption.checked);
};

let removeSelectAns = () => {
  return answerElm.forEach((curElm) => (curElm.checked = false));
};


submitBtn.addEventListener("click" , () => {
  const selectedIndex = getOptions();
  // if (option_1.checked || option_2.checked || option_3.checked || option_4.checked) {
  //   submitBtn.disabled = false; // Enable the button
  // }
  if (selectedIndex == quizData[currentQuiz].correct) {
      score = score + 1;
    }
   
    currentQuiz++;
  if (currentQuiz < quizData.length) {
    removeSelectAns();
    quizLoad();
  } else {
    quiz.innerHTML = `
    <div class="result">
<h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
<p>Congratulations on completing the quiz! s</p>
<button class="reload-button" onclick="location.reload( )">Play Again</button></div>`}
});
