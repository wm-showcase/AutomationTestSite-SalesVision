class customerpage{

    getCustomerOptionLeftNav(){
        return cy.get("a[name='customerLink']")
    
    }
    getExistingCustomersHeading(){
        return cy.get("label[name='Customerslabel']")
    
    }

    getUpcomingPolicyRenewalsHeading(){
        return cy.get("div.heading")
    
    }

    getCustomerSearch(){
        return cy.get("input[placeholder='Search']")
    }

    getSelectFieldDropdown(){
        return cy.get("select[name='wm-datatable']")
    }

    getTableColumn(){
        return cy.get("tr[class='app-datagrid-row '] >td")
    }

    getHeading(){
        return cy.get("label[name='Customerslabel']")
    }

    getProductsDropdownOptions(){
        return cy.get("select[name='products_formWidget']>option")
    }

    getProductDropdown(){
        return cy.get("select[name='products_formWidget']")
    }

    getProductsTableData(){
        return cy.get("table[class='table table-hover'] tbody tr")
    }

    getProductsNameColumnTableData(){
        return cy.get("table[class='table table-hover'] tbody tr>td")
    }

   
}
const customerpagelocators= new customerpage()
    export default customerpagelocators