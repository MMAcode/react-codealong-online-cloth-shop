import React from 'react'
import './Button1.style.scss'

function Button1(props) {
  let { children, addToCartStyle, ...propsLeft } = props;
  // addToCartStyle = true;
  return (
    <button
      className={`button1 ${addToCartStyle ? 'addToCartStyle' : ''}`}  //applying different classes based on props
      {...propsLeft}
    >

      {children}
    </button>
  )
}

export default Button1
