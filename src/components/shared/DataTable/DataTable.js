import { get, isFunction } from "lodash";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './dataTable.css';


const DataTable = ({ columns, data, onPageChange }) => {
    const totalPages = Math.ceil(data?.meta?.total / data?.meta?.limit);

    return (
        <>
            <div className="overflow-x-auto overflow-y-hidden min-h-[70vh] bg-white rounded-lg p-4 mb-3">
                <table className="table table-xs">
                    <thead className=" font-semibold p-3 text-black">
                        <tr>
                            {
                                columns.map(col => <th key={col.name}>{col.name}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((dt, index) => (
                            <tr key={index}>
                                {columns.map(col => (
                                    <td key={col.name}>
                                        {isFunction(col.row) ? col.row(dt) : get(dt, col.row)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                data?.meta &&
                <div className="flex justify-start">
                    <ResponsivePagination
                        current={data.meta.page}
                        total={totalPages}
                        onPageChange={onPageChange}
                        maxWidth={20}
                    />
                </div>
            }
        </>
    );
};

export default DataTable;