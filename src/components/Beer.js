import React, {Component} from 'react'

class Beer extends Component {
    render() {
        return (
            <div>
            <p>
            {this.props.beerA.name}
            </p>
            <p>
            {this.props.beerA.description}
            </p>
            </div>
        )
    }
}

export default Beer
