import LogoutButton from './LogoutButton'

interface HeaderProps {
  userEmail: string
}

export default function Header({ userEmail }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nome do app */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              FD
            </div>
            <span className="font-semibold text-gray-900 hidden sm:block">
              FinançasDuo Pro
            </span>
          </div>

          {/* Usuário + Logout */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden md:block">
              {userEmail}
            </span>
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  )
}