import React, { useEffect, useReducer } from "react";
import { Button, Table } from "reactstrap";
import {ICrudCompState} from './CRUDComp';
import EditLineTableFC from "./EditLineTableFC";
import LineTableFC from "./LineTableFC";


interface IProps{
    table : ICrudCompState[],
    handleDelete : (index : number) => void,
    handleEdit: (index: number) => void,
    handleChange: (index : number, e: React.ChangeEvent<HTMLInputElement>) => void,
    save : (index: number,editLine :ICrudCompState) => void
}

const createLine = (index: number,
    line :ICrudCompState, 
    handleDelete: (index: number) => void,
    handleEdit: (index: number) => void,
    handleChange: (index : number, e: React.ChangeEvent<HTMLInputElement>) => void,
    save : (index: number, editLine :ICrudCompState) => void
    ) => {
  if(line.edit){
    return <EditLineTableFC key={index} index={index} line={line} handleChange={handleChange} save={save}  />
  }else{
    return <LineTableFC key={index} handleDelete={handleDelete} handleEdit={handleEdit} index={index} line={line}  />
  }
}

const TableFormFc : React.FC<IProps> = ({table, handleDelete, handleEdit,handleChange, save} : IProps) => {

//extop reducer - https://reactjs.org/docs/hooks-reference.html#usereducer


//const [state, discharger] = useReducer(reducer, initialState);
  
    return <>
      <Table hover>
            <tbody>
                {table.map((line,index) => 
                   {
                      return createLine(index,line,handleDelete,handleEdit, handleChange, save);
                    }
                 )}
                </tbody>
        </Table>
    </>
}

export default TableFormFc;