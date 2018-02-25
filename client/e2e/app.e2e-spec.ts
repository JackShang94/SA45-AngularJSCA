import { AppPage } from './app.po';

describe('ca App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('show welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to CA app!');
  });
});
