import { useState } from 'react'

export const SignUp = () => {
  const [text, setText] = useState('')
  return (
    <form>
      <label htmlFor="signupEmail">Email address</label>
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
