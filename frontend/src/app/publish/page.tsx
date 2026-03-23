"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Box, FileText, Tag, Banknote, CalendarClock, Send } from "lucide-react";

export default function Publish() {
  const [formData, setFormData] = useState({ name: "", description: "", price: 0, type: "SALE", expirationDate: "" });
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) { router.push("/login"); return; }
    const parsed = JSON.parse(userData);
    if (parsed.role !== "RESTAURANT") { router.push("/dashboard"); }
    setUser(parsed);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, restaurantId: user.id }),
      });
      if (res.ok) {
        alert("¡Alimento publicado de forma exitosa en SaveFood!");
        router.push("/dashboard");
      } else {
        alert("Hubo un error al publicar. Intente nuevamente.");
      }
    } catch (err) {
      alert("Error de conexión. Revise su internet.");
    }
  };

  if (!user) return <div className="p-8 text-center text-gray-500">Cargando...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition bg-emerald-50 px-4 py-2 rounded-full">
            <ArrowLeft className="w-5 h-5" />
            Regresar al Panel
          </Link>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-emerald-600 p-8 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Publicar Alimentos</h1>
            <p className="text-emerald-100 text-lg">Ofrece tus excedentes con seguridad y recupera tu inversión o ayuda a quien más lo necesita.</p>
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Name & Type */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-2">Nombre del producto</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Box className="w-6 h-6" />
                    </div>
                    <input type="text" required placeholder="Ej: Pizza familiar, 5 Panes" className="pl-12 w-full text-lg border-2 border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none" onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-2">Modalidad</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Tag className="w-6 h-6" />
                    </div>
                    <select className="pl-12 w-full text-lg border-2 border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none font-medium appearance-none bg-white" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value, price: e.target.value === 'DONATION' ? 0 : formData.price})}>
                      <option value="SALE">💰 Venta con Descuento</option>
                      <option value="DONATION">🤝 Donación Gratuita</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-lg font-bold text-slate-700 mb-2">Descripción detallada</label>
                <div className="relative">
                  <div className="absolute top-5 left-0 pl-4 pointer-events-none text-slate-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <textarea required rows={3} placeholder="Detalla ingredientes, cantidades o estado del producto..." className="pl-12 w-full text-lg border-2 border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none resize-none" onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
                </div>
              </div>

              {/* Row 3: Price & Expiration */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`transition-all duration-300 ${formData.type === 'DONATION' ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                  <label className="block text-lg font-bold text-slate-700 mb-2">Precio de oferta ($)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Banknote className="w-6 h-6" />
                    </div>
                    <input type="number" step="0.01" min="0" required={formData.type === 'SALE'} disabled={formData.type === 'DONATION'} placeholder="0.00" className="pl-12 w-full text-lg font-bold text-emerald-700 border-2 border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none" onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})} />
                  </div>
                  {formData.type === 'DONATION' && <p className="text-sm text-slate-500 mt-2 font-medium">Las donaciones no tienen costo</p>}
                </div>

                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-2">Fecha y Hora Límite</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <CalendarClock className="w-6 h-6" />
                    </div>
                    <input type="datetime-local" required className="pl-12 w-full text-lg border-2 border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none" onChange={e => setFormData({...formData, expirationDate: e.target.value})} />
                  </div>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Tiempo sugerido para consumo seguro.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button type="submit" className="w-full flex justify-center items-center gap-3 bg-emerald-600 text-white font-bold text-2xl py-5 rounded-xl shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all hover:-translate-y-1">
                  <Send className="w-7 h-7" />
                  Publicar en SaveFood
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
