import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-bagde"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp, TbBrandYoutube } from "react-icons/tb"
import Image from "next/image"

const MOCK_CONTACTS = [
  {
    url: "https://github.com.br",
    icon: <TbBrandGithub size={24} />
  },
  {
    url: "https://linkedin.com.br",
    icon: <TbBrandLinkedin size={24} />
  },
  {
    url: "https://youtube.com.br",
    icon: <TbBrandYoutube size={24} />
  },
  {
    url: "https://whatsapp.com.br",
    icon: <TbBrandWhatsapp size={24} />
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Jardiel Carlos</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá! Sou Jardiel Carlos, Desenvolvedor Full Stack. Estou cursando pós-graduação em Engenharia de Software na Cruzeiro do Sul e sou formado pelo IFPB. Tenho experiência em desenvolvimento de sistemas e sites, com conhecimento em bancos de dados como PostgreSQL, MongoDB e MySQL. Minhas habilidades incluem Python, Java, Node, React, TypeScript e muito mais. Adoro aprender novas tecnologias e colaborar em projetos inovadores.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a 
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-grey-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-me.png"
          alt="Foto de perfil do Jardiel Carlos"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}