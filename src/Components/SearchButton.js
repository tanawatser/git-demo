import React, { Component } from "react";

class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: [],
      endDate: [],
      filterDate:[],
      row:'',
      date:''
    };
  }
  searchClick() {
    this.setState({
        startDate:this.startDate.filter(),
        endDate:this.endDate.filter(),

    });
  }
  render() {

    return (
      <div>
     
        {/* <button type="submit" onClick={this.state.searchClick}>
          <i className="fa fa-search"></i> ค้นหา
        </button> */}
      </div>
    );
  }
}

export default SearchButton;
