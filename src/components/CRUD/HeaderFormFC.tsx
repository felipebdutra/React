import React, { useEffect } from 'react';
import { useState } from 'react';
import {ICrudCompState} from './CRUDComp';

interface IProps extends ICrudCompState{
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    addClient: () => void
}

const HeaderFormFC : React.FC<IProps> = ({name, email, handleChange, addClient} :  IProps) => {

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
        <div className="form-row" >
            <div className="col">
                <input className="form-control" type="text" name="name" id="name" placeholder='Name' value={name} onChange={handleChange}/>
                <p className="text-danger">{errorMessages.nameError}</p>
            </div>
            <div className="col">
                <input className="form-control" type="email" name="email" id="email" placeholder='e-mail' value={email} onChange={handleChange}/>
                <p className="text-danger">{errorMessages.emailError}</p>
            </div>
            <div className="col">
                <button className="btn btn-outline-primary" onClick={addClient}>Add</button>
            </div>
        </div>
    </>

}


export default HeaderFormFC;