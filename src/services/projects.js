import todo from '../assets/img/projects/to-do-app.webp'
import space from '../assets/img/projects/space-tourism.webp'
import rockPaperScissors from '../assets/img/projects/rockPaperScissors.webp'
import google from '../assets/img/projects/google.webp'
import tictactoe from '../assets/img/projects/tictactoe.webp'
import password from '../assets/img/projects/password.webp'

const projects = [
  {
    id: 1,
    name: 'To Do App',
    description: 'To do app build with react and redux to handle global state.',
    link: 'https://to-do.bismarkarroyo.com/',
    gitUrl: 'https://github.com/bisarroyo/todo-app',
    tags: 'React Styled-Companents Redux',
    image: todo
  },
  {
    id: 2,
    name: 'Space Tourism',
    description: 'Website build with react using Frontend Mentor Design.',
    link: 'https://space.bismarkarroyo.com/',
    gitUrl: 'https://github.com/bisarroyo/space-tourism',
    tags: 'React SCSS',
    image: space
  },
  {
    id: 3,
    name: 'Rock Paper & Scissors Game',
    description:
      'Rock, paper and siccsors game build only with Vanila JavaScript.',
    link: 'https://rock-paper-scissors.bismarkarroyo.com/',
    gitUrl: 'https://github.com/bisarroyo/rock-paper-scissors',
    tags: 'HTML CSS JAVASCRIPT',
    image: rockPaperScissors
  },
  {
    id: 5,
    name: 'TIC-TAC-TOE Game',
    description:
      'Clasic game Tic-Tac-Toe for two players, build with React js.',
    link: 'https://tic-tac-toe.bismarkarroyo.com/',
    gitUrl: 'https://github.com/bisarroyo/tic-tac-toe',
    tags: 'HTML CSS',
    image: tictactoe
  },
  {
    id: 6,
    name: 'Password Generator',
    description: 'Password generator with multiple options to generate.',
    link: 'https://password.bismark.dev/',
    gitUrl: 'https://github.com/bisarroyo/password-generator',
    tags: 'HTML CSS JAVASCRIPT',
    image: password
  }
]

export default projects
