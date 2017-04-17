import { ContactInfoPage } from './app.po';

describe('contact-info App', () => {
  let page: ContactInfoPage;

  beforeEach(() => {
    page = new ContactInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
