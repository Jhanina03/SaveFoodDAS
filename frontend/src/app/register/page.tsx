"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Users, Mail, Lock, Store, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "CLIENT" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard");
      } else {
        const errData = await res.json();
        setError(errData.message || "No se pudo completar el registro.");
      }
    } catch (err) {
      setError("Error de conexión. Revisa tu internet e intenta de nuevo.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-emerald-100">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-inner">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">Crea tu cuenta</h2>
          <p className="text-gray-500 mt-2 text-lg">Es rápido, seguro y fácil de usar para todos.</p>
        </div>
        
        {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-red-500" />
          <span className="font-medium">{error}</span>
        </div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Nombre completo o del negocio</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Users className="w-5 h-5" />
              </div>
              <input type="text" required placeholder="Ej: Juan Pérez o Restaurante El Buen Sabor" className="pl-12 w-full text-lg border-2 border-gray-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
          </div>
          
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Correo electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input type="email" required placeholder="correo@ejemplo.com" className="pl-12 w-full text-lg border-2 border-gray-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
          </div>
          
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Contraseña (Mínimo 6 caracteres)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-5 h-5" />
              </div>
              <input type="password" required placeholder="••••••••" className="pl-12 w-full text-lg border-2 border-gray-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
          </div>
          
          <div className="pt-2">
            <label className="block text-lg font-semibold text-gray-700 mb-3">¿Cómo usarás SaveFood?</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button type="button" onClick={() => setFormData({...formData, role: 'CLIENT'})} className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${formData.role === 'CLIENT' ? 'border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20' : 'border-gray-200 text-gray-600 hover:border-emerald-300'}`}>
                <Users className={`w-8 h-8 ${formData.role === 'CLIENT' ? 'text-emerald-600' : 'text-gray-400'}`} />
                <span className="font-semibold text-center">Comprar <br/><span className="text-sm font-normal">Cliente normal</span></span>
              </button>
              
              <button type="button" onClick={() => setFormData({...formData, role: 'RESTAURANT'})} className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${formData.role === 'RESTAURANT' ? 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-500/20' : 'border-gray-200 text-gray-600 hover:border-blue-300'}`}>
                <Store className={`w-8 h-8 ${formData.role === 'RESTAURANT' ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="font-semibold text-center">Vender <br/><span className="text-sm font-normal">Local / Franquicia</span></span>
              </button>

              <button type="button" onClick={() => setFormData({...formData, role: 'ORGANIZATION'})} className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${formData.role === 'ORGANIZATION' ? 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-500/20' : 'border-gray-200 text-gray-600 hover:border-rose-300'}`}>
                <HeartHandshake className={`w-8 h-8 ${formData.role === 'ORGANIZATION' ? 'text-rose-600' : 'text-gray-400'}`} />
                <span className="font-semibold text-center">Recibir <br/><span className="text-sm font-normal">Donaciones</span></span>
              </button>
            </div>
          </div>
          
          <button type="submit" className="w-full bg-emerald-600 text-white font-bold text-xl py-4 px-4 rounded-xl shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all hover:-translate-y-1 mt-6">
            Crear Mi Cuenta
          </button>
        </form>
        
        <div className="mt-8 text-center text-lg text-gray-600">
          ¿Ya tienes cuenta? <Link href="/login" className="text-emerald-600 font-bold hover:underline">Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  );
}
