import { mount } from '@cypress/vue';
import AcademicFitReport from '../AcademicFitReport.vue';

describe('<AcademicFitReport />', () => {
  it('renders', () => {
    // Mock athlete data
    const athlete = {
      gpa: 3.75,
      report: [
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
      ],
      name: 'Maria Carter',
      sport: 'Volleyball',
      grad_year: '2023',
      club: {
        name: 'Club Name',
      },
      high_school: {
        name: 'High School Name',
      },
      major: 'Computer Science',
    };

    mount(AcademicFitReport, {
      props: {
        athlete,
      },
    });

    // Header component assertions
    cy.contains('h2', athlete.name).should('be.visible');
    cy.get('ul li[data-testid="sport"]').should('contain', athlete.sport);
    cy.get('ul li[data-testid="class"]').should('contain', athlete.grad_year);
    cy.get('ul li[data-testid="club"]').should('contain', athlete.club.name);
    cy.get('ul li[data-testid="high-school"]').should('contain', athlete.high_school.name);
    cy.get('ul li[data-testid="gpa"]').should('contain', athlete.gpa);
    cy.get('ul li[data-testid="desired-major"]').should('contain', athlete.major);

    // Table component assertions
    cy.get('tbody tr').should('have.length', athlete.report.length);
    athlete.report.forEach((item, index) => {
      cy.get('tbody tr').eq(index).should('contain', item.school);
      cy.get('tbody tr').eq(index).should('contain', item.division);
      cy.get('tbody tr').eq(index).should('contain', item.conference);
      cy.get('tbody tr').eq(index).should('contain', item.ranking);
    });

    // Footer component assertions
    cy.get('footer').should('be.visible');
    cy.get('footer p').should(
      'contain',
      '*Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are based on data from Hero Sports (www.herosports.com/rankings)',
    );
    cy.get('footer p').should(
      'contain',
      '** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their GPA on their profile',
    );
    cy.get('footer p').should(
      'contain',
      '***SAT and ACT scores based on national data provided by the National Center of Education Statistics- https://nces.ed.gov/ipeds/',
    );
  });
});
