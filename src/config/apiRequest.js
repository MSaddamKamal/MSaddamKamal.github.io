/**
 * A file for managing default configration of Axios and
 * defines Interceptors to intercept Request And Response
 * to carry out certain logic
 */

 import axios from "axios";

 function checkAuthTokenExclusion(arr, url) {
   return arr.indexOf(url) != -1;
 }
 
 /*exclusion array, add those url to this array for which you dont want to set token in header*/
 var exclusion = ["getAccessToken"];
 
 const defaultOptions = {
   baseURL: "http://localhost:3001/api/v1/", // mock server base url
 
   headers: {
     // default headers
   },
 };
 
 // Create instance
 var instance = axios.create();
 
 // Set the AUTH token for any request
 instance.interceptors.request.use(function (config) {
   return new Promise((resolve, reject) => {
     /* the token will be added to header for those url which are not found in the exclusion array*/
     // if (!checkAuthTokenExclusion(exclusion, config.url)) {
     //     const token = localStorage.getItem('sport-league-access-token');
     //     config.headers.Authorization = token ? `Bearer ${token}` : '';
     // }
     resolve(config);
   });
 });
 
 // Add a response interceptor
 instance.interceptors.response.use(
   function (response) {
     /* Get token from reponse and set to localstorage*/
     // if (typeof response.data.access_token != "undefined") {
     //   localStorage.setItem(
     //     "sport-league-access-token",
     //     response.data.access_token
     //   );
     // }
     return Promise.resolve(response);
   },
   function (error) {
     // Do something with response error
     return Promise.reject(error);
   }
 );
 
 export default instance;
 