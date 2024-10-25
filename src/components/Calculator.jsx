import { useState } from 'react'
import '../App.css'
function Calculator () {
    const [number1,setNumber1] = useState(0)
    const [number2,setNumber2] = useState(0)
    const [symbol,setSymbol] = useState(null)
    const [result, setResult] = useState('')

    const calculator = (event) => {
        event.preventDefault()
        console.log('LUIS');
        
        const operations =  [
          {
            symbol : '+',
            operation : (number1,number2) => number1 + number2
          },
          {
            symbol : '-',
            operation : (number1,number2) => number1 - number2
          },
          {
            symbol : '*',
            operation : (number1,number2) => number1 * number2
          },
          {
            symbol : '/',
            operation : (number1,number2) => number1 / number2
          }
        ]
        const results = operations.find(oper => oper.symbol === symbol)
        
        setResult(results.operation(number1,number2))
        
      }
   
    
    return (
        <section>
                <form onSubmit={calculator}>
                    <label htmlFor='inputNumber1' >Number 1</label>
                    <input type='number' id='inputNumber1' onChange={(event) => setNumber1(Number(event.target.value))} value={!number1 ? '' : number1} />
                    <label htmlFor='inputNumber2' > Number 2</label>
                    <input type='number' id='inputNumber2' onChange={(event) => setNumber2(parseInt(event.target.value))} value={!number2 ? '' : number2} />
                    <button type='button' onClick={(event) => setSymbol(event.target.textContent)} >+</button>
                    <button type='button' onClick={(event) => setSymbol(event.target.textContent)} >-</button>
                    <button type='button' onClick={(event) => setSymbol(event.target.textContent)} >*</button>
                    <button type='button' onClick={(event) => setSymbol(event.target.textContent)} >/</button>

                    <button type='submit' >Result</button>

                    {result && <p>{result}</p>}
                </form>
        </section>

    )
}

export default Calculator