import React, { useEffect, useReducer } from 'react';
import { Button } from 'reactstrap';
import { ICrudCompState } from './CRUDComp';
import EditTableReducer, {EditTableAction, EditTableActionType} from './EditTableReducer';

interface IProps{
    handleDelete: (index: number) => void,
    handleEdit: (index:number) => void,
    line: ICrudCompState,
    index: number
}

const TableLine : React.FC<IProps> = ({line, index, handleDelete, handleEdit} : IProps) =>{

    const editAction : EditTableAction = {
        type : EditTableActionType.Edit
    }

   const [stateLine, dispacher] = useReducer(EditTableReducer, line)

    console.log(stateLine);

    return <>
            <tr key={index}>
                <td>{line.name}</td>
                <td>{line.email}</td>
                <td>
                    <Button color='danger' onClick={() => handleDelete(index)} >X</Button>
                </td>
                <td>
                    <Button color='info' onClick={() => handleEdit(index)} >Edit</Button>
                    {/* <Button color='info' onClick={() => dispacher(editAction)} >Edit</Button> */}
                </td>
            </tr>
        </>
}

export default TableLine;

