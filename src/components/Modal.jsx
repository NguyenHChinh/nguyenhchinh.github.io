import { useState, useEffect } from 'react';

function Modal({ onClose}) {

    return(
        <div className='bg-gray-100 pt-16 pb-16 rounded-xl shadow-lg text-black relative'>
            <button onClick={onClose}
                className='absolute top-3 right-3 text-xl font-bold hover:text-red-500'>
                Close
            </button>
            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-4'>Hi! This is in development</h2>
                <p className='text-lg'>Stay tuned!</p>
            </div>
        </div>
    )
}

export default Modal;