import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '../components/ui/input'
import { SelectBudgetOptions } from '../constants/options'

function  CreateTrip () {
  const [place, setPlace] = useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='font-bold text-3xl '>Tell us your Travel Preferences</h2>
        <p className='mt-3 text-gray-500 text-xl'>Just Provide some basic information, and our trip planner will generate a customized itinerary based on your Preferences.</p>

       <div className='mt-20 flex flex-col gap-10'>
          <div>
            <h2 className='text-xl my-3 font-medium'>What is Destination of Choice ?</h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange:(v)=>{setPlace(v);console.log(v)}
              }}
            />
          </div>  
          <div>
            <h2 className='text-xl my-3 font-medium'>How many Days are you planning your trip ?</h2>
            <Input placeholder={'Ex.3'} type="number" />
          </div>
       </div> 

       <div>
        <h2 className='text-xl my-3 font-medium'>What is Your Budget ?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item,index)=>(
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg'>
              <h2>{item.icon}</h2>
              <h2>{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default  CreateTrip 