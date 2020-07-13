import React, { Component } from "react";
import Tb_AGV002 from "../Components/Tb_AGV002.tsx";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      startDate: [],
      endDate: [],
      filterDate:[],
      row:'',
      date:'',

    };
  }
  componentDidMount() {
    fetch("http://172.18.9.55:3200/")
      // fetch('https://jsonplaceholder.typicode.com/users')

      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({
          isLoading: true,
          data: res,

        });
        //   console.log(this.state.tb)
      });
  }


  render() {
    const { isLoading, data } = this.state;
    if (!isLoading) {
      return <div> L O A D I N G . . .</div>;
    } else {
      return (
        <div>
          <Tb_AGV002 data={this.state.data} />
        </div>
      );
    }
  }
}
export default Table;
