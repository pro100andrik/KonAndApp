import pomodoroScr from './WorkScreenshots/Pomodoro.png';
import notesScr from './WorkScreenshots/Notes.png';
import contdownScr from './WorkScreenshots/Countdown.png';
import stopWatchScr from './WorkScreenshots/StopWatch.png';
import toDoScr from './WorkScreenshots/ToDo.png';
import minesweeperScr from './WorkScreenshots/Minesweeper.png';
import quizScr from './WorkScreenshots/Quiz.png';
import memoryCardsScr from './WorkScreenshots/MemoryCards.png';
import RandomPeopleGeneratorSrc from './WorkScreenshots/RandomPeopleGenerator.png';



const MyWork = () => {
    return (
      <div className='work-container'>
        {WORKS.map((element, index) => WorkExample(element, index))}
      </div>
    )
}

function WorkExample (props, index) {
  return (
    <div className="example-container"
         key={index}>
         <a href={props.link}>
         <img src={props.img} alt={props.title} />
         <span className="work-tittle">{props.title}</span>
         </a>
    </div>
  )
}


const WORKS = [
  {title: "Pomodoro Clock", img: pomodoroScr, link: "/PomodoroApp/index.html"},
  {title: "Notes", img: notesScr, link: "/QuickNotesApp/index.html"},
  {title: "Countdown", img: contdownScr, link: "/CountDownApp/index.html"},
  {title: "Timer", img: stopWatchScr, link: "/TimerApp/index.html"},
  {title: "To Do List", img: toDoScr, link: "/ToDoapp/index.html"},
  {title: "Minesweeper", img: minesweeperScr, link: "/Minesweeper/index.html"},
  {title: "Quiz", img: quizScr, link: "/QuizApp/index.html"},
  {title: "Memory Cards", img: memoryCardsScr, link: "/MemoryCards/index.html"},
  {title: "Random People Generator ", img: RandomPeopleGeneratorSrc, link: "/RandomPeopleGenerator/index.html"},

]


export default MyWork;
