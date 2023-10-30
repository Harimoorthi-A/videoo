import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({update}) {

  // state to hold input datas
  const [inputs, setInputs] = useState({
    id: "",
    caption: "",
    cover_image: "", 
    video_url: ""
  })

  // funct for onchange
  const setValues = async (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...inputs, [name]: value })
    const result = await addVideo(inputs)
    console.log(result);
  }
  // console.log(inputs);

  // funct to extract url
  const extractUrl = (e) => {
    let videoUrl = e.target.value
    // console.log(videoUrl);
    if (videoUrl.includes("v=")) {
      let subUrl = videoUrl.split("v=")[1]
      // console.log(subUrl);
      let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
      setInputs({ ...inputs, ["video_url"]: finalUrl })
    }
  }
  console.log(inputs);

  const addHandle = async () => {
    let id = uniqid()
    // console.log(id);
    setInputs({ ...inputs, ["id"]: id })

    const {caption,cover_image,video_url}=inputs
    if(caption=="" || cover_image=="" || video_url==""){
      toast.error('All inputs are required', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }
    else{
      const result = await addVideo(inputs)
      // console.log(result);
  
      if (result.status >= 200 && result.status < 300) {

        // update state of home
        update(result.data)

        toast.success('Video Added', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setShow(false)
  
      }
  
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <i class="fa-solid fa-arrow-up-from-bracket fa-3x fa-fade" style={{ color: "#ffffff;" }} onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-black mt-2 border'>

          <Modal.Title><h4>Upload Videos</h4></Modal.Title>

          <FloatingLabel
            controlId="floatingInput"
            label="Caption"
            className="mb-3 text-dark"
          >
            <Form.Control onChange={(e) => setValues(e)} name="caption" type="text" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Cover Image URL"
            className="mb-3 text-dark"
          >
            <Form.Control name='cover_image' onChange={(e) => setValues(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Youtube Video LINK"
            className="mb-3 text-dark"
          >
            <Form.Control onChange={(e) => extractUrl(e)} type="text" />
          </FloatingLabel>

        </Modal.Body>

        <Modal.Footer className='bg-black border'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={addHandle}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  )
}

export default Add