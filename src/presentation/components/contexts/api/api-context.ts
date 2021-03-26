import { UpdateCurrentAccount } from '@/domain/usecases'
import { createContext } from 'react'

type Props = {
  updateCurrentAccount (account: UpdateCurrentAccount.Params): void
}

export default createContext<Props>(null)
