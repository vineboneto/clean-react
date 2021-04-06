import { LoadSurveyResult, SaveSurveyResult } from '@/domain/usecases'

import faker from 'faker'

export const mockSurveyResultModel = (): LoadSurveyResult.Model => ({
  question: faker.random.words(),
  date: faker.date.recent(),
  answers: [
    {
      answer: faker.random.words(),
      count: faker.datatype.number(),
      percent: faker.datatype.number(),
      isCurrentAccountAnswer: true,
      image: faker.internet.url()
    },
    {
      answer: faker.random.words(),
      count: faker.datatype.number(),
      percent: faker.datatype.number(),
      isCurrentAccountAnswer: false
    }
  ]
})

export const mockSaveSurveyResultParams = (): SaveSurveyResult.Params => ({
  answer: faker.random.words(10)
})

export class LoadSurveyResultSpy implements LoadSurveyResult {
  callsCount = 0
  surveyResult = mockSurveyResultModel()
  async load (): Promise<LoadSurveyResult.Model> {
    this.callsCount++
    return this.surveyResult
  }
}

export class SaveSurveyResultSpy implements SaveSurveyResult {
  params: SaveSurveyResult.Params
  surveyResult = mockSurveyResultModel()
  async save (params: SaveSurveyResult.Params): Promise<SaveSurveyResult.Model> {
    this.params = params
    return this.surveyResult
  }
}
