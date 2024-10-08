import { useState } from 'react'
import PresentationScreen from './pages/PresentationScreen';
import InstructionsScreen from './pages/IntructionsScreen';
import QuizScreen from './pages/QuizScreen';
import ScoreScreen from './pages/pontuação';
import Roulette from './pages/Roleta';


function App() {
  const [screen, setScreen] = useState(1); // Começa na tela 1
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  

  return (
    <div className="app">
      {screen === 1 && <PresentationScreen setScreen={setScreen} />}
      {screen === 2 && <InstructionsScreen setScreen={setScreen}/>}
      {screen === 3 && <QuizScreen  setScreen={(data) => {
            setScore(data.score);
            setTotalQuestions(data.totalQuestions);
            setScreen(4);
          }}/>}
      {screen === 4 && <ScoreScreen  score={score} totalQuestions={totalQuestions} setScreen={setScreen}/>}
      {screen === 5 && <Roulette  setScreen={setScreen}/>}
      

      
    </div>
  );
}

export default App