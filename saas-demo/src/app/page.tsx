import Link from 'next/link';
import { ArrowRight, BarChart3, Shield, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Analytics de Comercio Exterior
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Descubre insights valiosos sobre el comercio internacional. 
              Accede a 16 dashboards especializados con datos en tiempo real.
            </p>
            <Link href="/login" className="btn-primary inline-flex items-center gap-2">
              Comenzar Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            Características Principales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">16 Dashboards Especializados</h3>
              <p className="text-slate-600">
                Desde análisis básicos hasta insights avanzados con IA, 
                cubrimos todos los aspectos del comercio exterior.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Datos Seguros y Confiables</h3>
              <p className="text-slate-600">
                Fuentes oficiales y verificación en tiempo real para 
                garantizar la precisión de la información.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Actualizaciones en Tiempo Real</h3>
              <p className="text-slate-600">
                Información actualizada constantemente para que 
                tomes decisiones basadas en datos frescos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            Planes Disponibles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Básico</h3>
              <div className="text-3xl font-bold text-slate-900 mb-6">$29<span className="text-lg text-slate-500">/mes</span></div>
              <ul className="text-slate-600 space-y-2 mb-8">
                <li>• 4 dashboards</li>
                <li>• Datos básicos</li>
                <li>• Soporte por email</li>
              </ul>
              <Link href="/login" className="btn-outline w-full">
                Probar Gratis
              </Link>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-8 text-center border-2 border-indigo-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Pro</h3>
              <div className="text-3xl font-bold text-slate-900 mb-6">$79<span className="text-lg text-slate-500">/mes</span></div>
              <ul className="text-slate-600 space-y-2 mb-8">
                <li>• 8 dashboards</li>
                <li>• Datos avanzados</li>
                <li>• Soporte prioritario</li>
                <li>• Exportaciones</li>
              </ul>
              <Link href="/login" className="btn-primary w-full">
                Comenzar Ahora
              </Link>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Premium</h3>
              <div className="text-3xl font-bold text-slate-900 mb-6">$199<span className="text-lg text-slate-500">/mes</span></div>
              <ul className="text-slate-600 space-y-2 mb-8">
                <li>• 16 dashboards</li>
                <li>• Datos completos</li>
                <li>• Soporte 24/7</li>
                <li>• API access</li>
              </ul>
              <Link href="/login" className="btn-outline w-full">
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Transformar tu Análisis?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Únete a cientos de empresas que ya confían en nuestros insights
          </p>
          <Link href="/login" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
            Comenzar Demo Gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
