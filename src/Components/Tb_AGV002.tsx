import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MDBIcon, MDBBtn } from "mdbreact";
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

class Tb_AGV002 extends React.PureComponent<any, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();


    constructor(props: {}) {
        super(props);

        //const data = this.props.ViewData;

        const source: any = 
        {
            datafields: [

                { name: 'id', type: 'string', map: '0' },
                { name: 'fname', type: 'string', map: '1' },
                { name: 'nickname', type: 'string', map: '2' },
                { name: 'tel', type: 'string', map: '3' },
                { name: 'workdate', type: 'string', map: '4' },
                { name: 'worktime', type: 'string', map: '5' },
                { name: 'begtime', type: 'string', map: '6' },
                { name: 'upd', type: 'string', map: '7' }

            ],
  
            datatype: 'array',
            localdata: this.props.data

        };

        this.state = {
            columns:[
                { text: 'ID', datafield: 'id',editable:false, width: '10%', filterable: false, align: 'center', cellsalign: 'left', },
                { text: 'Name', datafield: 'fname',editable:false, width: '25%', filterable: false, align: 'center', cellsalign: 'left', },
                { text: 'Nickname', datafield: 'nickname',editable:false, filterable: false, align: 'center', cellsalign: 'left', width: '10%', },
                { text: 'Telephone Number', datafield: 'tel', width: '15%', cellsalign: 'left', align: 'center',},
                { text: 'Work date', datafield: 'workdate', width: '10%', cellsalign: 'center', align: 'center',},
                { text: 'Work time', datafield: 'worktime' , width: '10%', cellsalign: 'center', align: 'center',},
                { text: 'Start time', datafield: 'begtime', width: '10%', cellsalign: 'center', align: 'center',},
                { text: 'Update', datafield: 'upd' , width: '10%', cellsalign: 'center', align: 'center',},
            ],
            source: new jqx.dataAdapter(source),
        }
    }
    componentDidUpdate(){
        console.log(this.props.data)

}

    render() {

        return (
            <div>
                <label>From</label>
                <JqxDateTimeInput width={140} height={25}  textAlign='center' /> 
                <br />
                <label>To</label>
                <JqxDateTimeInput width={140} height={25}  textAlign='center' />
                <button> + </button>
               
                <JqxGrid
                
                    ref={this.myGrid}
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