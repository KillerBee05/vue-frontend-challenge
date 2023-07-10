import Table from './Table.vue'

describe('<Table />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Table)
  })
})