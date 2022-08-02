import React, { useEffect, useState } from "react";

import "./Recursion.scss";

const Recursion = (props) => {
  const [results, setResults] = useState([]);
  const [output, setOutput] = useState();
  const [factorialClicked, setFactorialClicked] = useState(true);
  const [sumClicked, setSumClicked] = useState(true);
  const [oddClicked, setOddClicked] = useState(true);

  const splited = results.toString().split(",");

  useEffect(() => {
    setResults(props.array);
  }, [props]);

  /* Sum of Range of Numbers */

  let sum = 0;
  let length = splited.length; // array length

  const sumHandler = () => {
    setSumClicked(!sumClicked);
    sum += +splited[length - 1];

    length--;
    setOutput(sum);
    if (length > 0) sumHandler();
  };

  /* Number Factorials */

  let factor = parseInt(splited);
  let product = 1;

  const factorialHandler = () => {
    setFactorialClicked(!factorialClicked);
    if (length !== 1) return alert("Enter a single digit");
    product = product * factor;
    setOutput(product);
    factor--;
    if (factor > 0) factorialHandler();
  };

  /* Odd Numbers Collector */

  let indexes = length;

  let oddNumbers = [];

  const oddHandler = () => {
    setOddClicked(!oddClicked);
    indexes--;
    // console.log(indexes);
    if (splited[indexes] % 2 !== 0) {
      let oddNumber = splited[indexes];
      oddNumbers.push(`${oddNumber} ,`);
    }

    if (indexes > 0) {
      oddHandler();
    }

    setOutput(oddNumbers);
  };

  const factorSnippet = (
    <pre>
      <h2>Factorization code Snippet</h2>
      <code>
        {`
        let factor = 1;

        function factorial(x){
            factor *= x;
            console.log(factor, x)
            x--;
            if(x > 0){
              factorial(x)
            }
            
        }
        
        factorial(4) // returns 24
        // output to the console (4,4) (12,3) (24,2) (24,1 )
       `}
      </code>
    </pre>
  );

  const sumSnippet = (
    <pre>
      <h2>Sum code Snippet</h2>
      <code>
        {`
        let array = [4,3,5,6];
        let sum = 0;
        let length = array.length;
        
        const sumHandler = ()=>{
            sum = sum+array[length - 1];
            length -- ;

            /* Base Case */

            if(length > 0){
                sumHandler();
            }
            return sum;
        }

        sumHandler();
            `}
      </code>
    </pre>
  );

  const oddSnippet = (
    <pre>
      <h2>Collect Odd Numbers</h2>

      <code>
        {`
      function collectOddValues(arr){
    
        let result = [];
    
        function helper(helperInput){
            if(helperInput.length === 0) {
                return;
            }
            
            if(helperInput[0] % 2 !== 0){
                result.push(helperInput[0])
            }
            
            helper(helperInput.slice(1))
        }
        
        helper(arr)
    
        return result;
    }
      `}
      </code>
    </pre>
  );

  return (
    <div className="recursion">
      <h2>Recursion</h2>
      <p>
        A process or function that calls itself.
        <br /> <br />
        Invoking a function with different parameters until the base case is
        reached.Base case is the condition where the function stops calling
        itself. Best Examples are sum of a range of numbers and factorials
      </p>
      <div className="buttons">
        <button onClick={factorialHandler}>Factorial</button>
        <button onClick={sumHandler}>Sum</button>
        <button onClick={oddHandler}>Collect Odd Values</button>
      </div>
      <div className="results">
        <div className="values">[ {results} ]</div>
        <div className="output">{output}</div>
      </div>
      <div className="code-snippet">
        {!factorialClicked && factorSnippet}
        {!sumClicked && sumSnippet}
        {!oddClicked && oddSnippet}
      </div>
    </div>
  );
};

export default Recursion;
