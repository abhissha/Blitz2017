import { CroweDemoPage } from './app.po';

describe('crowe-demo App', () => {
  let page: CroweDemoPage;

  beforeEach(() => {
    page = new CroweDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
