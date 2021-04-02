import { RemoteLoadSurveyList } from '@/data/usecases'

import faker from 'faker'

export const mockRemoteSurveyModel = (): RemoteLoadSurveyList.Model => ({
  id: faker.random.uuid(),
  question: faker.random.words(),
  didAnswer: faker.random.boolean(),
  date: faker.date.recent().toISOString()
})

export const mockRemoteSurveyListModel = (): RemoteLoadSurveyList.Model[] => ([
  mockRemoteSurveyModel(),
  mockRemoteSurveyModel(),
  mockRemoteSurveyModel()
])
