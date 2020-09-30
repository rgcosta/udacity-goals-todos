import React from "react";
import Todos from './todos';
import Goals from './goals';
import { connect } from 'react-redux';
import {
    handleInitialData
} from "../actions/shared";

class App extends React.Component {
    componentDidMount () {
        console.log('props', this.props);
        console.log('state', this.state);
        const { dispatch } = this.props

        dispatch(handleInitialData())
    }
    render() {

        if (this.props.loading === true) {
            return <h3>Loading</h3>
        }

        return (
            <div>
                <Todos />
                <Goals />
            </div>
        )
    }
}

export default connect((state) => ({
    loading: state.loading
}))(App)