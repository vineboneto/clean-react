import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication, makeLocalUpdateCurrentAccount } from '@/main/factories/usecases'
import { makeLoginValidation } from '@/main/factories/pages'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      updateCurrentAccount={makeLocalUpdateCurrentAccount()}
    />
  )
}
