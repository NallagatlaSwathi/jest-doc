import {fetchName} from './../app'

test('should get name', async () => {
  const name = await fetchName()

  expect(name).toBe('Vishal')
})
