import React, { Component } from 'react'
import Tb_AGV002 from '../Components/Tb_AGV002.tsx'

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tb:[]
                 
        }

        fetch("http://172.18.9.55:3200/").then(res => res.json()).then((res)=>{
            // console.log(re);
            this.setState({tb:res})
            // console.log(this.state.TB)
        })

    }

    render() {
        
        return (
            <div>
                <Tb_AGV002 data={this.state.tb}/>
            </div>
        )
    }
}

export default Table
