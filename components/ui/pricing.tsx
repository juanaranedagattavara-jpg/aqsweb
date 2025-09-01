"use client";

import React, { useState } from 'react';
import { Check, Info, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  text: string;
  limit?: string;
  tooltip?: string;
}

interface Plan {
  id: string;
  name: string;
  info: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: Feature[];
  btn: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
}

interface PricingSectionProps {
  plans: Plan[];
  heading: string;
  description: string;
}

export function PricingSection({ plans, heading, description }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Toggle */}
      <motion.div 
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center space-x-4">
          <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
            Mensual
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
              isYearly ? 'bg-primary-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                isYearly ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
            Anual
            <span className="ml-2 text-sm text-primary-400">(descuento incluido)</span>
          </span>
        </div>
      </motion.div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className={`relative rounded-2xl p-8 flex flex-col h-full ${
              plan.highlighted
                ? 'bg-gradient-to-br from-primary-900/20 to-primary-800/20 border-2 border-primary-500/50'
                : 'bg-gray-900/50 border border-gray-700'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Más Popular
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.info}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">
                  M$ {isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-400 ml-2">
                  /{isYearly ? 'año' : 'mes'}
                </span>
              </div>
              <div className="mb-2 text-sm text-gray-400">
                <span>UF {isYearly ? (plan.price.yearly / 39).toFixed(1) : (plan.price.monthly / 39).toFixed(1)}</span>
                <span className="ml-2">/{isYearly ? 'año' : 'mes'}</span>
              </div>
              {isYearly && (
                <p className="text-sm text-primary-400">
                  Ahorras M$ {Math.round(plan.price.monthly * 12 - plan.price.yearly)} al año
                </p>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-gray-200">{feature.text}</span>
                    {feature.limit && (
                      <span className="text-primary-400 ml-2">({feature.limit})</span>
                    )}
                    {feature.tooltip && (
                      <div className="group relative inline-block ml-2">
                        <Info className="w-4 h-4 text-gray-500 cursor-help" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          {feature.tooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="w-full py-3 px-6 rounded-lg font-semibold transition-all bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/25 mt-auto"
            >
              {plan.btn.text}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div 
        className="text-center mt-16 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="mb-4">
          ¿Necesitas un plan personalizado o más funcionalidades? <a href="#" className="text-primary-400 hover:text-primary-300 underline">Contáctanos</a>
        </p>
        <p className="text-sm">
          Acceso inmediato a todos los análisis • Datos actualizados en tiempo real • Soporte técnico especializado
        </p>
      </motion.div>
    </div>
  );
}
