'use client'

import CustomBox from "@/components/CustomBox"
import { BounceLoader } from "react-spinners"

const Loading = () => {
  return (
    <CustomBox className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={40} />
    </CustomBox>
  )
}

export default Loading