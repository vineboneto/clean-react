import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/components/contexts/form/form-content'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const inputRef = useRef<HTMLInputElement>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setState({ ...state, [e.target.name]: e.target.value })

  return (
    <div className={Styles.inputWrap}>
      <input
        { ...props }
        ref={inputRef}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={handleChange}
      />
      <label onClick={() => { inputRef.current.focus() }}>
        {props.placeholder}
      </label>
      <span
        data-testid={`${props.name}-status`}
        title={error || 'Tudo Certo!'}
        className={Styles.status}
      >
        {error ? '🔴' : '🟢'}
      </span>
    </div>
  )
}

export default Input
