
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const Loadeddata = useLoaderData();
  const [data, setData] = useState(Loadeddata);
  return (
    <div className='lg:mx-20'>

      <div className='text-center mb-10'>
        <h1 className='text-center text-2xl text-slate-800'>--- Sip & Savor ---</h1>
        <h1 style={{ fontFamily: "Rancho", color: '#331A15' }} className='text-center mt-3 mb-3 text-4xl text-bold'>Our Popular Products</h1>
        <button style={{ fontFamily: "Rancho", }} className='bg-[#E3B577] text-white p-2 rounded-lg'>Add coffee</button>
      </div>
      <div className='grid md:grid-cols-2 gap-9'>
        {
          data.map(coffee => <CoffeeCard
            coffee={coffee}
            key={coffee._id}
            data={data}
            setData={setData}

          ></CoffeeCard>)
        }
      </div>

    </div >
  )
}

export default App
