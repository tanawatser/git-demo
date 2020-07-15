import React, { Component } from "react";
import Tb_AGV002 from "../Components/Tb_AGV002.tsx";
import Filterdate from "./Filterdate";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      stWorktime:[],
      enWorktime:[],
      filterTime:[],

    };
  }

  componentDidMount() {
    fetch("http://172.18.9.55:3200/")
      // fetch('https://jsonplaceholder.typicode.com/users')

      // แปลงข้อมูลที่ได้เป็น json
      .then((res) => res.json())
      // ชื่อ re เป็นตัวเก็บข้อมูล JSON จาก then ข้างบน
      .then((re) => {
        // console.log(res);
        this.setState({
          isLoading: true,
          data: re,
    
        });
          // console.log(this.state.data)
      });
  }

// f(x) กดค้นหา
  filterSearchTime=()=> {
    // this.setState({
    //  stWorktime:this.state.stWorktime,
    //  enWorktime:this.state.enWorktime
    // })
console.log('clicked')

  }
  render() {
    const { isLoading, data } = this.state;
    if (!isLoading) {
      return <div> L O A D I N G . . .</div>;
    } else {
      return (
        <div>
          <Tb_AGV002 
          data={this.state.data} 
          searchTime={this.filterSearchTime}
          />
        </div>
        
      );
      
    }
    
  }
}
export default Table;
