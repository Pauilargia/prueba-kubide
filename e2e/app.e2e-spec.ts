import { PruebaKubidePage } from './app.po';

describe('prueba-kubide App', () => {
  let page: PruebaKubidePage;

  beforeEach(() => {
    page = new PruebaKubidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
