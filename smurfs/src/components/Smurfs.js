import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions'

import SmurfCard from './SmurfCard'

const Smurfs = props => {

    const {
        smurfList,
        isFetching,
        fetchSmurf

    } = props

    useEffect(() => {
        fetchSmurf()

    }, [])

    return (
        <div>
            {
                isFetching && <h3>Fetching Data...</h3>
            }
            {
                smurfList && smurfList.map(smurf => <SmurfCard name={smurf.name} age={smurf.age} height={smurf.height} />)
            }
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