import { ICrudCompState } from './CRUDComp';

export enum EditTableActionType {
    Show = 'SHOW_TABLE',
    Edit = 'EDIT_TABLE'
  }
  
export type EditTableAction = {
    readonly type : EditTableActionType.Show,
  } | {
    readonly type : EditTableActionType.Edit,
  }
  
//  const initialState: ICrudCompState = { name : ''};
  
 export const EditTableReducer = (state: ICrudCompState, action: EditTableAction) => {
    switch(action.type){
      case EditTableActionType.Show:
        return {...state, edit : true};
      case EditTableActionType.Edit:
        return {...state, edit : false};
       default:
         return state;
      }
  
  }

  export default EditTableReducer;