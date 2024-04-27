import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ text, onClick, type }) => {
  const buttonClass = type ? type : 'cssbuttons-io-button'

  return (
    <button className={buttonClass} onClick={onClick}>
      <svg height="25" width="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor" />
      </svg>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export const IconButton = ({ text, onClick, type, index }) => {
  const ButtonIconsClass = type ? type : 'cssbuttons-io-icon-button'
  return (
    <button className={ButtonIconsClass} onClick={() => onClick(index)}>
      {text}
    </button>
  )
}

IconButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  index: PropTypes.number,
}

export const Save = ({ text, onClick, type, index }) => {
  const saveBtnClass = type ? type : 'SaveBtn'
  return (
    <button className={saveBtnClass} onClick={() => onClick(index)}>
      <span className="shadow" />
      <span className="edge" />
      <span className="front text">{text}</span>
    </button>
  )
}

Save.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  index: PropTypes.number,
}

export const Cancel = ({ text, onClick, type, index }) => {
  const CancelBtnClass = type ? type : 'CancelBtn'
  return (
    <button className={CancelBtnClass} onClick={() => onClick(index)}>
      <span className="shadow" />
      <span className="edge" />
      <span className="front text">{text}</span>
    </button>
  )
}

Cancel.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  index: PropTypes.number,
}
