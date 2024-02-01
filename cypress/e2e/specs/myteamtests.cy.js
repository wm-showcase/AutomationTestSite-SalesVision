
import loginPage from "../Pages/login"
import myteamlocators from "../locators/myteam"
describe('My Team tests', () => {
  beforeEach(() => {
    cy.visit('https://salesvision.onwavemaker.com/#/Login?persona=salesHead')
    loginPage.loginToAccount('sally.jones','test@123')
  })

  it.only('verifyTotalRepresentatives', () => {
    myteamlocators.getTotalRepresentativeLabel().should('have.text','Total Representatives')
    let getText
    myteamlocators.gettotalRepresentativeValue().then(($value) => {
      getText = $value.text()
      expect(getText).to.eq('Apple iPhone 14');  
  })
   
  })

  
  
  it.only('verifyTotalLeads', () => {
    myteamlocators.getTotalLeadsLabel().should('have.text','Total Leads')
    let getLeadValue
    myteamlocators.gettotalRepresentativeValue().then(($value) => {
      getLeadValue = $value.text()
      expect(getText).to.eq('Apple iPhone 14');  
  })
   
  })


})
