import React, { useState } from 'react'
import axios from 'axios'
import base_url from '../Api'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddBook =  () => {
    let navigate=useNavigate()
    const [Book, setBook] = useState({name:"", authorGender:"", langauge:"", image:null, catagory:"", pages:0, price:0, authorName:"", isEnable:true, bookfile: null})
    const handleForm = async (event) => {
        event.preventDefault();
        console.log(Book)
        let formData = new FormData();
        formData.append('name', Book.name);
        formData.append('langauge', Book.langauge);
        formData.append('image', Book.image);
        formData.append('catagory', Book.catagory);
        formData.append('authorGender', Book.authorGender);
        formData.append('authorName', Book.authorName);
        formData.append('price', Book.price);
        formData.append('pages', Book.pages);
        formData.append('isEnable', Book.isEnable);
        formData.append('bookfile', Book.bookfile);
        try {
            const response= await axios.post(`${base_url}/book`, formData)
            navigate('/')
            toast.success('Book is added succesfully', {
                position: "bottom-left",
                autoClose: 3000,
                theme:'dark'  
                });
        } catch (error) {
            toast.error('something went wrong', {
                position: "bottom-left",
                autoClose: 3000,
                theme:'dark'
                
            });
        }
      
    }

    const onChange = (e) => {
        setBook({ ...Book, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-around">
                    <div className="col-8">
                        <div className="text-center"><h1>Add Book !! </h1></div>

                        <form onSubmit={handleForm}>
                            <div className="mb-2">
                                <label className="form-label">Book Name:</label>
                                <input type="text" className="form-control form-control-sm" id="exampleInputEmail1" name="name" onChange={onChange} />
                            </div>

                            <div>
                                <label className="form-label">Datalist example</label>
                                <input className="form-control form-control-sm" list="datalistOptions" id="exampleDataList" name="catagory" onChange={onChange} placeholder="Type Catagory..." />
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
                                <input type="text" className="form-control form-control-sm" id="exampleInputEmail1" onChange={onChange} name="price" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label">Author Name:</label>
                                <input type="text" className="form-control form-control-sm" id="exampleInputEmail1" onChange={onChange} name="authorName" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Book Langauge:</label>
                                <input type="text" className="form-control form-control-sm" id="exampleInputEmail1" onChange={onChange} name="langauge" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">No of pages:</label>
                                <input type="number" className="form-control form-control-sm" id="exampleInputEmail1" onChange={onChange} name="pages" />
                            </div>

                            <div className="mb-2">
                                <label className="form-label ">Author Gender: </label>
                                <br />

                                <input className="form-check-input" type="radio" name="authorGender" id="inlineRadio1" value="Male" onChange={onChange} />
                                <label className="form-check-label mx-2" >Male</label>

                                <input className="form-check-input " type="radio" name="authorGender" id="inlineRadio2" value="Female" onChange={onChange} />
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

                            <div className="mb-2 form-check">
                                <input required type="checkbox" className="form-check-input" id="exampleCheck1" name='enable' />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary btn-sm ">Submit</button>
                                <button type="reset" className="btn btn-warning btn-sm mx-2">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddBook
