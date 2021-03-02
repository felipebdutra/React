import React from "react";
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
  
    return <>
      <table className="table table-borderless table-hover">
            <tbody>
                {table.map((line,index) => 
                   {
                      return createLine(index,line,handleDelete,handleEdit, handleChange, save);
                    }
                 )}
                </tbody>
        </table>
    </>
}

export default TableFormFc;