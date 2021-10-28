import {useState, useEffect} from 'react';
import "./Home.css";


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("/getData")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
  
    console.log(data)

    return (
      <div className="App">
        <div className="cards">
        {(!data || data==[]) ?  <p>"Loading..."  </p>:data.map((person, index) => (
        <div key={index} className="flip-card">
                <div className="flip-card-front">
                    <img alt="Animal" src={person.picture} className="image" style={{width:"300px", height:"260px"}}/>
                    <h2>{person.name}</h2>
                    <i>{person.genus}</i>
                    <p>Colour:  {person.colour}</p>
                    <p>Conservation status: {person.conserve}</p>
                    <p>Location: {person.location}</p>
                </div>
        </div>     
        ))}
        </div> 
    </div>
    );
};

export default Home;