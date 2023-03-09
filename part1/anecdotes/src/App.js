import { useState } from 'react'

const Button = ({ handleClick, text}) => 
  (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const ViewAnecdote = (props) => {
  console.log('in ViewAnecdote', {props})
  return(
    <div>
      {props.anecdote} 
      <br />
      has {props.votes} votes
    </div>
  )

}

const ViewMaxAnecdote = (props) => {
  let max_pt = -1
  let max_i = -1
  for (let i = 0; i < props.anecdotes.length; i++){
    if (props.points[i]> max_pt) {
      max_pt=props.points[i]
      max_i = i
    }
  }
  console.log('max_i',max_i)
  return (
    <div>
      <ViewAnecdote anecdote = {props.anecdotes[max_i]} votes = {props.points[max_i]} />
    </div>
  )

}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  console.log(points)

  const changeSelected = () => {
    console.log('Setselected: ', {selected})
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const increaseVote = () => {
    console.log('Vote: ', {selected})
    const copy = {...points}
    copy[selected] += 1
    console.log('after voting: ', copy[selected])
    console.log(points)
    console.log(copy)
    setPoints(copy)
  }

  console.log('state:', {selected})
  console.log('anecdotes total', anecdotes.length)
  console.log(points)



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ViewAnecdote anecdote={anecdotes[selected]} votes={points[selected]}></ViewAnecdote>
      <Button handleClick= {increaseVote} text='vote' />
      <Button handleClick={changeSelected} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <ViewMaxAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App;
