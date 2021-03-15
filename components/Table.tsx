import { Component } from "react";
import path from 'path';
import fs from 'fs';

import parseCsv from "../utils/parseCsv";


type TableProps = {
    data: Array<Array<string>>;
}

class Table extends Component<TableProps> {
    constructor(props: TableProps) {
        super(props);
    }

    render() {
        const data = this.props.data;
        let rows = data.map((row, i) => {
            let entry = row.map((elem, j) => {
                if (i == 0) {
                    return <th key={j}>{ elem }</th>
                } else {
                    return <td key={j}>{ elem }</td>
                }
            });
            return <tr key={i}>{ entry }</tr>
        });

        return (
            <table className="table-component">
               { rows }
            </table>
        );
    }
}

export default Table;