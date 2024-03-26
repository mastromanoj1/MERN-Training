import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Signup =() =>{
  
  const [data, setdata] = useState({})
  const handleOnchnage = (e : any) => {
    // console.log(data);
    setdata({...data,[e.target.name ]: e.target.value});
  }

  const handleSubmit = (e : any) => {
    e.preventDefault()
    console.log(data,"data")

    axios.post('http://localhost:5000/api/v1/users/signup', data)
    .then((response : any) => {
        console.log(response)
    })
    .catch((err :any) => {
      console.log(err)
    })
  }
    return(
      <div className="container">
      <h2 className="display-4 text-center">Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter the User Name" name='username' onChange={handleOnchnage} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter the Email " name='email' onChange={handleOnchnage}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter the Password" name='password' onChange={handleOnchnage} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Confrim Password</Form.Label>
          <Form.Control type="password" placeholder="Enter the Password" name="confirmpassword" onChange={handleOnchnage}/>
        </Form.Group>
        <Button type='submit'> Submit </Button>
  </Form>
  
  </div>
    )
    
   
}
export default Signup;