import { FreezedryDemoAppPage } from './app.po';

describe('freezedry-demo-app App', () => {
  let page: FreezedryDemoAppPage;

  beforeEach(() => {
    page = new FreezedryDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
