export default function TableHead ({children}:{children:React.ReactNode}) {
    return(
        <th className="w-fit whitespace-nowrap p-4 text-gray-500 uppercase text-xs font-semibold text-left">{children}</th>
    )
}
