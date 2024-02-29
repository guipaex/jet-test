interface TableCellProps{
    style?: string,
    children: React.ReactNode
}

export default function TableCell ({style, children}: TableCellProps) {
    return <td className={`${style} p-4 text-gray-900 text-sm font-normal tracking-normal border-b-[1px] border-gray-200`}> {children} </td>
}