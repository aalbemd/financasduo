export default function ConfirmarEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F0D]">
      <div className="w-full max-w-md p-8 rounded-2xl border border-[#1E2923] bg-[#111815] text-center">

        <div className="text-5xl mb-6">📬</div>

        <p className="text-xs tracking-[4px] uppercase text-[#00C896] mb-2">
          FinançasDuo Pro
        </p>

        <h1 className="text-2xl font-light text-white mb-4">
          Confirme seu e-mail
        </h1>

        <p className="text-[#6B8278] text-sm leading-relaxed">
          Enviamos um link de confirmação para o seu e-mail.
          Verifique sua caixa de entrada
          (e a pasta de spam) para ativar sua conta.
        </p>

        <a href="/login" className="inline-block mt-8 px-6 py-3 rounded-xl border border-[#00C896]/30 text-[#00C896] text-sm hover:bg-[#00C896]/10 transition-colors">
          Ja confirmei - Fazer login
        </a>

      </div>
    </div>
  )
}