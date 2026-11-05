import { useState } from "react";

export default function UserInputs({OnChnageInpute , userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            type="number"
            required
            min="0"
            value={userInput.initialInvestment}
            onChange={(event) =>
              OnChnageInpute("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            type="number"
            required
            min="0"
            value={userInput.annualInvestment}
            onChange={(event) =>
              OnChnageInpute("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            id="expected-return"
            type="number"
            required
            step="any"
            value={userInput.expectedReturn}
            onChange={(event) =>
              OnChnageInpute("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            min="1"
            step="1"
            value={userInput.duration}
            onChange={(event) => OnChnageInpute("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
