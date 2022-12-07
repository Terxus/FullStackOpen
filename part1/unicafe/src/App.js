import {useState} from 'react';

const Header = ({text}) => <h1>{text}</h1>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const DisplayStat = (props) => <p>{props.description} {props.value}</p>;

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackHeader = 'give Feedback';
  const statHeader = 'statistics';

  const calcTotal = () => good + neutral + bad;

  const calcAverage = () => (good - bad) / calcTotal();

  const calcPositive = () => good / (calcTotal() / 100);

  return (
    <div>
      <Header text={feedbackHeader}/>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <Header text={statHeader}/>
      <DisplayStat description='good' value={good}/>
      <DisplayStat description='neutral' value={neutral}/>
      <DisplayStat description='bad' value={bad}/>
      <DisplayStat description='all' value={calcTotal()}/>
      <DisplayStat description='average' value={calcAverage()}/>
      <DisplayStat description='positive' value={calcPositive()}/>
    </div>
  );
}

export default App;
