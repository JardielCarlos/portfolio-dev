import { CMSIcon } from "@/app/components/cms-icon"
import { KnowTech as IKnownTech } from "@/app/types/projects"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"

type KnowTechProps = {
  tech: IKnownTech
}

export const KnowTech = ({ tech }: KnowTechProps) => {
  const relativeTime = getRelativeTimeString(new Date(tech.startDate))
  
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all min-h-32">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}