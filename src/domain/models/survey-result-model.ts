export type SurveyResultModel = {
  question: string
  date: Date
  answers: AnswerModel[]
}

export type AnswerModel = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: boolean
}
