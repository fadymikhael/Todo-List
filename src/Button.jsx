import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, type, index }) => {
  return (
    <button
      className={`p-2 mr-2 rounded font-semibold text-white ${type}`}
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
