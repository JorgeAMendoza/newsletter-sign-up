import { ReactNode, createContext, useState } from 'react'

interface EmailContextProps {
  children: ReactNode
}

export const EmailContext = createContext('')
export const ActionContext = createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null)

export const EmailProvider = ({ children }: EmailContextProps) => {
  const [email, dispatch] = useState('')

  return (
    <ActionContext.Provider value={dispatch}>
      <EmailContext.Provider value={email}>{children}</EmailContext.Provider>
    </ActionContext.Provider>
  )
}
