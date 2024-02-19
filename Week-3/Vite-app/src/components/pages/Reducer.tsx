import React, { useState ,useReducer} from 'react'

const Reducer = () => {

    const [initialValue, setinitial] = useState(
        [
            {
                name : "Manoj",
                age : 20
            },
            {
                name : "Prabaa",
                age : 30
            }
        ]
        )

    let formValue = {
        name : "Rama",
        age : 20
    }

    const userReducer = (users : any,action : any) => {
       
        switch (action.type) {
            case 'ADD_USER':

                return [...users,action.payload]
        
            default:
                return users;
        }
    }

    const [users, dispatchusers] = useReducer( userReducer, initialValue)

  return (
    <>
        <h1> useReducer </h1>
        {users.map((user : any) => {
            return(
                <> 
                    <p> Name : {user.name}</p>
                    <p> Age : {user.age}</p>
                </>
            )
        })}
        <button onClick={() => dispatchusers({type : 'ADD_USER',payload : {...formValue}})}> Add new values </button>
        {console.log(users)}
    </>
  )
}

export default Reducer