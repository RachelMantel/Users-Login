import { UserType } from "../models/userType";


const initiaUser : UserType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
};

export type Action={
        type: 'CREATE_USER',
        data: Partial<UserType> 
    } | {
        type: 'UPDATE_USER',
        data: Partial<UserType>
    } | {
        type: "REMOVE_USER",
       data: Partial<UserType>
     } | {
        type: "LOGIN_USER",
       data: Partial<UserType>   
}


export default  (state: UserType, action: Action): UserType => {
    switch (action.type) {
      case "CREATE_USER":
        const user = action.data;
        return   {
        email: user.email || '',
        password: user.password || '',
        userId: user.userId ||'',
        }
        case "LOGIN_USER":
          const user2 = action.data;
          return {
            userId: user2.userId,
            firstName: user2.firstName,
            lastName: user2.lastName,
            email: user2.email||'',
            password: user2.password||'',
            address: user2.address,
            phoneNumber: user2.phoneNumber,}
        case "UPDATE_USER":
          const user1 = action.data;
          return {
            firstName: user1.firstName,
            lastName: user1.lastName,
            userId: user1.userId||'',
            email: user1.email||'',
            password: user1.password||'',
            address: user1.address,
            phoneNumber: user1.phoneNumber}
      case "REMOVE_USER":
        return initiaUser;
      default:
          return state;
      }
};