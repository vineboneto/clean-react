import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
}

const Spinner: React.FC<Props> = (props: Props) => {
  const negativeClass = props.isNegative ? Styles.negative : ''
  return (
    <div data-testid="spinner" className={[Styles.spinner, props.className, negativeClass].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
