import {render, fireEvent, screen} from '@testing-library/react'
import {fetchData} from './App'

test('data fetched', () => {
  //render fetched data
  render(<fetchData/>)
})