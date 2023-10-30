import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
          <Col lg={6} >
            <div>
              <h1>Video uploader</h1>
              <p className='fs-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper eget. Eu sem integer vitae justo eget magna. Tellus integer feugiat scelerisque varius morbi enim. Leo a diam sollicitudin tempor id eu nisl nunc. Sagittis id consectetur purus ut.

              </p>
              <Link to={'/home'}>
                <Button id='b1' className='btn ms-3'><b>Get Started</b>  <i class="fa-brands fa-google-play fa-beat-fade "></i></Button>

              </Link>
            </div>
          </Col>
          <Col>
            <img
              alt=''
              src='https://i.postimg.cc/x8xm82kp/image-processing20220301-11686-1m6ku6d.gif'
              className='w-100'
            />
          </Col>
        </Row>
        <Row className='mt-5 mb-5 py-5'>
          <h1 className='mb-5 text-center text-danger'>Features</h1>
          <Col>
            <Card style={{ width: '100%' }} className='bg-black border-dark text-dark mt-3'>
              <Card.Img style={{ height: '400px' }} variant="top" src="https://i.postimg.cc/4NT29K4R/0e59a-resources-cool-loading-animated-gif-3.gif" />
              <Card.Body className='p-5'>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '100%' }} className='bg-black border-dark text-dark mt-3'>
              <Card.Img style={{ height: '400px' }} variant="top" src="https://i.postimg.cc/X7SNBgyN/Jitter-Pink-perfect-loop-cubes.gif" />
              <Card.Body className='p-5'>
                <Card.Title>Categorize Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '100%' }} className='bg-black border-dark text-dark mt-3'>
              <Card.Img style={{ height: '400px' }} variant="top" src="https://i.postimg.cc/nzmzNSQ5/lecrae-shocked.gif" />
              <Card.Body className='p-5'>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default LandingPage