import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PresentationScreen from './pages/PresentationScreen';
import InstructionsScreen from './pages/IntructionsScreen';
import QuizScreen from './pages/QuizScreen';
import ScoreScreen from './pages/pontuação'; // Manter o nome conforme você indicou
import Roulette from './pages/Roleta'; // Manter o nome conforme você indicou

const transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

function App() {
  const [screen, setScreen] = useState(1); // Começa na tela 1
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  return (
    <div className="app">
      <AnimatePresence mode='wait'> {/* Usar mode='wait' aqui */}
        {screen === 1 && (
          <motion.div
            key="presentation"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <PresentationScreen setScreen={setScreen} />
          </motion.div>
        )}
        {screen === 2 && (
          <motion.div
            key="instructions"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <InstructionsScreen setScreen={setScreen} />
          </motion.div>
        )}
        {screen === 3 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <QuizScreen
              setScreen={(data) => {
                setScore(data.score);
                setTotalQuestions(data.totalQuestions);
                setScreen(4);
              }}
            />
          </motion.div>
        )}
        {screen === 4 && (
          <motion.div
            key="score"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <ScoreScreen score={score} totalQuestions={totalQuestions} setScreen={setScreen} />
          </motion.div>
        )}
        {screen === 5 && (
          <motion.div
            key="roulette"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <Roulette setScreen={setScreen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
