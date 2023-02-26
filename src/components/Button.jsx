import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-2 px-3 bg-blue-gradient font-poppins font-medium  sm:text-[20px] text-[15px] mb-5 text-primary outline-none ${styles} rounded-[10px]`}>
      Unit economics
    </button>
  )
}

export default Button
