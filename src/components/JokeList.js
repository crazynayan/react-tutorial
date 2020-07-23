import React from "react"
import Joke from "./Joke";
import jokesData from "./jokesData"


function JokeList() {
  const jokeComponents = jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine}/>)
  return (
    <div>
      {jokeComponents}
    </div>
  )
}

export default JokeList
