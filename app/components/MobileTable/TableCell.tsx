interface TableCellProps{
    style?: string,
    children: React.ReactNode
}

export default function TableCell ({style, children}: TableCellProps) {
    return <td className={`${style} border-b-[1px] border-gray-200`}>{children}</td>
}