import React from 'react'
import { render } from '@testing-library/react'
import { Input } from '@/presentation/components'
import Context from '@/presentation/components/contexts/form/form-content'

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const { getByTestId } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name="field" />
      </Context.Provider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
