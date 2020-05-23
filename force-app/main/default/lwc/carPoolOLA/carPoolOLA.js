import { LightningElement,track } from 'lwc';
import carSave from '@salesforce/apex/carPoolOLA.newCar';

export default class CarPoolOLA extends LightningElement {

    isShow=false;
    ola;
    driverName;
    carNumber;
    carType;
    @track selectedOption;
    showPop(event){
        if(!event.target.value){
            alert('Select a type');
            return;}
        else{
            this.isShow=true;
        }
        //this.ola = event.target.value;
        //alert(this.ola);
        //$("#cartype option[value='OLA Micro']").attr("selected","selected");
        //console.log("Function call");
        //document.getElementById('cartype').value="OLA Micro";
        //alert(this.ola);
    }

    saveType(event){
        
        //const field = event.target.name;
            this.selectedOption = event.target.value;
            //alert('Changed'+this.selectedOption);
            //var element = document.querySelector("[id$='cartype']");
            //element.value= "OLA Micro";
            
            //alert("you have "+this.selectedOption);
    }

    driname(event){
        this.driverName = event.target.value;
        //alert("name "+this.driverName);
    }

    carno(event){
        this.carNumber = event.target.value;
        //alert("Number "+this.carNumber);
    }
    closePop(){
        this.isShow=false;
    }

    saveCar(component){
        //alert("Values are "+this.selectedOption+' '+this.ola);
       //carSave({dname:this.driverName,cno:this.carNumber,ctype:this.selectedOption,rtype:this.ola});
       //component.find("carForm").submit();
       alert('New User Added...!');
       this.isShow= false;
       //alert('Saved');
    }

    // showSuccessToast (component, event) {
    //     //var toastEvent = $A.get("e.force:showToast");
    //     const toastEvent = new ShowToastEvent({"title": "Success!",
    //     "message": "Record {0} created! See it {1}!",
    //     "messageData": [
    //         'Salesforce',
    //         {
    //             url: 'http://www.salesforce.com/',
    //             label: 'here'
    //         }
    //     ]
    // });
    // this.dispatchEvent(toastEvent);
    //     alert('New User Added...!');
    //     this.isShow= false;
    // }
}