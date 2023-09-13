import checkmark from '@/src/assets/images/icon-success.svg'

export const Confirmation = () => {
  return (
    <main>
      <img src={checkmark} alt=""></img>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription
      </p>

      <button type="button">Dismiss message</button>
    </main>
  )
}
