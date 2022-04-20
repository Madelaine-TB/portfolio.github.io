import React from 'react'
import Notes from '../Notes/notes'

import './modal.css';

const Modal = props => {
if(!props.show) {
    return null
}

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <button className='button' onClick={props.onClose}>X</button>
                </div>
            <div className='modal-body'>
            <Notes />
            </div>
            </div>
        </div>
    )

}
export default Modal