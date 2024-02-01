/// <reference types="cypress" />
import dashboardpagelocators from "../locators/dashboardpage"
import salespipelinepagelocators from "../locators/salespipelinepage"
import loginPage from "../Pages/login"
describe('example to-do app', () => {
  beforeEach(() => {  
    cy.visit('https://salesvision.onwavemaker.com/#/Login?persona=salesHead')
    loginPage.loginToAccount('sally.jones','test@123')
  })

  const testData = [
    {
        name: 'Rodriquez',
        dropdownValue: 'Customer'
    },

    {
      name: 'Terms Negotiated',
      dropdownValue: 'Deal Stage'
  },
  {
    name: '$4,700',
    dropdownValue: 'Deal Size'
}

]
testData.forEach((salesData) => {

  it.only('verify user is able to search by customer Deal Stage Deal Size', () => {
    cy.contains("Sales Pipeline").click()
    cy.wait(4000)
    salespipelinepagelocators.getSearchBox().click().type(salesData.name)
    salespipelinepagelocators.getSelectDropdown().select(salesData.dropdownValue)
salespipelinepagelocators.getSearchBox().clear().type(salesData.name+'{enter}')
    cy.wait(2000)
    if(salesData.name=='Rodriquez'){
    cy.get("tr[class='app-datagrid-row '] td").eq(0).should('have.text','Rodriquez')
    }
    else if(salesData.name=='Terms Negotiated'){
    cy.get("tr[class='app-datagrid-row '] td").eq(1).should('have.text','Terms Negotiated')
    }
    else if(salesData.name=='$4,700') {
    cy.get("tr[class='app-datagrid-row '] td").eq(2).should('have.text','$4,700')
    }
    else
    {
     cy.log("test")
    }
    })
    })


})
