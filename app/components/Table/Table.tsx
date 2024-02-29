import React from "react"
import TableRow from './TableRow'
import TableHead from "./TableHead"

interface TableProps {
    data: ItemData[];
    heads: string[];
}

export default function Table({data, heads}: TableProps){

    console.log(data)
    return(
        <table className="shadow rounded-lg w-3/4">
            <thead className="bg-gray-50 border-b-[1px] border-gray-200">
                <tr>
                  {heads.map((head) => {
                    return <TableHead key={head}>{head}</TableHead>
                    })}
                </tr>
            </thead>
            <tbody>
            {data.map((item) => {
                    return <TableRow key={item.id} data={item} cells={heads.length}/>
                    })}
            </tbody>
        </table>
    )
}

