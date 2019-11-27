import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
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

  it('should store tech in storage', () => {
    let { getByText , getByTestId, getByLabelText } = render(<TechList/>)

    fireEvent.change(getByLabelText('Tech'), {target: { value: "NodeJs"}})
    fireEvent.submit(getByTestId('tech-form'))

    cleanup()

    ({ getByText , getByTestId, getByLabelText } = render(<TechList/>))
    expect(getByTestId('tech-list')).toContainElement(getByText('NodeJs'))

  })
})