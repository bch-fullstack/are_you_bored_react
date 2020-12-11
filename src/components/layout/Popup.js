import React, { useState, useEffect } from 'react'

function Popup({ content }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (content) {
            setOpen(true);
        }
    }, [content])

    return (
        <div class={`modal ${ open && 'show-modal'}`} id="modal">
			<div class="modal-content">
				<div class="modal-body" id="modal-body">
					{ content }
				</div>

				<div class="my-modal-footer">
                    <button 
                        type="button" 
                        id="close-btn" 
                        class="btn" 
                        onClick={() => setOpen(false)}
                        >CLOSE</button>
				</div>
			</div>
		</div>
    )
}

export default Popup
