"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Store, Utensils, HeartHandshake, Info, Search } from "lucide-react";

export default function FoodList() {
  const [foods, setFoods] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) { router.push("/login"); return; }
    setUser(JSON.parse(userData));
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await fetch("http://localhost:3000/foods");
      if (res.ok) {
        const data = await res.json();
        // Sort by expiration date
        const sorted = data.sort((a:any, b:any) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime());
        setFoods(sorted);
      }
    } catch(e) {}
  };

  const handleRequest = async (foodId: number) => {
    try {
      const res = await fetch("http://localhost:3000/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foodId, userId: user.id })
      });
      if (res.ok) {
        alert("¡Solicitud enviada con éxito! El restaurante será notificado.");
      } else {
        alert("Hubo un error al procesar tu solicitud.");
      }
    } catch(e) {}
  };

  if (!user) return <div className="p-8 text-center text-gray-500">Cargando...</div>;

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold text-slate-800">Alimentos Disponibles</h1>
          <Link href="/dashboard" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 bg-slate-100 hover:bg-emerald-50 px-5 py-3 rounded-full font-medium transition">
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
          <p className="text-blue-800 text-lg">
            Explora las opciones de restaurantes locales. Los alimentos en <span className="font-bold text-purple-700">Donación</span> están reservados exclusivamente para organizaciones registradas, mientras que los de <span className="font-bold text-emerald-700">Venta</span> están disponibles para todos con gran descuento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map(f => (
            <div key={f.id} className="bg-white rounded-3xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all hover:-translate-y-1">
              {/* Card Header Colored */}
              <div className={`p-6 pb-4 ${f.type === 'DONATION' ? 'bg-purple-600 text-white' : 'bg-emerald-600 text-white'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold leading-tight">{f.name}</h3>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                    {f.type === 'SALE' ? 'VENTA' : 'DONACIÓN'}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm mt-3 font-medium">
                  <Store className="w-4 h-4" />
                  {f.restaurant?.name || "Restaurante Local"}
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 text-lg mb-6 leading-relaxed flex-1">
                  "{f.description}"
                </p>
                
                <div className="flex flex-col gap-3 bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span>Vence: <strong className="text-slate-900">{new Date(f.expirationDate).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}</strong></span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  {f.type === 'SALE' ? 
                    <span className="font-extrabold text-3xl text-emerald-600">${f.price.toFixed(2)}</span> 
                    : 
                    <span className="font-extrabold text-3xl text-purple-600">Gratis</span>
                  }
                  
                  {/* Button logic based on Role */}
                  {((f.type === 'SALE' && user.role !== 'ORGANIZATION') || (f.type === 'DONATION' && user.role === 'ORGANIZATION')) ? (
                    <button onClick={() => handleRequest(f.id)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg text-white shadow-md transition-all hover:scale-105 ${f.type==='SALE' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-purple-600 hover:bg-purple-700'}`}>
                      {f.type === 'SALE' ? <><Utensils className="w-5 h-5"/> Comprar</> : <><HeartHandshake className="w-5 h-5"/> Solicitar</>}
                    </button>
                  ) : (
                    <span className="text-sm font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-lg">No aplicable a tu perfil</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {foods.length === 0 && (
            <div className="col-span-full bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
              <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No hay alimentos en este momento</h3>
              <p className="text-lg text-slate-500 max-w-lg mx-auto">Vuelve más tarde o recarga la página. ¡Los restaurantes publican nuevos alimentos todos los días al cierre de su jornada!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
