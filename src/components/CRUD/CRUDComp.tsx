import React from 'react';
import HeaderFormFC from './HeaderFormFC';
import TableFormFc from './TableFormFC';

export interface ICrudCompState{
    name: string,
    email: string,
    edit?: boolean,
    listClient? : ICrudCompState[]
}

export default class CRUDComp extends React.Component<ICrudCompState>{

        constructor(props: any){
            super(props);
            this.clientList = [] ;
        }
        
        state : ICrudCompState = {
            name : '',
            email: '',
            edit: false
        }

        clientList : ICrudCompState[];

        handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

            let {name,value} = event.currentTarget;
            
            this.setState({[name] : value});
        }

        handleChangeEdit = (index : number, event: React.ChangeEvent<HTMLInputElement>) => {

            let {name,value} = event.currentTarget;
            
            let listClient = [...this.state.listClient!];

            let line = listClient.find((f,idx) => idx === index)!;
            
            line = {...line, [name] : value}

            listClient[index] = line;

            this.setState({listClient});
        }
        
        
        handleEdit = (index: number) => {

            let listClient = [...this.state.listClient!];
            
            let line = listClient.find((f,idx) => idx === index)!;
            
            line.edit = true;

            this.setState({ listClient });
        }

        handleDelete = (index: number) => {
        
           let filter = this.state.listClient?.filter((f,idx) => idx !== index);

           this.setState({ listClient: filter });
        }

        validateInputs(){
            let {name, email} = this.state;

            if(name.length === 0){

            }
        }

        addClient = () => {

            let listClient = [...this.state.listClient == null ? 
                    Array<ICrudCompState>() : this.state.listClient];
            
            listClient.push(this.state);

            this.setState({ listClient , name : '', email: ''} )
        }

        save = (index: number, line : ICrudCompState) => {

            let listClient = [...this.state.listClient!];
            
            let filter = listClient.find((f,idx) => idx === index);

            let {name, email} = line;

            listClient[index] = {...filter, name, email, edit : false};

            this.setState({ listClient });
        }

        render(){

            const {name, email , listClient} = this.state;
            
            const table = (listClient === undefined ? Array<ICrudCompState>() : listClient);

            const headerProps = {handleChange: this.handleChange,
                addClient:this.addClient, 
                name, 
                email}
                
            const tableProps = {table,handleDelete: 
                this.handleDelete, 
                handleEdit : this.handleEdit, 
                save: this.save, 
                handleChange: this.handleChangeEdit}

            return <>
                <div className="offset-md-2 form-group">
                    <HeaderFormFC {...headerProps}/>
                    <TableFormFc {...tableProps} /> 
                </div>
            </>
        }
}