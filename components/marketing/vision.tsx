'use client'

import { Lightbulb, Target, Heart, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const visionPoints = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovación Constante',
    description: 'Buscamos constantemente nuevas formas de transformar datos en insights valiosos.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Excelencia en Servicio',
    description: 'Nos comprometemos a superar las expectativas de nuestros clientes en cada interacción.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Pasión por los Datos',
    description: 'Creemos que los datos bien interpretados pueden cambiar el mundo del comercio.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Colaboración',
    description: 'Trabajamos en conjunto con nuestros clientes para crear soluciones personalizadas.'
  }
]

export function Vision() {
  return (
    <section className="py-20 bg-black border-b border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestra Visión y Filosofía
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            En QSP Analytics, creemos que el comercio exterior es el motor del crecimiento económico global. 
            Nuestra misión es democratizar el acceso a la inteligencia de mercado, haciendo que cada empresa, 
            sin importar su tamaño, pueda tomar decisiones informadas y estratégicas.
          </p>
          
          <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl p-8 border border-primary-500/30">
            <p className="text-2xl font-semibold text-white italic">
              "Transformamos la complejidad del comercio global en claridad accionable"
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-400">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{point.title}</h3>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
