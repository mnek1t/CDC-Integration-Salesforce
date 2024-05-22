import { LightningElement, api } from 'lwc';
const URL = 'https://react-gigya-assistant.cfapps.us10-001.hana.ondemand.com/account-details?contactId=';

export default class CdcIntegration extends LightningElement {
    @api recordId;
    
    connectedCallback(){
        console.log('recordId', this.recordId);
    }

    get completeUrlString(){
        console.log(URL + this.recordId);
        return URL + this.recordId;
    }
}