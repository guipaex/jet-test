import React from "react"

const headers = ['Car', 'Next Reservation', 'Status', 'Rating', 'Actions']

export default function Table(){
    return(
        <table className="shadow rounded-lg">
            <thead className="bg-gray-50">
                <tr>
                  {headers.map((header) => {
                    return <TableHead key={header}>{header}</TableHead>
                    })}
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td className="color-back">Car</td>
                    <td>Mini Cooper 2020</td>
                    <td>11/07</td>
                    <td>5 estrelas</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    )
}

function TableHead ({children}:{children:React.ReactNode}) {
    return(
        <th className="p-4 text-gray-500 uppercase text-xs font-semibold">{children}</th>
    )
}