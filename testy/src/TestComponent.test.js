import React from 'react'
import TestComponent from './TestComponent'
import renderer from 'react-test-renderer'

test('TestComponent renders as expected', () => {
    const showNameComponent = renderer
        .create(<TestComponent name="Mateusz" />)
        .toJSON()
    expect(showNameComponent).toMatchSnapshot()
})