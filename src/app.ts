import fetch from 'node-fetch'
import {server} from './mocks/server'
import {map} from './utils'

if (process.env.NODE_ENV === 'development') {
  server.listen()
}

export const fetchName = async () => {
  const response = await fetch('https://www.google.com/user')
  const {name} = await response.json()

  return name
}
