import { RecipeListPage } from './app.po';

describe('recipe-list App', () => {
  let page: RecipeListPage;

  beforeEach(() => {
    page = new RecipeListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
