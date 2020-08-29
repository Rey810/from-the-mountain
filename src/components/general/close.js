import React from "react"

const close = props => {
  return (
    <div className="modal-close absolute p-2">
      <button type="button" aria-label="close form" onClick={props.close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  )
}

export default close
