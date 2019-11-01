import { getGreeting } from '../support/app.po';

describe('ng-atlanta', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ng-atlanta!');
  });
});
