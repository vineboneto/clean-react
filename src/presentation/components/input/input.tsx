import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import { FormContext } from '@/presentation/contexts'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(FormContext)
  const error = state[`${props.name}Error`]
  const inputRef = useRef<HTMLInputElement>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setState({ ...state, [e.target.name]: e.target.value })

  return (
    <div
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
      data-testid={`${props.name}-wrap`}
    >
      <input
        { ...props }
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={handleChange}
        autoComplete="off"
      />
      <label
        data-testid={`${props.name}-label`}
        onClick={() => { inputRef.current.focus() }}
        title={error}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
