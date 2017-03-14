import { HomeWorkCalendarPage } from './app.po';

describe('home-work-calendar App', () => {
  let page: HomeWorkCalendarPage;

  beforeEach(() => {
    page = new HomeWorkCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
