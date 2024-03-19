import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn'

export default function RenderTotalAmount() {

    const {total} = useSelector((state) => state.cart);

    const handleBuyCourse = () => {
        // const course = cart.map((course) => course._id);
        // console.log("Bought these course ", course);
    }
  return (
    <div>
        <p> Total : </p>
        <p> Rs {total} </p>
        <IconBtn text= 'Buy Now' onClick = {handleBuyCourse}  />
    </div>
  )
}
