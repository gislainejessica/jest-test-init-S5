import React from 'react'
import { render , fireEvent } from '@testing-library/react'
import TechList from '~/components/TechList'
import '@testing-library/jest-dom/extend-expect'

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText , getByTestId, getByLabelText } = render(<TechList/>)

    fireEvent.change(getByLabelText('Tech'), {target: { value: "NodeJs"}})
    fireEvent.submit(getByTestId('tech-form'))

    expect(getByTestId('tech-list')).toContainElement(getByText('NodeJs'))
    expect(getByLabelText('Tech')).toHaveValue('')
  } )
})