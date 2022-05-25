
import './App.css';

import {useState, useEffect} from 'react';

function App() {







  const [ userLogin, updateUserLoginInfo ] = useState (

    {

      username: "",
      password: ""


    }
    )

    const handleOnChangeUserLoginInfo = ( synthEvent ) => {

      updateUserLoginInfo ( {...userLogin, [synthEvent.target.name]: synthEvent.target.value } )


    }

    const handleLoginSubmit =( synthEvent ) =>{

      synthEvent.preventDefault()

      console.log("byebug!!!")

      fetch("http://localhost:3000/login",
      {

        method: "POST",
       headers: {

         "Content-Type": "application/json"

        },
       body: JSON.stringify( userLogin
       )
        }
        )





      .then( resp => resp.json() )
      .then( console.log )


    }





    return (
      <div className="App">


        <h1>Login</h1>

        <form onSubmit={ handleLoginSubmit  }>
          <input onChange={handleOnChangeUserLoginInfo}
          name="username"
          />
          <input onChange={ handleOnChangeUserLoginInfo }   type="password"
          name='password'
          />

          <input type="submit"/>
        </form>

        <h1>Signup</h1>



      </div>
    );
  }

  export default App;






