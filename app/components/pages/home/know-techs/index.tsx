import { SectionTitle } from "@/app/components/section-title"
import { KnowTech as IKnowTech } from "@/app/types/projects"
import { KnowTech } from "./know-tech"

type KnowTechsProps = {
  techs: IKnowTech[]
}

export const KnowTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnowTech
            key={tech.name}
            tech={tech}
          />
        ))}
      </div>
    </section>
  )
}