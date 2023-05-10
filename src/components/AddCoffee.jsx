
import "@fontsource/rancho";
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleSubmit = (event) => {
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
        fetch('http://localhost:4000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(data);

            })

    }
    return (
        <>

            <div className="md:mx-40 mt-20">
                <div className="mt-5 bg-[#F4F3F0] md:p-24" >
                    <div>
                        <h1 className="text-center" style={{ fontFamily: "Rancho", fontSize: "45px", paddingTop: '20px', color: "#374151" }}>Add New Coffee</h1>
                        {/* ... */}

                        <h1 className="text-center px-20 mt-3" >It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h1>
                    </div>

                    <div className="mx-20 mt-10">
                        <form onSubmit={handleSubmit}>

                            <div className="lg:flex gap-10">
                                {/* left Side  */}
                                <div className="md:w-1/2">
                                    <label htmlFor="coffee-name" className="block font-mediumtext-gray-700">Name</label>
                                    <input type="text" id="coffee-name" name="name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee name" />
                                    <label htmlFor="coffee-name" className="block font-medium text-gray-700">Supplier</label>
                                    <input type="text" name="supplier" id="coffee-name" className=" mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee supplier" />
                                    <label htmlFor="coffee-name" className="block font-medium text-gray-700">Catagory</label>
                                    <input name="catagory" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee category" />


                                </div>

                                {/* right side  */}
                                <div className="md:w-1/2">
                                    <label htmlFor="coffee-name" className="block font-mediumtext-gray-700">chef</label>
                                    <input name="chef" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee Chef" />
                                    <label htmlFor="coffee-name" className="block font-medium text-gray-700">Taste</label>
                                    <input type="text" name="taste" id="coffee-name" className=" mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee Taste" />
                                    <label htmlFor="coffee-name" className="block font-medium text-gray-700">Details</label>
                                    <input name="details" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter coffee Details" />


                                </div>
                            </div>

                            <div >
                                <label htmlFor="coffee-name" className="block font-mediumtext-gray-700">Photo</label>
                                <input name="photo" type="text" id="coffee-name" className="mb-4 block w-full h-12 px-4 mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter photo URL" />

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
                                    Add Coffee
                                </button>


                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>







    );
};

export default AddCoffee;