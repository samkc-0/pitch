import { GameConfiguration } from "./Classes/GameManager";
import { Round } from "./Classes/Round";
import "./App.css";
import { useState } from "react";
import { notes } from "./Classes/Note";

function App({ gameConfiguration }: { gameConfiguration?: GameConfiguration }) {
  gameConfiguration = gameConfiguration || {
    referenceNote: 60,
    answerNote: 60,
    interval: 0,
  };
  const [round, setRound] = useState<Round>(new Round(gameConfiguration));
  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] =
    useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(round.AnswerNote);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pitch Training</h1>
      </header>
      <h2 id="reference-note">{notes[round.ReferenceNote].name}</h2>
      <div id="controls">
        <label htmlFor="slider">Pitch</label>
        <input
          id="slider"
          type="range"
          min={round.LowestNote}
          max={round.HighestNote}
          step="1"
          value={round.AnswerNote}
          autoFocus
          onChange={(e) => {
            setSliderValue(parseInt(e.target.value));
            round.SetAnswerNote(parseInt(e.target.value));
          }}
        />
      </div>
      {userHasSubmittedAnswer ? (
        <p>{round.IsCorrect ? "correct" : "incorrect"}</p>
      ) : (
        <p>unsubmitted</p>
      )}
      <button
        id="submit-button"
        onClick={() => setUserHasSubmittedAnswer(true)}
      >
        submit
      </button>
      <button id="reset-button" onClick={() => {}}>
        reset
      </button>
    </div>
  );
}

export default App;
