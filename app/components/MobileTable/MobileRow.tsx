import Rating from "../CellData/Rating";
import StatusBadge from "../CellData/StatusBadge";
import TableCell from "./TableCell";
import ActionsButton from "../CellData/ActionsButton";
import Image from "next/image";

interface MobileRowProps {
    data: ItemData,
    cells: number
}

export default function MobileRow ( {data}: MobileRowProps ) {
    return(
        <tr className="w-full flex gap-2 justify-between items-start border-b-[1px] border-gray-200 py-2 px-4">
            <TableCell style="mr-5 border-none">
                <StatusBadge type="icon" status={data.status}/>
                <Image src={`${data.imgURL}`}width={85} height={85} alt={data.name} className="rounded-sm"/>
            </TableCell>
            <TableCell style="flex flex-col justify-between flex-grow h-[85px] border-none py-1">
                <h2 className="text-gray-900 text-base font-semibold">{data.name}</h2>
                <p className="text-xs font-normal text-gray-500 leading-4">Next reservation: {data.nextReservation}</p>
                <Rating rating={data.rating}/>
            </TableCell>
            <TableCell style="w-2 h-[85px] border-none">
                <ActionsButton />
            </TableCell>
        </tr>
    )
}