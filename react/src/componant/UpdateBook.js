import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import base_url from '../Api'
import { toast } from 'react-toastify'

function UpdateBook() {
  const navigate = useNavigate()
  const location = useLocation()
  const e = location.state.e;
  const [Book, setBook] = useState({ image: null, name: e.name, authorGender: e.authorGender, langauge: e.langauge, pic: e.pic, catagory: e.catagory, pages: e.pages, price: e.price, authorName: e.authorName, isEnable: true, id: e.id, bookfile: null })


  const onChange = (e) => {
    setBook({ ...Book, [e.target.name]: e.target.value })
  }
  const handleForm = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('id', Book.id)
    formData.append('name', Book.name);
    formData.append('langauge', Book.langauge);
    formData.append('image', Book.image);
    formData.append('catagory', Book.catagory);
    formData.append('authorGender', Book.authorGender);
    formData.append('authorName', Book.authorName);
    formData.append('price', Book.price);
    formData.append('pages', Book.pages);
    formData.append('isEnable', Book.isEnable);
    formData.append('pic', Book.pic);
    formData.append('bookfile',Book.bookfile);

    try {
      const response = await axios.put(`${base_url}/book/${Book.id}`, formData)
      console.log(response)
      navigate('/')
      toast.success('Book is updated succesfully', {
        position: "bottom-left",
        autoClose: 3000,
        theme: 'dark'
      });

    } catch (error) {
      toast.error('something went wrong ! please try again', {
        position: "bottom-left",
        autoClose: 3000,
        theme: 'dark'
      });
    }
  }
  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-around">
          <div className="col-8">
            <div className="text-center"><h1>Update Book !! </h1></div>
            <div className="text-center">
              <img style={{ height: 100, width: 120, borderRadius: 10 }} src={`/image/${e.pic}`} className="img-thumbnail" alt="" />
            </div>

            <form onSubmit={handleForm}>
              <div className="mb-2">
                <label className="form-label">Book Name:</label>
                <input type="text" className="form-control form-control-sm" value={Book.name} id="exampleInputEmail1" name="name" onChange={onChange} />
              </div>

              <div>
                <label className="form-label">Datalist example</label>
                <input className="form-control form-control-sm" list="datalistOptions" id="exampleDataList" name="catagory" value={Book.catagory} onChange={onChange} placeholder="Type Catagory..." />
                <datalist id="datalistOptions">
                  <option value="San Francisco" />
                  <option value="New York" />
                  <option value="Seattle" />
                  <option value="Los Angeles" />
                  <option value="Chicago" />
                </datalist>
              </div>
              <div className="mb-2">
                <label className="form-label">Price :</label>
                <input type="text" className="form-control form-control-sm" value={Book.price} id="exampleInputEmail1" onChange={onChange} name="price" />
              </div>

              <div className="mb-2">
                <label className="form-label">Author Name:</label>
                <input type="text" className="form-control form-control-sm" value={Book.authorName} id="exampleInputEmail1" onChange={onChange} name="authorName" />
              </div>
              <div className="mb-2">
                <label className="form-label">Book Langauge:</label>
                <input type="text" className="form-control form-control-sm" value={Book.langauge} id="exampleInputEmail1" onChange={onChange} name="langauge" />
              </div>
              <div className="mb-2">
                <label className="form-label">No of pages:</label>
                <input type="number" className="form-control form-control-sm" value={Book.pages} id="exampleInputEmail1" onChange={onChange} name="pages" />
              </div>

              <div className="mb-2">
                <label className="form-label ">Author Gender: </label>
                <br />

                <input checked={Book.authorGender === "Male" ? true : false} className="form-check-input cheacked" type="radio" name="authorGender" id="inlineRadio1" value="Male" onChange={onChange} />
                <label className="form-check-label mx-2" >Male</label>

                <input checked={Book.authorGender === "Female" ? true : false} className="form-check-input " type="radio" name="authorGender" id="inlineRadio2" value="Female" onChange={onChange} />
                <label className="form-check-label mx-2">Female</label>
              </div>

              <div className="mb-2">
                <label className="form-label">Select an image</label>
                <input className="form-control form-control-sm " name="image" id="formFileSm" type="file" onChange={e => { setBook({ ...Book, image: e.target.files[0] }) }} />
              </div>

              <div className="mb-2">
                <label className="form-label">Select an bookfile</label>
                <input className="form-control form-control-sm " name="bookfile" id="formFileSm" type="file" onChange={e => { setBook({ ...Book, bookfile: e.target.files[0] }) }} />
              </div>


              <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-sm ">Submit</button>

              </div>
            </form>
          </div>
        </div>
      </div >
    </>

  )
}

export default UpdateBook
