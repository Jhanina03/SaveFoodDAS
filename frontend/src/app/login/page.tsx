"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, Mail, Lock, ShieldCheck } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
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
        setError(errData.message || "Correo o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error de conexión. Revisa tu internet e intenta de nuevo.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 shadow-inner">
            <LogIn className="w-8 h-8 pointer-events-none" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">Bienvenido de nuevo</h2>
          <p className="text-gray-500 mt-2 text-lg">Ingresa para continuar a SaveFood</p>
        </div>
        
        {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-red-500" />
          <span className="font-medium">{error}</span>
        </div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Correo electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input type="email" required placeholder="correo@ejemplo.com" className="pl-12 w-full text-lg border-2 border-gray-200 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
          </div>
          
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-5 h-5" />
              </div>
              <input type="password" required placeholder="••••••••" className="pl-12 w-full text-lg border-2 border-gray-200 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white font-bold text-xl py-4 px-4 rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all hover:-translate-y-1 mt-6">
            Entrar
          </button>
        </form>
        
        <div className="mt-8 text-center text-lg text-gray-600">
          ¿No tienes una cuenta aún? <Link href="/register" className="text-blue-600 font-bold hover:underline">Crea una Gratis</Link>
        </div>
      </div>
    </div>
  );
}
