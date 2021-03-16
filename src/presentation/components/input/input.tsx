import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/components/contexts/form/form-content'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getTitle = (): string => {
    const error = state[`${props.name}Error`]
    return error
  }

  const getStatus = (): string => {
    return '🔴'
  }

  return (
    <div className={Styles.inputWrap}>
      <input data-testid={props.name} { ...props } readOnly onFocus={enableInput} onChange={handleChange} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
