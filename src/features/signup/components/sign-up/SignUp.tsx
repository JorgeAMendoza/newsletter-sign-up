import { ActionContext } from '@/src/context/EmailContext'
import { useContext, useState } from 'react'

const emailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i

interface SignUpProps {
  submitEmail: React.Dispatch<boolean>
}

export const SignUp = ({ submitEmail }: SignUpProps) => {
  const dispatch = useContext(ActionContext)
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  const confirmEmail = () => {
    // if email empty, just don't do anything
    if (!dispatch) return
    if (text === '') return

    // check for valid email address with regex
    if (!emailRegex.test(text)) {
      setError(true)
      return
    }

    submitEmail(true)
    setError(false)
    dispatch(text)
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        // does not reload the page
        e.preventDefault()
        confirmEmail()
      }}
    >
      <div>
        <label htmlFor="signupEmail">Email address</label>
        {error ? <p aria-live="polite">Valid email required</p> : null}
      </div>

      <input
        type="email"
        id="signupEmail"
        placeholder="email@company.com"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  )
}
