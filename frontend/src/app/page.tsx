import Link from "next/link";
import { Heart, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-emerald-50 via-white to-blue-50 font-sans">
      {/* Header / Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-emerald-600" />
          <span className="text-2xl font-extrabold text-emerald-800 tracking-tight">SaveFood</span>
        </div>
        <nav className="gap-4 hidden sm:flex">
          <Link href="/login" className="text-emerald-700 font-medium hover:text-emerald-900 transition py-2 px-4">Ingresar</Link>
          <Link href="/register" className="bg-emerald-600 text-white font-medium py-2 px-5 rounded-full shadow-md hover:bg-emerald-700 hover:shadow-lg transition">Unirse</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-700">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide uppercase shadow-sm">
            Para todas las edades • Fácil y Seguro
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Comida perfecta, <br /> <span className="text-emerald-600">sin desperdicio.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conectamos restaurantes locales con personas interesadas en comida con grandes descuentos y organizaciones que necesitan donaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/register" className="group flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:bg-emerald-700 hover:scale-105 transition-all">
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Features / Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">100% Seguro</h3>
            <p className="text-gray-600 text-lg">Plataforma verificada. Los restaurantes deciden qué vender o donar con controles de caducidad estrictos.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Sostenible</h3>
            <p className="text-gray-600 text-lg">Ayuda al planeta reduciendo el desperdicio de comida y dándole una segunda oportunidad a platillos deliciosos.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Solidario</h3>
            <p className="text-gray-600 text-lg">Facilitamos la donación directa a organizaciones benéficas sin complicaciones logísticas ni papeleos.</p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full bg-white py-8 text-center border-t border-gray-100">
        <p className="text-gray-500 font-medium">© 2026 SaveFood MVP. Uniendo comunidades.</p>
      </footer>
    </div>
  );
}
