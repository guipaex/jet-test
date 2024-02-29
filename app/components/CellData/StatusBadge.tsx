const STYLES = {
    available: "w-fit rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-sm text-center text-green-800",
    unavailable: "w-fit rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-sm text-center text-red-800"
}

export default function StatusBadge ({status}: {status: string}) {
    const style = STYLES[status.toLocaleLowerCase() as keyof typeof STYLES];
    return (
        <p className={style}>
            {status}
        </p>
    )
}