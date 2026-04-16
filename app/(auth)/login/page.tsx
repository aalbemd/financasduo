'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { AuthForm } from '@/components/auth/AuthForm'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (email: string, password: string) => {
    setError('')
    setLoading(true)

    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      if (error.message === 'Invalid login credentials') {
        setError('E-mail ou senha incorretos.')
      } else {
        setError(error.message)
      }
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <AuthForm
      mode="login"
      onSubmit={handleLogin}
      error={error}
      loading={loading}
    />
  )
}