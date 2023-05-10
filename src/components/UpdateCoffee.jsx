import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import "@fontsource/rancho";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const { _id, name, chef, supplier, taste, catagory, details, photo } = coffee;

    const handleUpdate = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const chef = from.chef.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const catagory = from.catagory.value;
        const details = from.details.value;
        const photo = from.photo.value
        const data = {
            name, chef, supplier, taste, catagory, details, photo
        }
        console.log(data)

        //send data to the server
        fetch(`http://localhost:4000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(data);

            })

    }
    return (
        <div className="mx-20 mt-10 bg-[#F4F3F0] p-20 rounded-2xl">

            <h1 style={{ fontFamily: "Rancho", fontSize: '40px' }} className=' mb-10 text-center'>Update Existing Coffee Details</h1>
            <form onSubmit={handleUpdate}>

                <div className="lg:flex gap-10">
                    {/* left Side  */}
                    <div className="md:w-1/2">
                        <label htmlFor="coffee-name" className="block font-mediumtext-gray-700">Name</label>
                        <input type="text" id="coffee-name" name="name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee name" defaultValue={name} />
                        <label htmlFor="coffee-name" className="block font-medium text-gray-700">Supplier</label>
                        <input type="text" name="supplier" id="coffee-name" className=" mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee supplier" defaultValue={supplier} />
                        <label htmlFor="coffee-name" className="block font-medium text-gray-700">Catagory</label>
                        <input name="catagory" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee category" defaultValue={catagory} />


                    </div>

                    {/* right side  */}
                    <div className="md:w-1/2">
                        <label htmlFor="coffee-name" className="block font-mediumtext-gray-700">chef</label>
                        <input name="chef" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee Chef" defaultValue={chef} />
                        <label htmlFor="coffee-name" className="block font-medium text-gray-700">Taste</label>
                        <input type="text" name="taste" id="coffee-name" className=" mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee Taste" defaultValue={taste} />
                        <label htmlFor="coffee-name" className="block font-medium text-gray-700">Details</label>
                        <input name="details" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee Details" defaultValue={details} />


                    </div>
                </div>

                <div >
                    <label htmlFor="coffee-name" className="block font-mediumtext-gray-700">Photo</label>
                    <input name="photo" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter photo URL" defaultValue={photo} />

                    <button
                        style={{
                            fontFamily: "Rancho",
                            color: 'black',
                            backgroundColor: '#D2B48C',
                            border: 'px solid #331A15',
                            borderRadius: '5px',
                            padding: '10px 20px',

                            fontSize: '18px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Update Coffee Details
                    </button>


                </div>

            </form>
        </div>
    );
};

export default UpdateCoffee;