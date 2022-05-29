import {filter} from '../filter'

test('should map an array', () => {
  const tasks: Task[] = [
    {
      name: 'Shopping',
      completed: false,
    },
    {
      name: 'Cooking',
      completed: true,
    },
    {
      name: 'Laundary',
      completed: false,
    },
  ]

  expect(filter(tasks, task => !task.completed)).toMatchInlineSnapshot(`
    Array [
      Object {
        "completed": false,
        "name": "Shopping",
      },
      Object {
        "completed": false,
        "name": "Laundary",
      },
    ]
  `)
})
