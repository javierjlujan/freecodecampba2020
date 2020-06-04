import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from '../../store'
import { Provider } from 'react-redux'

class ModalWrapper extends Component{
    
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.modalTarget = document.createElement('div')
        this.modalTarget.className = 'modal'
        document.body.appendChild(this.modalTarget)
        this._render()
    }

    componentWillUnmount(){
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    _render(){
        ReactDOM.render(
            <Provider store={store}>
                <div>{this.props.children}</div>
            </Provider>,
            this.modalTarget    
        )
    }

    render(){
        return <noscript/>
    }
}

export default ModalWrapper