import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, type, index }) => {
  return (
    <button
      className={`px-2 py-2 mr-2 rounded font-semibold text-white ${type}`}
      onClick={() => onClick(index)}
    >
      {text}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number,
}
export default Button
