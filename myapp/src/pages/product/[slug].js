import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';
Wrapper
const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
      <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
      {/* Left div Start */}
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel/>
        </div>


        {/* Right div Start */}
        <div className='flex-[1] py-3'>
        {/* Product Title */}
            <div className='text-[34px] font-semibold mb-2'>
           Jordan Retro 6 G
            </div>
            {/* product subtitle */}
            <div className='text-lg font-semibold mb-5'>
           Men&apos;s Golf Shoes
            </div>
            {/* Product price */}
            <div className='text-lg font-semibold'>
            MRP : PKR 19 695.00
            </div>
            <div className='text-md font-medium text-blacl/[0.5]'>
             incl. of taxes
            </div>
            <div className='text-md font-medium text-blacl/[0.5] mb-20'>
           {`(Also includes all applicable duties)`}
            </div>
            {/* Product size range */}
            <div className='mb-10'>
            {/* Heading Start */}
               <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>
                    Select Size
                </div>
                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                   Select Guide
                </div>
               </div>
               {/* Size Start */}
             <div className='grid grid-cols-3 gap-2'>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    UK 6
                 </div>
                 <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                    UK 6
                 </div>
             </div>
             {/* Show error start */}
             <div className='text-red-600 mt-1'>
             Size selection is required
             </div>

            </div>
          {/* Add to cart button */}
          <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
            Add to Cart
          </button>
          {/* Whishlist button */}
          <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
            Whishlist
            <IoMdHeartEmpty size={20}/>
          </button>

          <div>
            <div className='text-lg font-bold mb-5'>
          Product Details
            </div>
            <div className='text-md mb-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tempora deserunt quidem ipsam quia maiores ullam similique nisi accusantium. Esse qui ab numquam aperiam veritatis. please mesage me i wait your positive responsrcxhsdcgd,ag gwertsdfdfwr fwr3453535er.
            </div>
            <div className='text-md mb-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tempora deserunt quidem ipsam quia maiores ullam similique nisi accusantium. Esse qui ab numquam aperiam veritatis. please mesage me i wait your positive responsrcxhsdcgd,ag gwertsdfdfwr fwr3453535er.
            </div>
          </div>

        </div>
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  )
}

export default ProductDetails;
