import React from 'react';
import { AiFillDelete, AiFillEdit, } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const CoffeeCard = ({ coffee, data, setData }) => {

    const { _id, name, chef, supplier, taste, catagory, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/coffee/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = data.filter(cof => cof._id != _id);

                            setData(remaining)

                        }
                    })

                console.log('confirmed')
            }
        })

    }
    return (
        <div >
            <div className="card lg:card-side bg-[#F5F4F1] shadow-xl">
                <figure><img src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Chef :{chef}</p>
                    <p> supplier :{supplier}</p>
                    <p>Tase: {taste}</p>

                </div>
                <div className='mt-4 mr-10 p-10 space-y-4'>

                    <button className=' text-3xl'><FaRegEye /></button> <br />
                    <Link to={`update-coffee/${_id}`}>

                        <button className=' text-slate-700 text-3xl'><AiFillEdit /></button>
                    </Link> <br />
                    <button
                        onClick={() => handleDelete(_id)}

                        className='text-3xl text-red-600'><AiFillDelete /></button> <br />

                </div>
            </div>

        </div >
    );
};

export default CoffeeCard;