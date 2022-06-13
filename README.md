# useMemo Hooks 

It is used to optimize performance and only call the function when needed.

```javascript
function App() {
      const [valueFirst, setValueFirst] = useState(0);
      const [valueSecond, setValueSecond] = useState(0);

      const increaseValueFirstHandler = ()=>{
            setValueFirst(valueFirst+1);
      }

      const increaseValueSecondHandler = ()=>{
            setValueSecond(valueSecond+1);
      }

      /**
       * Here memo is used so that this function will not be called when
       * valueSecond changed.
       */
      const isEvenNumber = useMemo( ()=>{
            console.log("Calculate even number of first ");

            return valueFirst %2 === 0 ? 'Even' : 'Odd';
      },[valueFirst] );

      return (
            <div className="App">
                  <button onClick={increaseValueFirstHandler}>Click First value = {valueFirst}</button>
                  <p>First Value is {isEvenNumber}</p>
                  
                  <button onClick={increaseValueSecondHandler}>Click Second value = {valueSecond}</button>
            </div>
      );
}
```