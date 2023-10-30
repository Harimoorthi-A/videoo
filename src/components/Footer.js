import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (

    <div className='p-5'>
      <hr></hr>
      <Row className='mt-3 p-3'>
        <Col lg={3} md={6} sm={12} xs={12}>
          <Container>
            <img
              alt=""
              src="https://i.postimg.cc/B6FP3DJt/video-icon-1.png"
              width="40"
              height="40"
              className="d-inline-block align-top me-1 mt-3"
            />{' '}
            <b className=''><span>V</span>ideo <span>U</span>ploader</b>
            <h5>Designed and built with all the love in the world by the bootstrap teamusmod tempor incnia deserunt mollit anim id est laborum.</h5>

          </Container>
        </Col>
        <Col className='p-2 'lg={3} md={6} sm={12} xs={12}>
          <h3>Links</h3>
          <a href='/' className='fs-5' style={{ textDecoration: 'none', color: 'red' }}>Landing Page</a> <br></br>
          <a href='/home' className='fs-5' style={{ textDecoration: 'none', color: 'red' }}>Home</a> <br></br>
          <a href='/watch-history' className='fs-5' style={{ textDecoration: 'none', color: 'red' }}>Watch History</a>
        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <h4>Guides</h4>
          <h5>react</h5>
          <h5>react bootstrap</h5>
          <h5>routing</h5>
        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <h4 className='text-danger'>Contact Us</h4>
          <input type='text' className='form-control w-75' placeholder='Enter e-mail'></input>
          <button className='btn btn-danger w-75 mt-3'>Send</button> <br/>
          <i class="fa-brands fa-instagram fa-2x  mt-2 " style={{ color: "#ffffff;" }}></i>
          <i class="fa-brands fa-facebook fa-2x ms-5 mt-2" style={{ color: "#ffffff;" }}></i>
          <i class="fa-brands fa-twitter fa-2x ms-5 mt-2" style={{ color: "#ffffff;" }}></i>
          <i class="fa-brands fa-github fa-2x ms-5 mt-2" style={{ color: "#ffffff;" }}></i>

        </Col>

      </Row>
    </div>
  )
}

export default Footer