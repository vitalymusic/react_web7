import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [emailField,setEmailField] = useState("")
  const [passwordField,setPasswordField] = useState("")


  function formSubmit(){
      let formData = {
        username:emailField,
        password:passwordField
      }

      fetch('https://dummyjson.com/test',{
          method:"POST",
          body:JSON.stringify(formData),
          headers:{
            "Content-Type": "application/json"
          }
      })
      .then(res => res.json())
      .then(result=>(
          // console.log(result.status
          result.status=="ok"&&handleClose()
        ))
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ielogoties
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ielogoties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com"  onInput={(e)=>{setEmailField(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" onInput={(e)=>{setPasswordField(e.target.value)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formSubmit}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;