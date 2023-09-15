import { useContext } from 'react'
import checkmark from '@/src/assets/images/icon-success.svg'
import { ActionContext } from '@/src/context/EmailContext'

interface ConfirmationProps {
  email: string
  reset: () => void
}

export const Confirmation = ({ email, reset }: ConfirmationProps) => {
  const dispatch = useContext(ActionContext)
  return (
    <main>
      <img src={checkmark} alt=""></img>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription
      </p>

      <button
        type="button"
        onClick={() => {
          if (!dispatch) return
          dispatch('')
          reset()
        }}
      >
        Dismiss message
      </button>
    </main>
  )
}
