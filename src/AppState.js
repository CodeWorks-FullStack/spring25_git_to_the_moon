import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 0,
  autoUpgrades: [
    {
      name: 'Mousetronaut',
      price: 20,
      power: 10,
      quantity: 0
    },
    {
      name: 'Space Station',
      price: 100,
      power: 25,
      quantity: 0
    },
  ],
  ClickUpgrades: [
    { name: '🔪', power: 1, price: 5, quantity: 0 },
    { name: '🪛', power: 5, price: 25, quantity: 0 }
  ]
})

