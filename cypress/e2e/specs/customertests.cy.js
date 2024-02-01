
import loginPage from "../Pages/login"
import customerpagelocators from "../locators/customerspage"
describe('example to-do app', () => {
let userdata;
    beforeEach(() => {  
    cy.visit('https://salesvision.onwavemaker.com/#/Login?persona=salesHead')
    cy.fixture('testdata').then(function (data) {
        userdata = data;
    })
    loginPage.loginToAccount('sally.jones','test@123')
  })


  
  it.only('verifyTheExistingCustomersHeading', () => {
    customerpagelocators.getCustomerOptionLeftNav().click()
    customerpagelocators.getExistingCustomersHeading().should('have.text','Existing Customers')
  })

  it('verifyTheUpcomingPolicyuRenewalsLabel', () => {
    customerpagelocators.getCustomerOptionLeftNav().click()
    customerpagelocators.getUpcomingPolicyRenewalsHeading().should('have.text','Upcoming Policy Renewals')
  })

  it('VerifyProductsDropdownOptions',async () =>{
    customerpagelocators.getCustomerOptionLeftNav().click()
    customerpagelocators.getProductDropdown().click()
    cy.wait(2000)
    customerpagelocators.getProductsDropdownOptions().each(($el, index) => {
    expect($el).to.contain(userdata.myAccountDropdownOptions[index])
})
})

  const testData = [
    {
        name: 'David Oakes',
        dropdownValue: 'Customer'
    },

    {
      name: 'CNA Ins Cos',
      dropdownValue: 'Company Name'
    },
    {
    name: '$15,000',
    dropdownValue: 'Deal Size'
    }
]
  testData.forEach((customerData, index) => {
  it.only('verifyUserIsAbleToSearchByCustomerDealStageDealSize', () => {
    customerpagelocators.getCustomerOptionLeftNav().click()
    cy.wait(4000)
    customerpagelocators.getCustomerSearch().click().type(customerData.name)
    customerpagelocators.getSelectFieldDropdown().select(customerData.dropdownValue)
    customerpagelocators.getCustomerSearch().clear().type(customerData.name+'{enter}')
    cy.wait(2000)
    var getText
    customerpagelocators.getTableColumn().eq(index).then(($value) => {
      getText = $value.text()
  })
    if(customerData.name==getText){
    customerpagelocators.getTableColumn().eq(index).should('have.text','David Oakes')
    }
    else if(customerData.name==getText){
    customerpagelocators.getTableColumn().eq(index).should('have.text','CNA Ins Cos')
    }
    else if(customerData.name==getText) {
    customerpagelocators.getTableColumn().eq(index).should('have.text','$15,000')
    }
    else
    {
     cy.log("test")
    }
    })
    })


    const product = [
        {
            dropdownValue: 'Car Insurance'
        },
    
        {
          dropdownValue: 'Health Secure'
        }
    ]
    testData.forEach((data) => {
    it.only('verifyUserIsAbleToSelectTheProducts', () => {
        customerpagelocators.getCustomerOptionLeftNav().click()
        cy.wait(4000)
        customerpagelocators.getProductDropdown().select(data.dropdownValue)
        var getText;
        customerpagelocators.getProductsNameColumnTableData().eq(1).then(($value) => {
            getText = $value.text()
        })
        if(data.dropdownValue==getText){
         customerpagelocators.getProductsTableData().its('length').then(len=>{
         expect(len).to.eq(3);
             })
        customerpagelocators.getProductsNameColumnTableData().eq(1).should('have.text','Car Insurance')
        }
        else if(data.dropdownValue==getText){
            customerpagelocators.getProductsTableData().its('length').then(len=>{
                expect(len).to.eq(1);
                    })
            customerpagelocators.getProductsNameColumnTableData().eq(1).should('have.text','Health Secure')
        }
    })


    })





})
