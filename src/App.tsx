import desktopIllustration from '@/src/assets/images/illustration-sign-up-desktop.svg'
import mobileIllustration from '@/src/assets/images/illustration-sign-up-mobile.svg'
import { SignUp } from './features/signup'

console.log(desktopIllustration)

function App() {
  return (
    <>
      <main>
        <div>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more</li>
          </ul>
          <SignUp />
        </div>

        <picture>
          <source srcSet={desktopIllustration} media="(min-width: 768px)" />
          <img src={mobileIllustration} alt="sign up" decoding="async"></img>
        </picture>
      </main>
    </>
  )
}

export default App
