import { WorkoutTrackerPage } from './app.po';

describe('workout-tracker App', () => {
  let page: WorkoutTrackerPage;

  beforeEach(() => {
    page = new WorkoutTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
