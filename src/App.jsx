import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  let smsArray = [
    { sender: '123', date: new Date('2022-10-01'), text: 'Hello' },
    { sender: '456', date: new Date('2022-5-01'), text: 'Hi' },
    { sender: '123', date: new Date('2022-4-01'), text: 'How are you?' },
    // more sms objects...
  ];

  // Group by sender
  let grouped = smsArray.reduce((acc, sms) => {
    acc[sms.sender] = acc[sms.sender] || [];
    acc[sms.sender].push(sms);
    return acc;
  }, {});

  // Sort groups by recent date
  let sortedGroups = Object.values(grouped).sort((a, b) => {
    let aMaxDate = a.reduce(
      (max, sms) => (sms.date > max ? sms.date : max),
      a[0].date
    );
    let bMaxDate = b.reduce(
      (max, sms) => (sms.date > max ? sms.date : max),
      b[0].date
    );
    return bMaxDate - aMaxDate; // for descending order
  });

  console.log(sortedGroups);

  return (
    <>
      <div></div>
      <p></p>
    </>
  );
}

export default App;
