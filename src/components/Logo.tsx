import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/nexusflow-dark.svg" alt="NexusFlow" width={180} height={180} />
    </div>
  )
}
