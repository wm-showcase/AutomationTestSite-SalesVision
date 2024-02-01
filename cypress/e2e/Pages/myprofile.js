import myprofilelocators from "../locators/myprofilepage"
class myprofile{



    clickonMyProfileicon(){
        myprofilelocators.getMyProfileIcon().click()
    }

    clickonMyProfileButton(){
        myprofilelocators.getMyProfileButton().click()
    }


}
const myprofilepage= new login()
    export default myprofilepage









