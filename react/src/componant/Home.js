import React, { useEffect, useState } from 'react'
import axios from 'axios'
import base_url from '../Api'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { toast } from 'react-toastify'

function Home(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${base_url}/book`).then(
            (response) => {
                setBooks(response.data)

            }, (error) => {
                console.log(error)
                toast.error('something went wrong', {
                    position: "bottom-left",
                    autoClose: 3000,
                    theme: 'dark'
                });
            }
        )
    }

   const download= (id)=>{

   }

    const deleteBook = (id) => {
        try {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this Book Data!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(async (willDelete) => {
                    if (willDelete) {

                        const response = await axios.delete(`${base_url}/book/${id}`)
                        setBooks(books.filter(book => { return book.id !== id }))
                    } else {
                        swal("Your Book Data is safe!");
                    }
                });


        } catch (error) {
            console.log(error)

        }

    }
    return (

        <div className="mx-3 table-responsive">
            <div className='mt-4 text-center'><h1>Avaliable Books !!</h1></div>
            <table className={`table table-bordered table-${props.mode}`}>
                <thead>
                    <tr className={`table-${props.mode}`}>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Langauge</th>
                        <th scope="col">pages</th>
                        <th scope="col">price</th>
                        <th scope="col">Catagory</th>
                        <th scope="col">AuthorName</th>
                        <th scope="col">AuthorGender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {!books? "" : books.map(e => {
                    return (
                        <tbody key={e.id}>
                            <tr >
                                <th scope="row"><div className="text-center">
                                    <img style={{ height: 50, width: 65, borderRadius: 10 }} src={`/image/${e.pic}`} className="img-thumbnail" alt="" />
                                </div></th>
                                <td>{e.name}</td>
                                <td>{e.langauge}</td>
                                <td>{e.pages}</td>
                                <td>{e.price}</td>
                                <td>{e.catagory}</td>
                                <td>{e.authorName}</td>
                                <td>{e.authorGender}</td>
                                <td>

                                    <Link
                                        to={"/updatebook"}
                                        state={{ e }}> <i className="fa-solid fa-pen-to-square text-success mx-1"></i></Link>

                                    <i className="fa-solid fa-trash-can text-danger mx-2" onClick={() => { deleteBook(e.id) }}></i>
                                    <i className="fa-solid fa-cloud-arrow-down text-primary" ></i>
                                </td>

                            </tr>

                        </tbody>
                    )
                })}

            </table >
        </div >
    )
}

export default Home

// src={`http://127.0.0.1:8887/${!e.pic ?"" :e.pic.substr(e.pic.indexOf('react'))}`}