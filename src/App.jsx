import { useMemo, useState } from 'react';
import './App.css';

function App() {
      const [valueFirst, setValueFirst] = useState(0);
      const [valueSecond, setValueSecond] = useState(0);

      const increaseValueFirst = ()=>{
            setValueFirst(valueFirst+1);
      }

      const increaseValueSecond = ()=>{
            setValueSecond(valueSecond+1);
      }

      /**
       * Here memo is used so that the function will not be called when
       * valueSecond changed.
       */
      const isEvenNumber = useMemo( ()=>{
            console.log("Calculate even number of first ");

            return valueFirst %2 === 0 ? 'Even' : 'Odd';
      },[valueFirst] );

      return (
            <div className="App">
                  <button onClick={increaseValueFirst}>Click First value = {valueFirst}</button>
                  <p>First Value is {isEvenNumber}</p>
                  <button onClick={increaseValueSecond}>Click Second value = {valueSecond}</button>
            </div>
      );
}

export default App;