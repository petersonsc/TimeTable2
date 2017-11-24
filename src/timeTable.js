/**
 * Created by synus on 24/11/17.
 */
import React from 'react'
import {Component} from 'react'
import ReacDOM from 'react-dom'

class TimeTable extends Component {
    render() {
        return (
            <BootstrapTable data={ products } height='120' scrollTop={ 'Bottom' }>
                <!-- Available value is Top, Bottom or any number value -->
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default (TimeTable.getElementById("timetable"))
