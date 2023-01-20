import { configureStore } from '@reduxjs/toolkit';
import { userSlice} from './user/slice'
// const contactsReducer = () => {
//     console.log('contactsreducer!');
//     return null;
// }

const userReducer = () => {
console.log('uderreducer!');
return null;
}
    
export const store = configureStore({
    reducer: {
        userData: userSlice.reducer,
        // contacts: contactsReducer,
    }

});

// export const store = {};
