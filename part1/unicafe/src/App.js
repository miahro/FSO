import { useState } from 'react'

const StatisticLine = (props) => {
  console.log('In StatisticLine', {props})
  return (
    <div>
      <p> {props.text} {props.value} {props.unit}</p>
    </div>
  )

}

const Statistics = (props) => {
  console.log('Statistics', {props})
  if (props.allClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value = {props.neutral} />
      <StatisticLine text="bad" value = {props.bad} />
      <StatisticLine text="average" value = {(props.good * 1 + props.neutral * 0 + props.bad * (-1))/props.allClicks} />
      <StatisticLine text="positive" value = {props.good / props.allClicks * 100} unit='%'/>
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

  console.log(allClicks)

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
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}


export default App;
