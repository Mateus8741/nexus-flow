import Image from "next/image"

interface LogoProps {
  width?: number
  height?: number
}

export function LogoWhite({ width = 180, height = 180 }: LogoProps) {
  return (
    <div className="flex items-center">
      <Image src="/nexusflow-white.svg" alt="NexusFlow" width={width} height={height} />
    </div>
  )
}
