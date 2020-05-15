import React, { useState } from 'react'

const RemoveSmurfForm = () => {

    const intitialFormValue = ''

    const [formValue, setFormValue] = useState(intitialFormValue)

    return (
        <form>
            <label>Name:&nbsp;
                <input
                    name="name"
                    type="text"
                    onChange={e => setFormValue(e.target.value)}
                    value={formValue}

                />
            </label>
            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default RemoveSmurfForm