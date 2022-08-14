import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component {
    state = { hemisphere : 'north' }

    render() {
        return <SeasonDisplay hem = {this.state.hemisphere}/>
    }
}

ReactDom.render(
    <App/>, document.querySelector('#root')
)