import { createClient } from '@/lib/supabase/server'
import KPICard from '@/components/dashboard/KPICard'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Busca o nome nos metadados do usuário, com fallback para "Alexandre"
  const displayName =
    user?.user_metadata?.nome ??
    user?.user_metadata?.full_name ??
    'Alexandre'

  // Saudação dinâmica baseada na hora atual
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite'

  return (
    <div>
      {/* Saudação personalizada */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {greeting}, {displayName}! 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Aqui está o resumo das suas finanças hoje.
        </p>
      </div>

      {/* Grid de KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard
          title="Saldo Atual"
          value="R$ 0,00"
          change="+0%"
          trend="neutral"
          icon="💰"
        />
        <KPICard
          title="Receitas do Mês"
          value="R$ 0,00"
          change="0 transações"
          trend="up"
          icon="📈"
        />
        <KPICard
          title="Despesas do Mês"
          value="R$ 0,00"
          change="0 transações"
          trend="down"
          icon="📉"
        />
        <KPICard
          title="Economia"
          value="R$ 0,00"
          change="Meta: R$ 500"
          trend="neutral"
          icon="🎯"
        />
      </div>

      {/* Placeholder para próximas seções */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
        <div className="text-5xl mb-3">🚀</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Pronto para começar!
        </h2>
        <p className="text-gray-600 mb-4">
          Na Semana 4 vamos adicionar o CRUD de transações aqui.
        </p>
        <p className="text-sm text-gray-500">
          Próximos passos: formulário de adicionar transação, listagem com
          filtros e atualização em tempo real via Supabase Realtime.
        </p>
      </div>
    </div>
  )
}