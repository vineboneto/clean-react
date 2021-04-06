import React from 'react'
import Styles from './answer-styles.scss'
import { AnswerModel } from '@/domain/models'

type Props = {
  answer: AnswerModel
}

const Answer: React.FC<Props> = ({ answer }: Props) => {
  const activeClassName = answer.isCurrentAccountAnswer ? Styles.active : ''
  return (
    <li data-testid="answer-wrap" className={[activeClassName, Styles.answerWrap].join(' ')}>
      {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
      <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
      <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
    </li>
  )
}

export default Answer
