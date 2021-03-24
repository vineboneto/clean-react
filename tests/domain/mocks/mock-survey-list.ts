import { SurveyModel } from '@/domain/models'

import faker from 'faker'

export const mockSurveyListModel = (): SurveyModel[] => ([
  {
    id: faker.random.uuid(),
    question: faker.random.words(),
    answers: [
      {
        answer: faker.random.words(),
        image: faker.internet.url()
      },
      {
        answer: faker.random.words()
      }
    ],
    didAnswer: faker.random.boolean(),
    date: faker.date.recent()
  }
])
