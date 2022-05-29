import {rest, RestHandler} from 'msw'

export const handlers: RestHandler[] = [
  rest.get('https://www.google.com/user', (req, res, ctx) => {
    return res(ctx.json({name: 'Vishal'}))
  }),
]
