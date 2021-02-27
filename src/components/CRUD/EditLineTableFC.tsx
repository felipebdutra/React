import React from 'react';
import { useEffect } from 'react';
import { Button } from 'reactstrap';
import { ICrudCompState } from './CRUDComp';

interface IProp {
    index: number
    line: ICrudCompState,
    handleChange : (index: number, e: React.ChangeEvent<HTMLInputElement>) => void,
    save : (index: number, editLine :ICrudCompState) => void
}

const EditLineTableFC: React.FC<IProp> = ({index,line, handleChange, save}: IProp) =>{
    
    let {name,email} = line;
    
    return <>
        <tr>
            <td>
                <input type="text" name="name" id="name" onChange={(e) => handleChange(index, e)} value={name} />
            </td>
            <td>
                <input type="text" name="email" id="email" onChange={(e) => handleChange(index,e)} value={email} />
            </td>
            <td>
                <Button onClick={() => save(index,{ name, email })} >Save</Button>
            </td>
        </tr>
    </>
}

export default EditLineTableFC;