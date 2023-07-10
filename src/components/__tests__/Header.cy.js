import Header from '../Header.vue';
import { mount } from '@cypress/vue';

describe('Header', () => {
  it('renders correctly', () => {
    // Mock athlete data
    const athlete = {
      name: 'John Doe',
      sport: 'Football',
      grad_year: '2022',
      club: {
        name: 'Club Name',
      },
      high_school: {
        name: 'High School Name',
      },
      gpa: 3.75,
      major: 'Computer Science',
      profile_image: 'path/to/profile_image.jpg',
    };

    mount(Header, {
      propsData: {
        athlete,
      },
    });

    cy.contains('h2', athlete.name).should('be.visible');

    cy.get('[data-testid="sport"]').should('contain', 'Sport:');
    cy.get('[data-testid="sport"]').should('contain', athlete.sport);

    cy.get('[data-testid="class"]').should('contain', 'Class:');
    cy.get('[data-testid="class"]').should('contain', athlete.grad_year);

    cy.get('[data-testid="club"]').should('contain', 'Club:');
    cy.get('[data-testid="club"]').should('contain', athlete.club.name);

    cy.get('[data-testid="high-school"]').should('contain', 'High School:');
    cy.get('[data-testid="high-school"]').should('contain', athlete.high_school.name);

    cy.get('[data-testid="gpa"]').should('contain', 'GPA:');
    cy.get('[data-testid="gpa"]').should('contain', athlete.gpa);

    cy.get('[data-testid="desired-major"]').should('contain', 'Desired Major:');
    cy.get('[data-testid="desired-major"]').should('contain', athlete.major);

    cy.get('img').should('have.attr', 'src', athlete.profile_image);
  });
});
