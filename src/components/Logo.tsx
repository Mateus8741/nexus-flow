import Image from "next/image"

interface LogoProps {
  width?: number
  height?: number
}

export function Logo({ width = 180, height = 180 }: LogoProps) {
  return (
    <div className="flex items-center">
      <Image src="/nexusflow-dark.svg" alt="NexusFlow" width={width} height={height} />
    </div>
  )
}
