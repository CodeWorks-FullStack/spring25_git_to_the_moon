import { reactive } from 'vue'
import ClickUpgrades from './components/ClickUpgrades.vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 0,
  ClickUpgrades: [
    { name: '🔪', power: 1, price: 5, quantity: 0 },
    { name: '🪛', power: 5, price: 25, quantity: 0 }
  ]
})

