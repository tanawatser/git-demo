import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MDBIcon, MDBBtn } from "mdbreact";
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import '../Style/ComponentStyle.css'



class Tb_AGV002 extends React.PureComponent<any, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();


    constructor(props: {}) {
        super(props);

        //const data = this.props.ViewData;

        const source: any = 
        {
            localdata: this.props.data,
            datafields: [

                { name: 'id', type: 'string' },
                { name: 'fname', type: 'string'},
                { name: 'nickname', type: 'string'},
                { name: 'tel', type: 'string'},
                { name: 'workdate', type: 'string'},
                { name: 'worktime', type: 'string'},
                { name: 'begtime', type: 'string'},
                { name: 'upd', type: 'string'}

            ],
  
            datatype: 'array',

        };

        this.state = {
      
            
            columns:[
                { text: 'ID', datafield: 'id',editable:false, width: '5%', filterable: true, align: 'center', cellsalign: 'left', },
                { text: 'Name', datafield: 'fname',editable:false, width: '10%', filterable: true, align: 'center', cellsalign: 'left', },
                { text: 'Nickname', datafield: 'nickname',editable:false, width: '5%',filterable: true, align: 'center', cellsalign: 'left',  },
                { text: 'Telephone Number', datafield: 'tel', editable:false, width: '10%', cellsalign: 'left', align: 'center',},
                { text: 'Work date', datafield: 'workdate',editable:false, width: '10%', cellsalign: 'center', align: 'center',},
                { text: 'Work time', datafield: 'worktime' ,editable:false, width: '5%', cellsalign: 'center', align: 'center',},
                { text: 'Start time', datafield: 'begtime',editable:false, width: '5%', cellsalign: 'center', align: 'center',},
                { text: 'Update', datafield: 'upd' ,editable:false, width: '10%', cellsalign: 'center', align: 'center',},
            
            ],
            source: new jqx.dataAdapter(source),
        }
    }

    componentDidUpdate(){
        // console.log(this.props.data)
}

    render() {

        return (
            <div>
            <div className="box-date">

                Work time from
    
            <div className="display"> 
                <JqxDateTimeInput
                    width={150} 
                    height={30} 
                    formatString={'T'} 
                    showTimeButton={true} 
                    showCalendarButton={false} 
                    textAlign={'center'}
                    
                    />
           </div>
        
                <label>to</label>
                      
            <div className="display"> 
                <JqxDateTimeInput
                    
                    width={150} 
                    height={30} 
                    formatString={'T'} 
                    showTimeButton={true} 
                    showCalendarButton={false} 
                    textAlign={'center'}
                    />
            </div>
            {/* ดึง f(x) จาก table.js ใช้ this.props.searchTime*/}
            <button onClick={this.props.searchTime} >
            <i className="fa fa-search"></i> ค้นหา
            </button>

{/*     
            <button onClick={} >
          <i className="fa fa-search"></i> ค้นหา
        </button> */}
      
            </div>
                <JqxGrid
                    ref={this.myGrid}
                    filterable={true} 
                    width='100%'
                    source={this.state.source}
                    pageable={true}
                    autoheight={true}
                    columns={this.state.columns}
                    theme="metrodark"
                    editable={true}
                    enabletooltips={true}
                    selectionmode={'singlecell'}
                    editmode={'click'}
                    columnsresize={true}
                    sortable={true}
                />
            </div>
        );
    }
}
export default Tb_AGV002;