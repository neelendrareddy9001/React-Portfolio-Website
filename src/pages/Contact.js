import React from 'react';
import { motion  } from 'framer-motion';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const Contact = () => {
    const handleSubmit = () => {};
  return (
    <motion.div 
        className='contact'
        initial={{scaleY : 0}}
        animate = {{scaleY : 1}}
        exit ={{scaleY : 0}}
        transition = {{duration : 0.2}}
    >
        <h2>Contact</h2>
        <Row>
            <Col>
                <div className='contact-form'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='mb-3' controlId='validationCustom01'>
                        <FormLabel>Name</FormLabel>
                        <FormControl required type="text" placeholder='Name'/>
                    </FormGroup>
                    <FormGroup className='mb-3' controlId='validationCustom02'>
                        <FormLabel>Email</FormLabel>
                        <FormControl required type="email" placeholder='Email'/>
                    </FormGroup>
                    <FormGroup className='mb-3' controlId='validationCustom03'>
                        <FormLabel>Message</FormLabel>
                        <FormControl required as="textarea" placeholder='message'/>
                    </FormGroup>
                    <Button type="submit">Submit Form</Button>
                </Form>
                </div>
            </Col>
            <Col>
                <div className='contact-data'>
                    <p>
                        If you want to chat about a project — email me on
                        dipesh@malvia.com.
                    </p>
                    <p>
                        I can help designing a website, designing a new product, improving
                        an existing part of your product, building a strong design system,
                        building websites in Webflow, or designing a custom icon set for
                        your business.{" "}
                    </p>
                    <p>
                        Currently based in Wroclaw, Poland — available for remote-friendly
                        work from December 2022.
                    </p>
                    <p>
                        <ListGroup horizontal>
                            <ListGroupItem>
                                <a href="#">YouTube</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Linkedin</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Instagram</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Twitter</a>
                            </ListGroupItem>
                        </ListGroup>
                    </p>
                </div>
            </Col>
        </Row>
    </motion.div>
  )
}

export default Contact
