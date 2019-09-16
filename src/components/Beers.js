import React, {Component} from 'react'
import Beer from './Beer'

class Beers extends Component {
    state = {
            beers: []
        }

        componentDidMount(){
            fetch('https://api.punkapi.com/v2/beers')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({beers: myJson});
                console.log(myJson)
            })

        }

    
    render() {
        return( 
            <div>
                <h1>BEER ADDICT</h1>
                {
                    this.state.beers.map( beerA => {
                        return (
                            <Beer key={beerA.id} beerA={beerA} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Beers 