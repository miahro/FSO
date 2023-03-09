import { useState } from 'react'

const Statistics = (props) => {
  console.log('History', {props})
  // if (props.allClicks.length === 0) {
  //   return (
  //     <div>
  //       the app is used by pressing the buttons
  //     </div>
  //   )
  // }

  return (
    <div>
      <h1>statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
    </div>
  )
}

const Button = ({ handleClick, text}) => 
  (
    <button onClick={handleClick}>
      {text}
    </button>
  )


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)


  const increaseGood = () => {
    console.log('increaseGood before, good: ', {good})
    setAll(allClicks+1)
    setGood(good +1)
    console.log('increaseGood after good, all: ', {good}, {allClicks})
  }

  const increaseNeutral = () => {
    console.log('increaseNeutral, neutral:', {neutral})
    setAll(allClicks+1)
    setNeutral(neutral+1)
  }

  const increaseBad = () => {
    console.log('increaseBad, bad:', {bad})
    setAll(allClicks+1)
    setBad(bad+1)
  }

  console.log(good)

  return (
    <div>
      <h1> give feedback</h1>
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseBad}
        text='bad'
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App;
