import React, {useState, useEffect} from 'react';
import AddCityContent from './AddCityContent';

export default function AddCity() {
    
const [query,setQuery] = useState();
const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0a0139df6eb24bd9acc112311230704&q=${query}`);
      const data = await response.json();
      setData(data);
    };

    if (query) {
      fetchData();
    }
  }, [query]);
  console.log(data)
   
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value)
   }
  
   
  
  console.log(data)
    return (
        <div className="AddCity">
        <form onSubmit={handleSubmit}>
        <input className="input-search" type="text" value={query}/>
        <button type="submit"  >Add City</button>
      </form>
    
      <AddCityContent  data={data}/>
      
        </div>
      );
}