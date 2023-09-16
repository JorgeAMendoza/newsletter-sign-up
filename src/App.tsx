import desktopIllustration from '@/src/assets/images/illustration-sign-up-desktop.svg'
import mobileIllustration from '@/src/assets/images/illustration-sign-up-mobile.svg'
import { SignUp } from './features/signup'
import { useContext, useEffect, useState } from 'react'
import { ConfirmingEmail } from './features/confirming-email'
import { Confirmation } from './features/confirmation'
import { EmailContext } from './context/EmailContext'

console.log(desktopIllustration)

function App() {
  const email = useContext(EmailContext)
  const [signUpConfirmed, setSignUpConfirmed] = useState(false)
  const [confirmingEmail, setConfirmingEmail] = useState(false)

  useEffect(() => {
    if (signUpConfirmed) setConfirmingEmail(false)
  }, [signUpConfirmed])

  if (confirmingEmail) {
    return <ConfirmingEmail confirmSignUp={setSignUpConfirmed} />
  }

  if (signUpConfirmed) {
    return (
      <Confirmation
        email={email}
        reset={() => {
          setSignUpConfirmed(false)
        }}
      />
    )
  }

  return (
    <>
      <main className="bg-white h-screen">
        <picture>
          <source srcSet={desktopIllustration} media="(min-width: 768px)" />
          <img src={mobileIllustration} alt="sign up" decoding="async"></img>
        </picture>
        <div className="px-6 mt-7">
          <h1 className="text-navy-dark text-4xl font-bold">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more</li>
          </ul>
          <SignUp submitEmail={setConfirmingEmail} />
        </div>
      </main>
    </>
  )
}

export default App
