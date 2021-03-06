import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeRemoteAddAccount } from '@/main/factories/usecases'
import { makeSignUpValidation } from '@/main/factories/pages'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
    />
  )
}
