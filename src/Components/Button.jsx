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
// export const Save = ({ text, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="cursor-pointer flex items-center fill-lime-600 bg-lime-100 hover:bg-lime-900 active:border active:border-lime-600 rounded-md duration-100 p-2"
//       title="Save"
//     >
//       <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//       <span className="text-sm text-lime-400 font-bold pr-1">{text}</span>
//     </button>
//   )
// }

// Save.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// }

export const Save = ({ text, onClick, type, index }) => {
  const saveBtnClass = type ? type : 'SaveBtn' // Utilisation de la classe renommée
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
