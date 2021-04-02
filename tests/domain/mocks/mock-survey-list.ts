
import { LoadSurveyList } from '@/domain/usecases'

import faker from 'faker'

export const mockSurveyModel = (): LoadSurveyList.Model => ({
  id: faker.random.uuid(),
  question: faker.random.words(),
  didAnswer: faker.random.boolean(),
  date: faker.date.recent()
})

export const mockSurveyListModel = (): LoadSurveyList.Model[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])
