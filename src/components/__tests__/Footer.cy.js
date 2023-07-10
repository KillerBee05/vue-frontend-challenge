import Footer from '@/components/Footer.vue';
import { mount } from '@cypress/vue';

describe('Footer Component', () => {
  it('displays the footer text correctly', () => {
    mount(Footer);

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
