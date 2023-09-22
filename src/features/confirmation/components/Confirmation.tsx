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
    <main className="bg-white min-h-screen flex flex-col px-6 justify-center gap-12">
      <img src={checkmark} alt="" className="w-16"></img>
      <div>
        <h1 className="text-navy-dark font-bold text-4xl leading-10 mb-6">
          Thanks for subscribing!
        </h1>
        <p className="text-base">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          if (!dispatch) return
          dispatch('')
          reset()
        }}
        className="bg-navy-dark text-white font-bold py-3 px-6 rounded-md hover:bg-navy-light"
      >
        Dismiss message
      </button>
    </main>
  )
}
