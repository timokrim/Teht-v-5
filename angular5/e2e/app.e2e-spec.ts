import { Week3l5Page } from './app.po';

describe('week3l5 App', function() {
  let page: Week3l5Page;

  beforeEach(() => {
    page = new Week3l5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
