import React from 'react'
import PropTypes from 'prop-types'

const IconButton = ({ onClick, icon }) => {
  return (
    <button onClick={onClick} className="mr-2 focus:outline-none">
      {icon}
    </button>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
}

export default IconButton
