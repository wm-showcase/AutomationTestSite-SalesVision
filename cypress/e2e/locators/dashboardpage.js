class dashboardpage{

    getDashboardWelcomeLabel(){
        return cy.get("label[name='WelcomeLabel']")
    
    }

    getDashboard(){
        return cy.get("label[name='welcomeLable']")
    }

    getLoginButton(){
        return cy.get("button[name='loginButton']")
    }

    getTeamView(){
        return cy.get("a[name='wm-switch-Team View']")
    }

    getTopPerformersLabel(){
        return cy.get("div.panel-title").eq(1)
    }

    getGloalsTitle(){
        return cy.get("div[title='Goals']")
    }

    getYourViewsOverviewTitle(){
        return cy.get("div[title='Your Leads Overview']")
    }

    getTopLeadsRecords(){
        return cy.get("div[name='leadsPanel'] tbody>tr")
    }

   
}

const dashboardpagelocators= new dashboardpage()
    export default dashboardpagelocators