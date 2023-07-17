import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stepper1 from '../Stepper1';
import { useNavigate } from 'react-router-dom';
import FormToolTip from '../FormToolTip';
import PageNavbar from '../PageNavbar';

function Reserve() {
  
    
  const navigate = useNavigate();

  const [validated, setValidated] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated('invalid');
    }

    else{
        setValidated('valid');
        navigate('/Project2/Reserve2');
    }

    
  };

  return (

    <div>
      <PageNavbar/>

    <h2 className='text-center'> Reserve a spot in a study group </h2>   

    <Stepper1 activestep={0}></Stepper1>
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type='invalid'>Please provide your first name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type='invalid'>Please provide your last name</Form.Control.Feedback>
        </Form.Group>
        
      
      
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Email Address</Form.Label>
          <div className='row'>
            <div className='col-md-11'>
                <Form.Control type="email" placeholder="Email Address" required />
            </div>
            <div className='col-md-1'>
                <FormToolTip title={'Your email address should have a @'} />
            </div>
          </div>
          

          <Form.Control.Feedback type="invalid">
            Please provide a valid email address. Your email address should have a @ and a valid domain.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Phone Number</Form.Label>
          <div className='row'>
            <div className='col-md-11'>
                <Form.Control type="text" pattern='[0-9]{10}' placeholder="Phone Number" required />
            </div>
            <div className='col-md-1'>
                <FormToolTip title={'Your phone number should have 10 digits.'} />
            </div>
          </div>
          
          <Form.Control.Feedback type="invalid">
            Please provide a 10 digit phone number.Please do not include the country code.
          </Form.Control.Feedback>
        </Form.Group>
      
      
      <Button href='/Project2'>Cancel</Button>
      <Button type="submit">Next</Button>
    </Form>
    </div>
  );
}

export default Reserve;