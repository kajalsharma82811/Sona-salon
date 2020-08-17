import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Contact() {
	return (
		<div>
		<h3 className="contact_colorheading">Get In Touch</h3>
		<h1 className="contact_heading">HOW TO FIND US</h1>
       <div className="box">
		<div className="item1">
		
		<h6 className="contact_head">ABOUT US</h6>
		<p>Sona Beauty was established in 2019 to deliver<br/>
		 high quality beauty 
		treatments to the people.Our<br/> mission is to pamper you in a calm and 
		relaxing <br/>environment by providing top of the range <br/>
		treatments that you expect and deserve.</p>

		</div>


		<div className="item2">
		
		<h6 className="contact_head">OPEN HOURS</h6>
		<p>Mon-Sun<br/>
		 9:30 AM – 10:00 PM</p>
		</div>	


		<div className="item3">
		
		<h6 className="contact_head">CONTACTS</h6>
		<p>Merrut, India<br/>
		 Email: sonasalon@gmail.com<br/>
         Tel: 011-123456789<br/>
        For Booking:+91-1234567991</p>
		</div>
		</div>	

		<div>
		<h3 className="form_heading">HAVE ANY QUESTIONS?</h3>

		<Form className="form">
 
     
 

 <Form.Control placeholder="Name" required/><br/>

 <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Control placeholder="Mobile" required/><br/>


  

  <Form.Group controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows="3" placeholder="Example textarea" required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
		</div>
		</div>
	)
}

export default Contact