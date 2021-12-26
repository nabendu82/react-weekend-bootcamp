import React from 'react'
import { connect } from 'react-redux'
import { buyChicken, buyEgg } from '../redux'

const ItemContainer = (props) => {
    return (
        <di>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </di>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.egg ? state.egg.numOfEggs : state.chicken.numOfChickens;

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFn = ownProps.egg ? () => dispatch(buyEgg()) : () => dispatch(buyChicken());

    return {
        buyItem: dispatchFn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
