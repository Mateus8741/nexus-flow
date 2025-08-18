import Image from "next/image"

interface SymbolProps {
  width?: number
  height?: number
}

export function SymbolLogo({ width = 180, height = 180 }: SymbolProps) {
  return (
    <div className="flex items-center">
      <Image src="/symbol.svg" alt="NexusFlow" width={width} height={height} />
    </div>
  )
}
