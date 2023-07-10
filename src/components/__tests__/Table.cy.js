import Table from '../Table.vue';
import Row from '../Row.vue';
import { mount } from '@cypress/vue';

describe('<Table />', () => {
  beforeEach(() => {
    const report = [
      {
        school: 'California State University, Northridge',
        division: 'III',
        conference: 'Big West Conference',
        ranking: 151,
        gpa: {
          min: 2.7,
          '25%': 3.28,
          '50%': 3.52,
          '75%': 3.8,
          max: 4.0,
        },
        sat: {
          reading: { min: 400, max: 510 },
          math: { min: 400, max: 530 },
        },
        act: { min: 16, max: 22 },
      },
    ];

    const playerGpa = 3.75;


    mount(Table, {
      propsData: {
        report,
        playerGpa,
      },
      global: {
        components: {
          Row,
        },
      },
    });
  });

  it('renders correctly', () => {
    cy.contains('th', 'School Name').should('be.visible');
    cy.contains('th', 'Athletic Div').should('be.visible');
    cy.contains('th', 'Conference').should('be.visible');
    cy.contains('th', 'Ranking').should('be.visible');
    cy.contains('th', 'GPA').should('be.visible');
    cy.contains('th', 'SAT Reading').should('be.visible');
    cy.contains('th', 'SAT Math').should('be.visible');
    cy.contains('th', 'ACT Composite').should('be.visible');

    cy.get('tbody tr').should('have.length', 1);
    cy.get('tbody tr').eq(0).should('contain', 'California State University, Northridge');
    cy.get('tbody tr').eq(0).should('contain', 'III');
    cy.get('tbody tr').eq(0).should('contain', 'Big West Conference');
    cy.get('tbody tr').eq(0).should('contain', '151');

    cy.get('[data-testid="row"]').should('exist');
    
  });
});
