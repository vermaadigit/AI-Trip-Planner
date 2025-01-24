import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails } from '@/service/GlobalApi';

function InfoSection({trip}) {

  useEffect(()=>{
    trip && GetPlacePhoto()
  },[trip])

  const GetPlacePhoto = async() => {
    const data={
      textQuery : trip?.userSelection?.location?.label
    }
    const result = await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
    })
  }
  return (
    <div>
        <img src="/Placeholder.jpg" className='h-[450px] w-full object-cover rounded-xl'/>

        <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl '>{trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Days</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂 No of Traveler : {trip?.userSelection?.people}</h2>
            </div>
        </div>
        <Button><IoIosSend /></Button>
        </div>
    </div>
  )
}

export default InfoSection