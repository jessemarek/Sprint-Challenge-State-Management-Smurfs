import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions'

import SmurfCard from './SmurfCard'
import AddSmurfForm from './AddSmurfForm'
import EditSmurfForm from './EditSmurfForm'
import RemoveSmurfForm from './RemoveSmurfForm'

const Smurfs = props => {

    const {
        smurfList,
        isFetching,
        fetchSmurf

    } = props

    useEffect(() => {
        fetchSmurf()

    }, [fetchSmurf, smurfList])

    return (
        <div>
            {
                isFetching && <h3>Fetching Data...</h3>
            }
            <div className="smurf-container">
                {
                    smurfList && smurfList.map((smurf, idx) => <SmurfCard key={idx} name={smurf.name} age={smurf.age} height={smurf.height} />)
                }
            </div>
            <div className="forms">
                <div>
                    <h3>Add a Smurf</h3>
                    <AddSmurfForm />
                </div>

                <div>
                    <h3>Edit a Smurf</h3>
                    <EditSmurfForm />
                </div>

                <div>
                    <h3>Delete a Smurf</h3>
                    <RemoveSmurfForm />
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfList: state.smurfReducer.smurfList,
        isFetching: state.smurfReducer.isFetching
    }
}

export default connect(mapStateToProps, { fetchSmurf })(Smurfs)