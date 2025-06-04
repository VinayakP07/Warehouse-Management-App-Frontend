/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Alerts = (props) => {
    const {msg, type} = props;
  return (
    <>
        <div className= {` sticky top-0 alert text-center alert-${type}`} role="alert">
            {msg}
        </div>
    </>
  )
}

export default Alerts