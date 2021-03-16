import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/components/contexts/form/form-content'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getTitle = (): string => {
    const error = errorState[props.name]
    return error
  }

  const getStatus = (): string => {
    return '🔴'
  }

  return (
    <div className={Styles.inputWrap}>
      <input { ...props } readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
