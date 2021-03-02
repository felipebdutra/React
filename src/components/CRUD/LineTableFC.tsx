import React from 'react';
import { ICrudCompState } from './CRUDComp';

interface IProps{
    handleDelete: (index: number) => void,
    handleEdit: (index:number) => void,
    line: ICrudCompState,
    index: number
}

const TableLine : React.FC<IProps> = ({line, index, handleDelete, handleEdit} : IProps) =>{

    return <>
            <tr className="d-flex" key={index}>
                <td className="col-4">{line.name}</td>
                <td className="col-3">{line.email}</td>
                <td className="col-2">
                    <div className="input-group">
                        <button className='btn btn-outline-danger form-control' onClick={() => handleDelete(index)} >X</button>
                        <button className='btn btn-outline-primary form-control' onClick={() => handleEdit(index)} >Edit</button>
                    </div>
                </td>
            </tr>
        </>
}

export default TableLine;

