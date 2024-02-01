class myteam{

    getMyTeamLeftNavOption(){
        return cy.get("a[name='myTeamLink']")
    
    }

    getMyTeamHeading(){
        return cy.get("label[name='Teamview1']")
    }

    getEmployeeSearchBox(){
        return cy.get("input[name='search_employee']")
    }
    
    getTotalRepresentativeLabel(){
        return cy.get("label[name='totalRepsTitle']")
    }

    gettotalRepresentativeValue(){
        return cy.get("label[name='totalRepsValue']")
    }
    
    getTotalLeadsLabel(){
        return cy.get("label[name='totalLeadsTitle']")
    }

    getTotalTeamLeadsLabel(){
        return cy.get("label[name='totalTeamAwardsTitle']")
    }

   
}

const myteamlocators= new myteam()
    export default myteamlocators