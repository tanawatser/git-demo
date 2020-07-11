import React, { Component } from 'react'

class SearchButton extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
        }
    }
    searchClick () {

    }
    
    render() {
        return (
            <div>
                <button onClick={this.searchClick}> + </button>
            </div>
        )
    }
}

export default SearchButton
