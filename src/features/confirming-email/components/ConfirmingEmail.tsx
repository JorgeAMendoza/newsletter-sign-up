import { useEffect } from 'react'

interface ConfirmingEmailProps {
  confirmSignUp: React.Dispatch<boolean>
}

export const ConfirmingEmail = ({ confirmSignUp }: ConfirmingEmailProps) => {
  useEffect(() => {
    const confirm = setTimeout(() => {
      confirmSignUp(true)
    }, 3000)

    return () => {
      clearTimeout(confirm)
    }
  }, [confirmSignUp])

  return (
    <div className="bg-white min-h-screen flex justify-center flex-col items-center gap-6">
      <div className="bg-none w-24 h-24 border-solid border-4 border-vermillion-base border-b-white rounded-full animate-spin"></div>
      <p className="font-bold text-xl">Confirming</p>
    </div>
  )
}
