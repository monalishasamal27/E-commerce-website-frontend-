import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-hot-toast";
import {add , remove} from "../redux/Slices/CartSlice"

const Product = ( {post}) => {


  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart");

  }
  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");

  }

  const {cart} = useSelector( (state)=> state);
  return (
    <div className='flex flex-col items-center justify-between 
    shadow-[0_8px_30px_rgb(0,0,0,0.12)] outline
    hover:scale-110 transition duration-300 ease-in  gap-3 p-4 mt-10 mr-5 rounded-xl 
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  
    '>
      <div>
        <p className='text-grey-700 font-semibold text-lg
        text-left truncate w-40 mt-1'> {post.title} </p>
      </div>
      <div className='w-40 text-gray-400 font-normal text-[10px] text-left '>
        <p>{post.description.split(" ").slice(0,10).join(" ")+"  ..." }</p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} alt='item' className='h-full w-full' /> 
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5'>

        <div>
            <p className='text-green-600 font-semibold '>
              ${post.price}
            </p>
          </div>
          <div>
          {
            cart.some( (p) => p.id === post.id) ?
            (<button 
            className='text-gray-700 border-2 border-gray-700 rounded-full
            font-semibold text-[12px] p-1 px-3 uppercase hover:text-white
            hover:bg-gray-700 transition duration-300 ease-in '
            onClick={removeFromCart}>
              Remove Item
            </button>)
            :(<button
            className='text-gray-700 border-2 border-gray-700 rounded-full
            font-semibold text-[12px] p-1 px-3 uppercase hover:text-white
            hover:bg-gray-700 transition duration-300 ease-in '
            onClick={addToCart}>
              Add To Cart
            </button>)
          }
          </div>


      </div>

        
      
    </div>
  )
}

export default Product
