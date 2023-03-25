import React from 'react';
import { Card } from 'react-bootstrap';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';


const Services = () => {
  const ServiceList = [{
        id : 1,
        name : "Marketing site design and build",
        imageUrl : project1,
    },
    {
        id : 2,
        name : "Marketing site design and build",
        imageUrl : project2,
    },
    {
        id : 3,
        name : "Marketing site design and build",
        imageUrl : project1,
    }
    ]
  return (
     <div className='services'>
        <h2>Services</h2>
        <div className='wrapper'>
            {ServiceList.map((item) => {
                return <div>
                    <Card>
                        <Card.Img variant='top' src={item.imageUrl}/>
                        <Card.Body>
                            <Card.Title>
                                {item.name}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services
