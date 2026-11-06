import { useState } from "react";

import Header from "./Compounents/Header";
import UserInputs from "./Compounents/UserInputs";
import Results from "./Compounents/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      const updatedInput = { ...prevUserInput };

      updatedInput[inputIdentifier] = +newValue;

      return updatedInput;
    });
  }

  return (
    <div>
      <Header />
      <UserInputs userInput={userInput} OnChnageInpute={handleChange} />
      {!inputIsValid && (
        <p className="center"> Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;
