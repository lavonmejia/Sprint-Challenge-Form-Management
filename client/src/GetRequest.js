import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Registered = props => {
  const [registered, setRegistered] = useState([])
  useEffect(() => {
    const getRegistered = () => {
      axios
        .get('http://localhost:5000/api/restricted/users')
        .then(response => {
          setRegistered(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
 
    getRegistered();
  }, []);
  
  return (
    <div className="registered-list">
        <h1>Master List of User Names & Passwords</h1>
    {registered.map(submitted => {
        return <p 
        key={submitted.id}> <ul> <li><h4>{submitted.username}</h4> </li> {submitted.password} </ul></p> 
        
      })}
    
    </div>
    
  





  );
}

export default Registered;
