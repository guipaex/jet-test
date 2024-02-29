import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

interface StatusBadgeProps {
    type?: string,
    status: string
}

const STYLES = {
    available: {
        string:"w-fit rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-sm text-center text-green-800",
        icon:  <IoIosCheckmarkCircle  className="fill-green-800 w-6 h-auto "/>
    },
    unavailable: {
        string : "w-fit rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-sm text-center text-red-800",
        icon: <IoIosCloseCircle className="fill-red-800 w-6 h-auto "/>
    }
}

export default function StatusBadge ({status, type}: StatusBadgeProps) {
    const style = STYLES[status.toLocaleLowerCase() as keyof typeof STYLES];
    if(type === 'icon'){
        return (
            <div className="absolute m-1 z-10">
                {style.icon}
                <div className="w-3 h-3 bg-white top-1 left-1 absolute z-[-1]"/>
            </div>
        )
    }
    return <p className={style.string}> {status} </p>
}