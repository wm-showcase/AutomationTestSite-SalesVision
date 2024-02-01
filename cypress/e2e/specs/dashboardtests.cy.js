/// <reference types="cypress" />
import dashboardpagelocators from "../locators/dashboardpage"
import loginPage from "../Pages/login"
describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://salesvision.onwavemaker.com/#/Login?persona=salesHead')
    loginPage.loginToAccount('sally.jones','test@123')
  })

  it.only('verifyTheWelcomeLabelOnDashboard', () => {
    dashboardpagelocators.getDashboardWelcomeLabel().should('have.text','Welcome! Sally Jones')
  })

  
  it.only('verifyTheDashboardHeading ', () => {
    dashboardpagelocators.getDashboard().should('have.text','Dashboard')
  })


})
