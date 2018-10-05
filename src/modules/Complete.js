import React, { Component } from 'react';
import {Table} from 'react-materialize';


class Complete extends Component {

    constructor(props){
        super(props);
        this.state = {
          usuarios: [],
          textoBusqueda: "",
        };
      }
    

    componentDidMount(){
    
        const url = "https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones";
         fetch(url)
           .then( respuesta => respuesta.json())
           .then( json =>  this.setState({ usuarios: json}))
           .catch();

       }
     

       //asd


       inputOnChange (texto) {
        this.setState({
            textoBusqueda: texto,
        })
    }
    
    searchedItems(){
        try{
      const { usuarios, textoBusqueda } = this.state;
      
      const textoBusquedaMinuscula = textoBusqueda.toLocaleLowerCase();
    
      if (textoBusqueda === ""){
        return usuarios;
      }
    
      const encontrados = usuarios.filter( (user) => {
      const encontreTipo = user.tipo.toLocaleLowerCase().indexOf(textoBusquedaMinuscula) !== -1;
      const encontreName = user.nombre.toLocaleLowerCase().indexOf(textoBusquedaMinuscula) !== -1;
      const encontrePais = user.pais.toLocaleLowerCase().indexOf(textoBusquedaMinuscula) !== -1;
      const encontreEmail = user.email.toLocaleLowerCase().indexOf(textoBusquedaMinuscula) !== -1;
      return encontreName || encontrePais || encontreEmail || encontreTipo;
    });
    
    return encontrados;
}catch(err){

}
    }
    

       //asd

  render() {

    const { usuarios, textoBusqueda } = this.state;
    console.log(usuarios);

    return (
      <div className="Complete">
  <h3>Usuarios</h3>
      <div className="input-group mb-3 input">
  <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={event => this.inputOnChange(event.target.value)} />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
  </div>
</div>


  <div className="card card-body">
  {textoBusqueda.length > 0 && 
<p>Usuarios Encontrados: {this.searchedItems().length}</p>
}

  <Table>
 <thead>
    <tr>
      <th data-field="type">Tipo</th>
      <th data-field="name">Nombre</th>
      <th data-field="email">Email</th>
      <th data-field="country">Pais</th>
    </tr>
  </thead>

{this.searchedItems().map(user => 
<tbody>
    <tr>
      <td>{user.tipo}</td>
      <td>{user.nombre}</td>
      <td>{user.email}</td>
      <td>{user.pais}</td>
    </tr>
</tbody>
)}
</Table>

  </div>
      </div>
    );
  }
}

export default Complete;
