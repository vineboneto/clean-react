import React, { MouseEvent, useContext } from 'react'
import Styles from './answer-styles.scss'
import { AnswerModel } from '@/domain/models'
import { SurveyResultContext } from '@/presentation/pages/survey-result/components'

type Props = {
  answer: AnswerModel
}

const Answer: React.FC<Props> = ({ answer }: Props) => {
  const { onAnswer } = useContext(SurveyResultContext)
  const activeClassName = answer.isCurrentAccountAnswer ? Styles.active : ''
  const answerClick = (e: MouseEvent): void => {
    if (e.currentTarget.classList.contains(Styles.active)) {
      return
    }
    onAnswer(answer.answer)
  }

  return (
    <li
      data-testid="answer-wrap"
      className={[activeClassName, Styles.answerWrap].join(' ')}
      onClick={answerClick}
    >
      {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
      <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
      <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
    </li>
  )
}

export default Answer
