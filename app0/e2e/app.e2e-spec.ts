import { App0Page } from './app.po';

describe('app0 App', () => {
  let page: App0Page;

  beforeEach(() => {
    page = new App0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
