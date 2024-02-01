class loginpage{

    getUserNameTextbox(){
        return cy.get("input[name='j_username']")
    
    }

    getPasswordTextbox(){
        return cy.get("input[name='j_password']")
    }

    getLoginButton(){
        return cy.get("button[name='loginButton']")
    }

    getRememberCheckbox(){
        return cy.get("input[name='j_rememberme']")
    }
    getLogoutButton(){
        return cy.get("a[name='anchor2']")
    }

    getUserLoginLabel(){
        return cy.get("label[name='label1']")
    }
    
   
}

const loginpagelocators= new loginpage()
    export default loginpagelocators