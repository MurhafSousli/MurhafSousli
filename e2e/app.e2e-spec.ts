import { MurhafSousliPage } from './app.po';

describe('murhaf-sousli App', function() {
  let page: MurhafSousliPage;

  beforeEach(() => {
    page = new MurhafSousliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
