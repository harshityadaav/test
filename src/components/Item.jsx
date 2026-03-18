import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='group relative'>
      <Link to={`/products/${product?.id}`}>
      <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none lg:h-80 h-96 border border-gray-700/50'>
        <img src={product?.image} alt={product?.name} className='h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-500 ease-out group-hover:scale-110' />
        {/* Light-grey mask sliding from top to bottom on hover */}
        <div className='product-mask-overlay' />
      </div>
      </Link>
      <div className='mt-4 flex justify-between items-start'>
        <div>
            <h3 className='text-sm text-foreground'>
                <Link to={`/products/${product?.id}`}>
                <span aria-hidden="true" className='inset-0'>{product?.name}</span>
                </Link>
            </h3>
            {/* Yellow star ratings */}
            <div className='flex mt-1 gap-0.5'>
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-yellow-400 text-sm leading-none'>★</span>
              ))}
            </div>
        </div>
        <p className='text-sm font-medium text-foreground'>${product?.new_price}</p>
      </div>
    </div>
  )
}

export default Item
