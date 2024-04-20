import React, { useEffect, useState } from 'react'
import './HomePageComponent.css'
import axios from 'axios';
const HomePageComponent = () => {
  const [fetchedData, setData] = useState(null);
  const [increment, setIncrement] = useState([]);
  const getDataFromAPI = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data)
  }
  useEffect(() => {
    getDataFromAPI()
  }, [])

  const handleClick = () => {
    setIncrement(prevIncrement => [...prevIncrement, prevIncrement.length]);
    //the value of prevIncrement.length is added to ...prevIncrement;here if increment variable is logged due to asynchronous nature the previous value is logged before it got set.so used useeffect
  }
  useEffect(() => {
    console.log(increment);
  }, [increment]);

  return (
    <React.Fragment>
      <div className="headPart">
        <h1>SOCIAL MEDIA APP</h1>
        <button onClick={handleClick} >Get data</button>

        <ul>
          {fetchedData && fetchedData.map((iterator, index) => (
            increment.includes(index) ?
              <li key={iterator.id}>
                <p>{iterator.title}</p>
                <p>{iterator.body}</p></li>
              : null
          ))}
        </ul>

        {/* <ul>
        {fetchedData && fetchedData.map((iterator, index) => {
    if (increment.includes(index)) {
        return (
            <li key={iterator.id}>
                <p>{iterator.title}</p>
                <p>{iterator.body}</p>
            </li>
        );
    } else {
        return null;
    }
})} 
</ul> */}

      </div>
    </React.Fragment>
  )
}
export default HomePageComponent

