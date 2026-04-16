interface KPICardProps {
  title: string
  value: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: string
}

export default function KPICard({
  title,
  value,
  change,
  trend = 'neutral',
  icon,
}: KPICardProps) {
  const trendColors = {
    up: 'text-emerald-600 bg-emerald-50',
    down: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50',
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        {change && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${trendColors[trend]}`}
          >
            {change}
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  )
}