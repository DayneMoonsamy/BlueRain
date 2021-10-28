import React,{useState} from 'react';
import axios from 'axios';
import "./Home.css";


  
const About = () => {

    const [state, setState] = useState({
        name: "",
        genus: "",
        colour: "",
        conserve: "",
        location: "",
        picture: ""
      })
    const [selectedFile, setSelectedFile] = useState("");
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    async function handleSubmit(e)
    {
        e.preventDefault()
        const form = 
        {
            name: state.name,
            genus: state.genus,
            colour: state.colour,
            conserve: state.conserve,
            location: state.location,
            picture: state.picture
        }

        const response = await fetch("/submit", {
            method: 'POST', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': "application/json"
            },
            body: JSON.stringify(form)    
        });
        }
    

    function handleChange(evt)
    {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }

    async function handlePic(e,img)
    {
        e.preventDefault()
        let form = new FormData()
        form.set('key', '1d850ff405ca1c14b86622128411caaa')
        form.append('image', img)
        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: form
          })
        .then( resp => {
            setState({ ...state, picture: resp.data.data.display_url}
            )})  
    }

    return (
        <div className="postForm">
            <h1>See a new fish? Enter it here !!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Picture:
                    <input
                        type="file"
                        onChange={(e)=>handlePic(e, e.target.files[0])}
                    />  
                </label>
                <label>
                Name:
                <input type="text" name="name" value={state.name} onChange={handleChange} required/>
                </label>
                <label>
                Genus:
                <input type="text" name="genus" value={state.genus} onChange={handleChange} required/>
                </label>
                <label>
                Colour:
                <input type="text" name="colour" value={state.colour} onChange={handleChange} required/>
                </label>
                <label>
                Conservation status:
                <select value={state.conserve} name="conserve" onChange={handleChange}>
                    <option value="" selected disabled hidden>Choose</option>
                    <option value="Endangered">Endangered</option>
                    <option value="Population High">Population High</option>
                    <option value="Population Low">Population Low</option>
                    <option selected value="Rare">Rare</option>
                </select>
                </label>
                <label>
                Location:
                <input type="text" value={state.location} name="location" onChange={handleChange} required/>
                </label>
                <input type="submit" value="Submit" />
            </form>        
        </div>
    );
};

export default About;