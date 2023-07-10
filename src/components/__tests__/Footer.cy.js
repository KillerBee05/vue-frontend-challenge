import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer Component', () => {
  it('displays the footer text correctly', () => {
    const wrapper = mount(Footer);

    expect(wrapper.find('footer').exists()).to.be.true;
    expect(wrapper.text()).to.contain('*Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are based on data from Hero Sports (www.herosports.com/rankings)');
    expect(wrapper.text()).to.contain('** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their GPA on their profile');
    expect(wrapper.text()).to.contain('***SAT and ACT scores based on national data provided by the National Center of Education Statistics-');
    expect(wrapper.text()).to.contain('https://nces.ed.gov/ipeds/');
  });
});
