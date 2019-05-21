import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {plus, minus, reset} from '../actions'

const stateToPropertyMappter = state => (
    {value: state.value}
)

const dispatcherToPropertyMapper = dispatcher => (
    {
        plus: () => plus(dispatcher),
        minus: () => minus(dispatcher),
        reset: () => reset(dispatcher)
    }
)

const CounterContainer = connect
(stateToPropertyMappter, dispatcherToPropertyMapper)(Counter)

export default CounterContainer;