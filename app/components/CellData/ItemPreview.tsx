import Image from "next/image"

interface ItemPreviewProps {
    url: string,
    name: string
}

export default function ItemPreview({url, name}: ItemPreviewProps) {
    return (
        <div className="flex items-center gap-2">
            <Image className="rounded-sm" src={url} alt={name} width={48.9} height={46}/>
            <p className="w-48 h-fit whitespace-nowrap">{name}</p>
        </div>
    )
}