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
    <div>
      <div></div>
      <p>confirming</p>
    </div>
  )
}
