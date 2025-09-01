'use client';

import { useState } from 'react';
import { Calendar, Mail, User, Phone } from 'lucide-react';

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function SolicitarDemoPage() {
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof DemoFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.company.trim()) newErrors.company = 'La empresa es requerida';
    if (!formData.preferredDate) newErrors.preferredDate = 'Selecciona una fecha preferida';
    if (!formData.preferredTime) newErrors.preferredTime = 'Selecciona un horario preferido';

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
      name: '',
      email: '',
      phone: '',
      company: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    
    return dates;
  };

  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">¡Solicitud Enviada!</h1>
            <p className="text-lg text-slate-600 mb-8">
              Hemos recibido tu solicitud de demo. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para confirmar el horario.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Solicitar Otro Demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Solicita tu Demo Personalizado
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubre cómo nuestra plataforma puede transformar tu análisis de comercio exterior. 
            Agenda una sesión personalizada con nuestros expertos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendar Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-slate-900">Calendario Disponible</h2>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-6">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {getAvailableDates().map((date, index) => (
                <button
                  key={index}
                  onClick={() => setFormData(prev => ({ 
                    ...prev, 
                    preferredDate: date.toISOString().split('T')[0] 
                  }))}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    formData.preferredDate === date.toISOString().split('T')[0]
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {date.getDate()}
                </button>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium text-slate-900 mb-3">Horarios Disponibles</h3>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => setFormData(prev => ({ ...prev, preferredTime: time }))}
                    className={`p-2 rounded text-sm transition-colors ${
                      formData.preferredTime === time
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-slate-900">Información de Contacto</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.preferredDate ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Horario Preferido *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.preferredTime ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Selecciona un horario</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Cuéntanos más sobre tus necesidades específicas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Demo'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
