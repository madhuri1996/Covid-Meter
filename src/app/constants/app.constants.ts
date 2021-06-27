let baseUrl;
if(window.location.origin == "http://localhost:4200")
    baseUrl = 'http://20.198.94.180:80';
export class Apis {
    
    static readonly devUrl = baseUrl;
    
    // login apis
    static readonly signin = '/api/User/SignIn';
    static readonly signup = '/api/User/SignUp';

    // patient apis
    static readonly getPatients = '/api/Patient/GetPatients';
    static readonly addPatient = '/api/Patient/AddPatient';
}