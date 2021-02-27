import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import {ICrudCompState} from './CRUDComp';

interface IProps extends ICrudCompState{
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const HeaderFormFC : React.FC<IProps> = ({name, email, handleChange} :  IProps) => {

    const [errorMessages, setErrorMessages] = useState({nameError: '', emailError: ''});

    useEffect(() => { 
        
            let nameMsg = '' , emailMSg = '';

            if(name.length > 15){
                nameMsg ='Name too long';
            }

            if(email != null && email.length > 5 && errorMessages.emailError.indexOf("@") < 0){
                emailMSg ='Invalid email';
            }            
            
            setErrorMessages({nameError : nameMsg, emailError: emailMSg});
        
    },[name, email]);

    return <>
        <div>
            <label>Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
            <p>{errorMessages.nameError}</p>
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
            <p>{errorMessages.emailError}</p>
        </div>
        <ul>
            <li>name - {name}</li>
            <li>email - {email}</li>
        </ul>
    </>

}


export default HeaderFormFC;