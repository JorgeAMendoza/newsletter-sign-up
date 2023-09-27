import desktopIllustration from '@/src/assets/images/illustration-sign-up-desktop.svg'
import mobileIllustration from '@/src/assets/images/illustration-sign-up-mobile.svg'
import { SignUp } from './features/signup'
import { useContext, useEffect, useState } from 'react'
import { ConfirmingEmail } from './features/confirming-email'
import { Confirmation } from './features/confirmation'
import { EmailContext } from './context/EmailContext'

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
      <main className="bg-white min-h-screen pb-6 md:min-h-0 md:p-6 md:rounded-card-tablet md:w-3/4 md:max-w-desktop md:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:rounded-card-desktop">
        <picture>
          <source srcSet={desktopIllustration} media="(min-width: 1024px)" />
          <img
            src={mobileIllustration}
            alt="sign up"
            decoding="async"
            className="w-full md:rounded-card-tablet lg:rounded-none lg:max-w-desktop-image lg:justify-self-end ml-auto"
          ></img>
        </picture>
        <div className="px-6 mt-8 lg:order-first lg:mt-3 xl:p-0 xl:pl-10 xl:mt-14">
          <h1 className="text-navy-dark text-4xl font-bold font-roboto xl:text-title-desktop">
            Stay updated!
          </h1>
          <p className="mt-3">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list-image-checkmark pl-7 mt-6 space-y-1.5 marker:border-x-2 list-outside">
            <li>
              <p className="-translate-y-1 ml-2">
                Product discovery and building what matters
              </p>
            </li>
            <li>
              <p className="-translate-y-1 ml-2">
                Measuring to ensure updates are a success
              </p>
            </li>
            <li>
              <p className="-translate-y-1 ml-2">And much more</p>
            </li>
          </ul>
          <SignUp submitEmail={setConfirmingEmail} />
        </div>
      </main>
    </>
  )
}

export default App
