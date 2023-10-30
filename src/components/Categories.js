import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import { Trash } from 'react-feather';

function Categories() {

  // state to hold,id and wide array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }

  const [categories, setCategories] = useState([])

  const addData = async () => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })

    const { name } = catInputs
    if (name == "") {
      toast.error('please provide caption', {
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
    else {
      // api call
      const result = await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        getAllCategories()
        toast.success(`${result.data.name} added`, {
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

    }
  }
  // console.log(catInputs);

  const getAllCategories = async () => {
    const result = await getAllCat()
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);

    }
  }
  // console.log(categories);

  const removeCategory = async (id) => {
    const result = await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {
      // delete category list
      getAllCategories()
    }
  }
  useEffect(() => {
    getAllCategories()
  }, [])

  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragged over cat...");
  }
  const dropped = async (e, id) => {
    // cat id
    console.log("droppped...cat id-" + id);

    // video id acess
    const videoId = e.dataTransfer.getData("cardId")
    console.log(videoId);

    // // access video from backend
    const { data } = await getVideo(videoId)
    console.log(data);

    // // select dropppedcategory from all categories
    const selectedCategory = categories.find(i => i.id == id)
    console.log(selectedCategory);

    // // update category obj with videodata
    selectedCategory.videos.push(data)
    console.log(selectedCategory);

    // // api call to update the changed category ion backend
    await updateCategory(id, selectedCategory)
    getAllCategories()
  }

  return (
    <div>
      <Button onClick={handleShow} variant="light" className='w-100'>
        Add Category
      </Button>

      {
        categories.length > 0 ? (
          categories.map(i => (
            <div droppable
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => dropped(e, i?.id)}

              className='border mt-3 p-3'>
              <p className='fs-3'>{i.name}</p>
              <div className='text-end'>
                <Trash onClick={() => { removeCategory(i.id) }}
                  size={55} className='text-danger btn'>
                </Trash>
              </div>
              {
                i.videos.map(j => (
                  <div>
                    <img alt=''
                      style={{ height: '60px', width: '60px', padding: '5px' }}
                      src={j.cover_image}
                    />
                  </div>
                ))
              }
            </div>
          ))
        ) : <h3>No Categories added yet</h3>

      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 className='m-2 ms-1' style={{ color: 'cornflowerblue' }}>Add New Category</h1></Modal.Title>

        </Modal.Header>

        <Modal.Body >

          <FloatingLabel
            controlId="floatingInput"
            label="Category name"
            className="mb-3 text-dark"
          >
            <Form.Control onChange={(e) => setInputs(e)} name='name' type="text" />
          </FloatingLabel>

        </Modal.Body>

        <Modal.Footer className='bg-black border'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={addData}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />

    </div>
  )
}

export default Categories