'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm, FieldErrors } from "react-hook-form";
import toast from "react-hot-toast";
import { HiArrowNarrowRight } from "react-icons/hi";
import { z } from "zod";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { fadeUpAnimation } from "@/app/lib/animation";

const contactFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(50, "Nome pode ter no máximo 50 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(1, "Mensagem não pode estar vazia").max(500, "Mensagem pode ter no máximo 500 caracteres")
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {

  const {
    handleSubmit,
    register,
    reset,
    formState: {
      isSubmitting
    }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (err) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.')
    }
  }

  const onError = (errors: FieldErrors<ContactFormData>) => {
    const firstError = Object.values(errors)[0];
    if (firstError) {
      toast.error(firstError.message);
    }
  }

  return (
    <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          noValidate
          onSubmit={handleSubmit(onSubmit, onError)}
          {...fadeUpAnimation}
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("email")}

          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
            {...register("message")}
          />

          <Button className="w-max mx-auto mt-6 shadow-button" disabled={isSubmitting}>
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}