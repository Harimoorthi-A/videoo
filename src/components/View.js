import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allapis'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function View({ updatedState }) {

  const [allVideos, setAllVideos] = useState([])

  // state to update delete
  const[deleteUpdate,setDeleteUpdate]=useState({})

  const accessAllVideos = async () => {
    const result = await getAllVideos()
    if (result.status >= 200 && result.status < 300) {
      // console.log(result.data);
      setAllVideos(result.data)
    }
  }
  console.log(allVideos);
  useEffect(() => {
    accessAllVideos()
  }, [updatedState,deleteUpdate])

  return (
    <div>
      <Row>
        {
          allVideos.length > 0 ? (
            allVideos.map(i =>
              <Col lg={4} md={6}><Videocard deleteFunc={setDeleteUpdate} video={i}></Videocard></Col>
            )
          ) : <h1>No videos in your collection</h1>
        }
      </Row>

    </div>
  )
}

export default View