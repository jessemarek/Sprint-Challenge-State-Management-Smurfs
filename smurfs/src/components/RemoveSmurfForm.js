import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../store/actions'

const RemoveSmurfForm = props => {

    const {
        smurfList,
        deleteSmurf

    } = props

    const intitialFormValue = ''

    const [formValue, setFormValue] = useState(intitialFormValue)

    const onSubmit = e => {
        e.preventDefault()

        let smurfToRemove = null

        smurfList.forEach(smurf => {
            if (smurf.name.toLowerCase() === formValue.toLocaleLowerCase()) {
                smurfToRemove = smurf.id
            }
        })

        deleteSmurf(smurfToRemove)

        setFormValue(intitialFormValue)
    }

    return (
        <form onSubmit={onSubmit}>
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

const mapStateToProps = state => {
    return {
        smurfList: state.smurfReducer.smurfList
    }
}

export default connect(mapStateToProps, { deleteSmurf })(RemoveSmurfForm)