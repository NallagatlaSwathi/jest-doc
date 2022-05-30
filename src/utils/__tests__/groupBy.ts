import {groupBy} from '../groupBy'

test('should group an array of object', () => {
  const products: Product[] = [
    {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
    {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
  ]

  expect(groupBy(products, 'category')).toMatchInlineSnapshot(`
    Object {
      "Fruits": Array [
        Object {
          "category": "Fruits",
          "name": "Apple",
          "price": "$1",
          "stocked": true,
        },
        Object {
          "category": "Fruits",
          "name": "Dragonfruit",
          "price": "$1",
          "stocked": true,
        },
        Object {
          "category": "Fruits",
          "name": "Passionfruit",
          "price": "$2",
          "stocked": false,
        },
      ],
      "Vegetables": Array [
        Object {
          "category": "Vegetables",
          "name": "Spinach",
          "price": "$2",
          "stocked": true,
        },
        Object {
          "category": "Vegetables",
          "name": "Pumpkin",
          "price": "$4",
          "stocked": false,
        },
        Object {
          "category": "Vegetables",
          "name": "Peas",
          "price": "$1",
          "stocked": true,
        },
      ],
    }
  `)
})
