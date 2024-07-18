import { get } from "lodash";

const DataTable = ({ columns, data }) => {

    return (
        <div className="overflow-x-auto overflow-y-hidden min-h-[90vh] bg-white rounded-lg p-4">
            <table className="table table-xs">
                <thead className=" font-semibold p-3 text-black">
                    <tr>
                        {
                            columns.map(col => <th key={col.name}>{col.name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                {data?.map((dt, index) => (
                        <tr key={index}>
                            {columns.map(col => (
                                <td key={col.name}>
                                    {col.name === 'Action' ? col.row(dt) : get(dt, col.row)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;