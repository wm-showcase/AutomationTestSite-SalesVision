import loginpagelocators from "../locators/loginpage"
class login{



    loginToAccount(email,password){
   
        loginpagelocators.getUserNameTextbox()
        //.click().clear().type(email)
        loginpagelocators.getPasswordTextbox()
        //.click().clear().type(password)
        loginpagelocators.getLoginButton().click()
        cy.wait(3000)
    }

    clickOnRememberMeCheckbox(){
        for(let i=0;i<=1;i++){
        loginpagelocators.getRememberCheckbox().click().should('have.class','unchecked')
        }

    }

    logoutFromApplication(){
        loginpagelocators.getLogoutButton().click()
        loginpagelocators.getUserLoginLabel().should('have.text',"User Login")
    }


}
const loginPage= new login()
    export default loginPage









