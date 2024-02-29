import React from "react"
import MobileRow from './MobileRow'

interface TableProps {
    data: ItemData[];
    heads: string[];
}

export default function MobileTable({data, heads}: TableProps){
    return(
        <table className="shadow rounded-lg w-fit block md:hidden">
            <tbody>
            {data.map((item) => {
                    return <MobileRow key={item.id} data={item} cells={heads.length}/>
                    })}
            </tbody>
        </table>
    )
}

