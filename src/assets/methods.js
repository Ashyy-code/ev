//reference to Axios for httprequests
import axios from "axios";

//the url of the webservice
const endpointURL = 'https://ashypls.com/eventsbooking/data/';

//make public
export default ({


    //async httprequest with no parameters
    async reqNP(endpointName) {
        let requestPend = await axios.post(endpointURL + endpointName, {
            contentType: 'applicatoin/json'
        });
        return requestPend;
    },

    //async httprequest with one parameter
    async reqOP(endpointName, paramOneName, paramOneValue) {
        let requestPend = await axios.post(endpointURL + endpointName, {
            contentType: 'application/json',
            [paramOneName]: paramOneValue
        });
        return requestPend;
    },

    //async httprequest with two parameters
    async repTP(endpointName, paramOneName, paramOneValue, paramTwoName, paramTwoValue) {
        let requestPend = await axios.post(endpointURL + endpointName, {
            contentType: 'application/json',
            [paramOneName]: paramOneValue,
            [paramTwoName]: paramTwoValue
        });
        return requestPend;
    },

    //async httprequest with multiple parameters
    async reqMT(endpointName, paramList) {
        // paramList.push('contentType:appliction/json');
        const data = { ...paramList, 'content-type': 'application/json' };
        let requestPend = await axios.post(endpointURL + endpointName,data);
        return requestPend;
    }


})