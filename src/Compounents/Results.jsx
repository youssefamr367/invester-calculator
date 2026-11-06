import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  console.log(result);
  const intialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th> Investtment Value</th>
          <th>Interest (Year)</th>
          <th> Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData) => {
          const totalinterst =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            intialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalinterst;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalinterst)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
