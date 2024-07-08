import { Alert } from "react-native";

export const usernameValidation = (username: string) =>{
//check if username is empty
if(!username){
    console.log("Error, username still empty");
    Alert.alert("Error, username is required");
    return false;
}
//check if username is less than 3 characters
//Check if username is more than 10 characters
if(!(username.length >= 3 && username.length <= 10)){
    console.log("Username must be at least 3 characters and at most 10 characters");
    Alert.alert("Error, username must be between 3 and 10 characters");
    return false;
}
return true;
}