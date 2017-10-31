import { NgSamplePage } from './app.po';

describe('ng-sample App', function() {
  let page: NgSamplePage;

  beforeEach(() => {
    page = new NgSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
