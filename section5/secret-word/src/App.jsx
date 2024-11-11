// css
import './App.css'

// react
import { useCallback,useEffect,useState } from 'react'

// data
import { wordsList } from "./data/words.jsx"

// components
import StartScreen from './components/StartScreen'
import Game from './components/Game.jsx'
import End from './components/End.jsx'

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setguessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordandCategory = useCallback(() => {
    // category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return{word,category}

  },[words])
  //start the game
  const startGame = useCallback(() =>{
    clearLetterStates()
    // pick word and pick category
    const { word, category } = pickWordandCategory()

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  },[pickWordandCategory])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }

    if(letters.includes(normalizedLetter)){
      setguessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  function clearLetterStates() {
    setguessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)
      startGame()
    }

  }, [guessedLetters,letters,startGame])

  useEffect(() => {
    if(guesses <=0){
      // reset aos states
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}/>}
      {gameStage === 'end' && <End retry={retry} score={score}/>}
    </div>
  )
}

export default App
