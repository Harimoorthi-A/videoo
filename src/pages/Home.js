import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'

function Home() {
    // state for statelifting
    const [addUpdate, setAddUpdate] = useState({})

  return (
    <div className='mt-5'>
      <h2 className='ms-5 ps-5 mb-4'>
        Start Uploading Videos For <span style={{ color: 'red' }}>Free</span>!!!!
      </h2>
      <Row>
        <Col>
          <div className='m-5 fs-3 ps-5'>

            <Link to={'/watch-history'} style={{ textDecoration: 'none' }}>
              <a style={{ textDecoration: 'none', fontFamily: 'Italianno, cursive' }}>
                <i class=""></i>
                View Watch History
              </a>

            </Link>
          </div>
        </Col>
        <Col>
          <img style={{ width: '110px', height: '110px' }} className='ms-5 ps-5 mb-4'
            alt=''
            src='https://i.postimg.cc/C5SJz36X/video-icon-1-1.png'
          />
        </Col>

      </Row>
      <Row>
        <Col lg={1}>
          <Add update={setAddUpdate}></Add>
        </Col>

        <Col lg={7}>
          <View updatedState={addUpdate}></View>
        </Col>

        <Col lg={4}>
          <Categories></Categories>
        </Col>

      </Row>

    </div>
  )
}

export default Home