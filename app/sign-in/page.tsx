import { LoginButton } from '@/components/login-button'

export default async function SignInPage() {
  // redirect to home if user is already logged in

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <LoginButton />
    </div>
  )
}
