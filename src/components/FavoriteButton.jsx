import React from 'react'
import { FaHeart} from "react-icons/fa";
const FavoriteButton = ({meal,onToggle,isFav}) => {
  return (
    <button onClick={(e)=> {
      onToggle(meal);
    }} className='absolute top-1 p-2 rounded-full right-2 bg-white/80 text-gray-70 cursor-pointer'>
      <FaHeart className={`text-2xl ${isFav?'text-red-600':'text-black'}`} />
    </button>
  )
}

export default FavoriteButton
