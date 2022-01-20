import React, { useState,useEffect } from "react";
import Middle from "./Middle";
import axios from 'axios';


function App() {

  const [contact,setname]=useState("");
  const [curr,setcurr]=useState("");
  const [totalReactPackages, setTotalReactPackages] = useState(null);

  function setter(event){
    setcurr(event.target.value.toLowerCase());
  }
  function clicked(event){
      setname(totalReactPackages.find(x => x.name.toLowerCase() === curr.toLowerCase() ));
  }



    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get("http://localhost:8000/api/users")
            .then(response => setTotalReactPackages(response.data))

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  return (
      <div className="row">
    <div className="containers col-6">
    
      <h1>Employee</h1><br />
      <input onChange={setter} type="text" placeholder="Enter employee id .."  />
      <button onClick={clicked}>Submit</button>
    </div>
    <div className="containers col-6">
    <h1 className="info">Details</h1><br />
      <Middle name={contact.name} sname={contact.sname} age={contact.age} phone={contact.phone} email={contact.email} company={contact.company} />
      </div>
    </div>
  );
}

export default App;
