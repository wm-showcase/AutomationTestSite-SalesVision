class myprofilepage{

    getMyProfileIcon(){
        return cy.get("a[name='popover1']")
    }

    getMyProfileButton(){
        return cy.get("a[name='anchor1']")
    }

    getProfileDetails(){
        return cy.get("div[name='layoutgrid7_1']>div>div label")
    
    }

    getOffiiceAddress(){
        return cy.get("label[name='officeAddressValue']")
    }

    getRepresentativeName(){
        return cy.get("label[name='repsName']")
    }

    getRepresentativeRole(){
        return cy.get("label[name='repsRole']")
    }

   
}

const myprofilelocators= new myprofilepage()
    export default myprofilelocators