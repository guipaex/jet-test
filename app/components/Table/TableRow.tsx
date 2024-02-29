import Rating from "../CellData/Rating";
import StatusBadge from "../CellData/StatusBadge";
import ItemPreview from "../CellData/ItemPreview";
import TableCell from "./TableCell";
import NexReservartion from "../CellData/NextReservation";
import ActionsButton from "../CellData/ActionsButton";

interface TableRowProps {
    data: ItemData,
    cells: number
}

export default function TableRow ( {data}: TableRowProps ) {
    return(
        <tr>
            <TableCell style={'w-[290px]'}> <ItemPreview url={data.imgURL} name={data.name}/> </TableCell>
            <TableCell style={'w-[290px]'}> <NexReservartion date={data.nextReservation}/> </TableCell>  
            <TableCell style={'w-[290px]'}> <StatusBadge status={data.status}/> </TableCell>
            <TableCell style={'w-[290px]'}> <Rating rating={data.rating}/> </TableCell>
            <TableCell style={'w-5'}> <ActionsButton /> </TableCell>
        </tr>
    )
}