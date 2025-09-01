'use client';

import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, TrendingUp, BarChart3, Globe } from 'lucide-react';

interface NewsletterFormData {
  email: string;
  firstName: string;
  company: string;
  interests: string[];
}

export default function NewsletterPage() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    firstName: '',
    company: '',
    interests: []
  });

  const [errors, setErrors] = useState<Partial<Record<keyof NewsletterFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Análisis de Comercio Exterior',
    'Tendencias de Mercado',
    'Inteligencia Competitiva',
    'Análisis de Precios',
    'Logística y Supply Chain',
    'Regulaciones y Aranceles'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof NewsletterFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof NewsletterFormData, string>> = {};

    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
    if (!formData.company.trim()) newErrors.company = 'La empresa es requerida';
    if (formData.interests.length === 0) newErrors.interests = 'Selecciona al menos un interés';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      email: '',
      firstName: '',
      company: '',
      interests: []
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">¡Suscripción Exitosa!</h1>
            <p className="text-lg text-slate-600 mb-8">
              Gracias por suscribirte a nuestro newsletter. Recibirás actualizaciones semanales sobre comercio exterior y análisis de mercado.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Suscribir Otro Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Newsletter de Comercio Exterior
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Mantente actualizado con las últimas tendencias, análisis y oportunidades en el comercio internacional. 
              Recibe insights exclusivos directamente en tu inbox.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Actualizaciones semanales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Contenido exclusivo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sin spam</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Suscríbete Ahora
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.company ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Nombre de tu empresa"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Temas de Interés *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                        />
                        <span className="text-sm text-slate-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Suscribiendo...' : 'Suscribirme al Newsletter'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                  ¿Qué Recibirás?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Análisis de Tendencias</h3>
                      <p className="text-slate-600">
                        Reportes semanales sobre las tendencias emergentes en comercio internacional y su impacto en tu negocio.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Datos y Estadísticas</h3>
                      <p className="text-slate-600">
                        Datos actualizados sobre volúmenes de comercio, precios de commodities y análisis de mercados específicos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Oportunidades Globales</h3>
                      <p className="text-slate-600">
                        Identificación de nuevas oportunidades de mercado y análisis de países emergentes para expandir tu negocio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="font-semibold text-indigo-900 mb-3">
                  🎯 Contenido Personalizado
                </h3>
                <p className="text-indigo-700 text-sm">
                  Basándonos en tus intereses seleccionados, te enviaremos contenido relevante y específico para tu industria y necesidades.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  📊 Frecuencia de Envío
                </h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Newsletter semanal los martes</li>
                  <li>• Alertas urgentes cuando sea necesario</li>
                  <li>• Reportes mensuales de resumen</li>
                  <li>• Webinars y eventos exclusivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
