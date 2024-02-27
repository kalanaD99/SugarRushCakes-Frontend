import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./css/Cruesel.css"

export default function Cruesel() {
  return (
    <Carousel data-bs-theme="dark" className='display'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
          width="800px"
          
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649466.jpg?w=1060"
          alt="Second slide"
          width="800px"
        />
        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/indulgent-chocolate-raspberry-cheesecake-rustic-wood-table-generated-by-ai_188544-25046.jpg?t=st=1709065735~exp=1709069335~hmac=63f6d2f28509b73e94044245adfd6b1697c5a40d430b682239e01c4c633a2712&w=1060"
          alt="Third slide"
          width="800px"
        />
        <Carousel.Caption>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}




