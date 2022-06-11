import { render } from '@testing-library/react'
import IndexPage from '../pages/index'

it('renders IndexPage', () => {
  const { container } = render(<IndexPage />)
  expect(container).toMatchSnapshot()
})