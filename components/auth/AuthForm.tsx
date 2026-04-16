'use client'

import { useState } from 'react'

interface AuthFormProps {
  mode: 'login' | 'cadastro'
  onSubmit: (email: string, password: string) => Promise<void>
  error?: string
  loading?: boolean
}

export function AuthForm({ mode, onSubmit, error, loading }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F0D]">
      <div className="w-full max-w-md p-8 rounded-2xl border border-[#1E2923] bg-[#111815]">

        <div className="text-center mb-8">
          <p className="text-xs tracking-[4px] uppercase text-[#00C896] mb-2">
            FinançasDuo Pro
          </p>
          <h1 className="text-2xl font-light text-white">
            {mode === 'login' ? 'Entrar na conta' : 'Criar conta'}
          </h1>
          <p className="text-sm text-[#6B8278] mt-2">
            {mode === 'login' ? 'Bem-vindo de volta 👋' : 'Comece a organizar suas finanças 💚'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#6B8278] mb-1">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl bg-[#161D1A] border border-[#1E2923] text-white placeholder-[#3a4a43] focus:outline-none focus:border-[#00C896] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[#6B8278] mb-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full px-4 py-3 pr-12 rounded-xl bg-[#161D1A] border border-[#1E2923] text-white placeholder-[#3a4a43] focus:outline-none focus:border-[#00C896] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B8278] hover:text-[#00C896] transition-colors text-lg"
              >
                {showPassword ? (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
) : (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#00C896] text-[#0A0F0D] font-semibold hover:bg-[#00b386] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <p className="text-center text-sm text-[#6B8278] mt-6">
          {mode === 'login' ? (
            <>Não tem conta?{' '}<a href="/cadastro" className="text-[#00C896] hover:underline">Criar agora</a></>
          ) : (
            <>Já tem conta?{' '}<a href="/login" className="text-[#00C896] hover:underline">Entrar</a></>
          )}
        </p>

      </div>
    </div>
  )
}