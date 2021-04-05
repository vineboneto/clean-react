import Styles from './survey-result-styles.scss'
import { useErrorHandler } from '@/presentation/hooks'
import { Footer, Header, Loading, Calendar, Error } from '@/presentation/components'
import { LoadSurveyResult } from '@/domain/usecases'

import FlipMove from 'react-flip-move'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState(old => ({ ...old, surveyResult: null, error: error.message }))
  })
  const { goBack } = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model,
    reload: false
  })

  const reload = (): void => {
    setState(old => ({ isLoading: false, surveyResult: null, error: '', reload: !old.reload }))
  }

  useEffect(() => {
    loadSurveyResult.load()
      .then(surveyResult => setState(old => ({ ...old, surveyResult })))
      .catch(error => handleError(error))
  }, [state.reload])

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div data-testid="survey-result" className={Styles.contentWrap}>
        {state.surveyResult &&
          <>
            <hgroup>
              <Calendar date={state.surveyResult.date} className={Styles.calendarWrap} />
              <h2 data-testid="question">{state.surveyResult.question}</h2>
            </hgroup>
            <FlipMove data-testid="answers" className={Styles.answersList}>
              {state.surveyResult.answers.map(answer =>
                <li data-testid="answer-wrap" key={answer.answer} className={answer.isCurrentAccountAnswer ? Styles.active : ''}>
                  {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
                  <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
                  <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
                </li>
              )}
            </FlipMove>
            <button data-testid="back-button" onClick={goBack}>Voltar</button>
          </>
        }
        { state.isLoading && <Loading />}
        { state.error && <Error error={state.error} reload={reload} />}
      </div>

      <Footer />
    </div>
  )
}

export default SurveyResult
