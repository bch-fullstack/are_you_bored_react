import React, { useState, useEffect } from 'react'

function Popup({ content }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (content) {
            setOpen(true);
        }
    }, [content])

    return (
        <div className={`modal ${ open && 'show-modal'}`} id="modal">
			<div className="modal-content">
				<div className="modal-body" id="modal-body">
					{ content }
				</div>

				<div className="my-modal-footer">
                    <button 
                        type="button" 
                        id="close-btn" 
                        className="btn" 
                        onClick={() => setOpen(false)}
                        >CLOSE</button>
				</div>
			</div>
		</div>
    )
}

export default Popup
