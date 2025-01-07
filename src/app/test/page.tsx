import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='bg-gray-800 text-white text-4xl min-h-screen w-full  flex flex-col items-center justify-center'>
        <Button variant='chai' size='lg'>Shadcn button</Button>
    </div>
  )
}

export default page