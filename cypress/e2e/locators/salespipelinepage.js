class salespipelinepage{

    getSalesPipeLineLabel(){
        return cy.get("label[name='SalesPipelineslabel']")
    
    }

    getSearchBox(){
        return cy.get("input[placeholder='Search by customer Name']")
    }

    getSelectDropdown(){
        return cy.get("select[name='wm-datatable']")
    }

    

   
}

const salespipelinepagelocators= new salespipelinepage()
    export default salespipelinepagelocators