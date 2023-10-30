import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import {format} from 'date-fns'

function Videocard({ video, deleteFunc }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async() => {
    setShow(true);
    // id
    var id = uniqid()

    // title
    var video_title = video.caption

    // url
    var url = video.video_url

    // date "npm i date-fns"
    var date = format(new Date(), 'yyyy-MM-dd h:mm:ss a')

    const body = { id, video_title, url, date }
    if (body) {
      // api call
      const result = await addHistory(body)
      console.log(result);
    }

  }

  const handleDelete = async (id) => {
    const result = await deleteVideo(id)
    if (result.status >= 200 && result.status < 300) {
      deleteFunc(result.data)
    }


  }
  const dragStart=(e,id)=>{
    console.log("drag started...source card id-"+id);
    // store dragged data
    e.dataTransfer.setData("cardID",id)

  }
  return (
    <div>
      <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='bg-black border border-dark'
        style={{ width: '18rem' }}>
        <Card.Img onClick={handleShow}
          style={{ height: '250px', width: '100%' }}
          variant="top" src={video.cover_image} />
        <Card.Body>
          <Card.Title><h5 className='text-light mt-2'>{video.caption}</h5></Card.Title>
          <div className='text-end'>
            {/* <i class="fa-solid fa-trash-can fa-1x" style={{ color: "red" }}></i> */}
            <Trash2 onClick={() => handleDelete(video.id)} size={40} className={'text-danger btn'}></Trash2>
          </div>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-black border border-danger'>
          <iframe width="100%" height="300px"
            src={video.video_url}
            title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer className='bg-black border border-danger'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard