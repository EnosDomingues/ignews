import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { SigninButton } from '.'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('reders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SigninButton />)

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })
  
  it('reders correctly when user are authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      { user: {name: 'John Doe', email: 'johndoe@email.com', image: ''}, expires: '' },
      false
    ])

    render(<SigninButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

})