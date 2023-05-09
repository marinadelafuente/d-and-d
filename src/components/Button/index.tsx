import React from 'react'
// import './button.css'

// Types
import type ButtonProps from './types'
/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      }
      {...props}
    >
      {label}
    </button>
  )
}
