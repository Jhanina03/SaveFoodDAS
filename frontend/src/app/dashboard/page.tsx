"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, Leaf, Utensils, Search, LayoutDashboard, History, Heart, ArrowRight, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [recentFoods, setRecentFoods] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
    } else {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchDashboardData(parsedUser);
    }
  }, []);

  const fetchDashboardData = async (currentUser: any) => {
    try {
      const res = await fetch("http://localhost:3000/foods");
      if (res.ok) {
        const data = await res.json();
        // If restaurant, show their own foods. If client/org, show available foods.
        if (currentUser.role === 'RESTAURANT') {
          setRecentFoods(data.filter((f: any) => f.restaurantId === currentUser.id).slice(0, 4));
        } else if (currentUser.role === 'ORGANIZATION') {
          setRecentFoods(data.filter((f: any) => f.type === 'DONATION').slice(0, 4));
        } else {
          setRecentFoods(data.filter((f: any) => f.type === 'SALE').slice(0, 4));
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse flex flex-col items-center">
        <Leaf className="w-12 h-12 text-emerald-300 mb-4" />
        <p className="text-xl text-gray-500 font-medium">Cargando tu espacio...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-2 text-emerald-700">
            <Leaf className="w-8 h-8" />
            <span className="text-2xl font-extrabold tracking-tight">SaveFood</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-500">
              <Link href="/dashboard" className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Inicio</Link>
              <Link href="/food" className="hover:text-emerald-600 transition">Explorar</Link>
              {user.role === 'RESTAURANT' && <Link href="/publish" className="hover:text-emerald-600 transition">Publicar</Link>}
            </nav>
            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg shadow-inner">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <button onClick={() => { localStorage.clear(); router.push("/"); }} className="flex items-center gap-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-3 py-2 rounded-xl transition font-medium text-sm">
                <LogOut className="w-4 h-4" />
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Hola, {user.name.split(' ')[0]} 👋</h1>
            <p className="text-xl text-slate-500">
              {user.role === 'RESTAURANT' ? 'Tus deliciosos platillos pueden salvar al planeta hoy.' : 'Encuentra las mejores opciones y ayuda a reducir el desperdicio.'}
            </p>
          </div>
          {user.role === 'RESTAURANT' ? (
            <Link href="/publish" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center gap-2">
              <Utensils className="w-5 h-5" /> Nueva Publicación
            </Link>
          ) : (
            <Link href="/food" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-2">
              <Search className="w-5 h-5" /> Ver Catálogo
            </Link>
          )}
        </div>

        {/* Impact / Awareness Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
            <Leaf className="absolute -right-4 -bottom-4 w-24 h-24 text-white opacity-20" />
            <p className="text-emerald-100 font-semibold mb-1 relative z-10">CO2 Evitado</p>
            <h3 className="text-3xl font-extrabold relative z-10">24.5 kg</h3>
          </div>
          <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
            <Heart className="absolute -right-4 -bottom-4 w-24 h-24 text-white opacity-20" />
            <p className="text-rose-100 font-semibold mb-1 relative z-10">Comidas Salvadas</p>
            <h3 className="text-3xl font-extrabold relative z-10">14</h3>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
            <p className="text-slate-500 font-semibold mb-1 text-sm">Tu Nivel de Impacto</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-extrabold text-slate-800">Héroe Local</h3>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
            <p className="text-slate-500 font-semibold mb-1 text-sm">Próximo Logro</p>
            <div className="w-full bg-slate-100 rounded-full h-3 mt-2">
              <div className="bg-amber-400 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-right">Faltan 3 acciones</p>
          </div>
        </div>

        {/* Dynamic Content Section based on Role */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {user.role === 'RESTAURANT' ? 'Tus Ofertas Activas' : 'Sugerencias para Ti'}
              </h2>
              <Link href="/food" className="text-emerald-600 font-bold hover:underline flex items-center gap-1 text-sm">
                Ver Todo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {recentFoods.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {recentFoods.map((f: any) => (
                  <div key={f.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-slate-800 leading-tight">{f.name}</h4>
                      <span className={`text-xs font-black px-2 py-1 rounded-md ${f.type==='SALE' ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-purple-700'}`}>
                        {f.type === 'SALE' ? 'VENTA' : 'DONACIÓN'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4 flex-1 line-clamp-2">{f.description}</p>
                    <div className="flex items-center justify-between mt-auto border-t border-slate-50 pt-3">
                      <span className="font-extrabold text-xl text-slate-700">
                        {f.type === 'SALE' ? `$${f.price.toFixed(2)}` : 'Gratis'}
                      </span>
                      {user.role !== 'RESTAURANT' && (
                        <Link href="/food" className="text-sm font-bold text-emerald-600 hover:text-emerald-800">Lo quiero</Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-100 rounded-3xl p-10 text-center border-dashed border-2 border-slate-200">
                <LayoutDashboard className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-600 mb-2">No hay alimentos encontrados</h3>
                <p className="text-slate-500">
                  {user.role === 'RESTAURANT' ? 'Aún no has publicado nada hoy. ¡Anímate a subir tu primera oferta!' : 'Aún no hay alimentos disponibles en tu categoría.'}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <History className="w-6 h-6 text-slate-400" /> Historial
            </h2>
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
              <div className="relative pl-6 border-l-2 border-emerald-200">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1 border-2 border-white"></div>
                <p className="text-sm font-bold text-slate-800">¡Te uniste a SaveFood!</p>
                <p className="text-xs text-slate-500 mt-1">Has dado el primer paso hacia la sostenibilidad.</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-100">
                <div className="absolute w-3 h-3 bg-slate-200 rounded-full -left-[7px] top-1 border-2 border-white"></div>
                <p className="text-sm font-bold text-slate-400">Pronto verás más actividad</p>
                <p className="text-xs text-slate-400 mt-1">Tus transacciones y donaciones aparecerán aquí.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
