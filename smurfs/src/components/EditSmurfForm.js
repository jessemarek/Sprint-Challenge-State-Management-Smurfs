import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editSmurf } from '../store/actions'

const EditSmurfForm = props => {
    const {
        smurfList,
        editSmurf

    } = props

    const initialFormValues = {
        name: '',
        age: '',
        height: ''
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    const changeHandler = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        let smurfToEdit = null

        smurfList.forEach(smurf => {
            if (smurf.name.toLowerCase() === formValues.name.toLocaleLowerCase()) {
                smurfToEdit = smurf.id
            }
        })
        editSmurf(formValues, smurfToEdit)
        setFormValues(initialFormValues)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name:&nbsp;
                <input
                    name="name"
                    type="text"
                    onChange={changeHandler}
                    value={formValues.name}
                />
            </label>
            <br></br>
            <label>Age:&nbsp;
                <input
                    name="age"
                    type="number"
                    onChange={changeHandler}
                    value={formValues.age}
                />
            </label>
            <br></br>
            <label>Height:&nbsp;
                <input
                    name="height"
                    type="text"
                    onChange={changeHandler}
                    value={formValues.height}
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

export default connect(mapStateToProps, { editSmurf })(EditSmurfForm)