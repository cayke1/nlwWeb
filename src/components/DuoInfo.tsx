interface DuoInfoProps {
    label: string,
    value: string,
    color?: string,
}

export function DuoInfo({label, value, color = `white`}: DuoInfoProps) {
    return (
        <div className="w-full mb-4">
        <p className="text-[#D4D4D8] text-sm mb-1">{label}</p>

        <p className={`text-[#${color}] text-sm font-bold`}>{value}</p>
        </div>
    )
}