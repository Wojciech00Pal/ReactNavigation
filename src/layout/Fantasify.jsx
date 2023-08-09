import React from 'react'
import { useActionData, useLocation } from 'react-router-dom'

const Fantasify = () => {

const {state:{searchText}} = useLocation();

    return (
    <div className='d-flex align-items-center flex-column justify-content-center p-2 ' style={{color:'white'}}>
      <div style={{maxWidth: '100%', marginLeft:'0.5em',marginRight:'0.5em',marginBottom: '0', fontSize:'5.4em',fontFamily:"fantasy", fontStyle:"italic",  wordWrap: 'break-word'}}>
      {searchText}
     </div>
        <i class="bi bi-magic"
          style={{color:'white', fontSize:'5.2em',verticalAlign: 'middle'}}
        ></i>
    </div>
  )
}

export default Fantasify