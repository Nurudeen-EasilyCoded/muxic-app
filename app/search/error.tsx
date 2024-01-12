'use client'

import CustomBox from '@/components/CustomBox'
import React from 'react'

const Error = () => {
  return (
    <CustomBox className='h-full flex items-center justify-center'>
      <div className='text-neutral-400'>
        Something went wrong.
      </div>
    </CustomBox>
  )
}

export default Error