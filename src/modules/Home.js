import React, { Component } from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {

        return (
            <div className="Home">

            <div className="">

            <Row></Row>
            <Row></Row>
                <Row>

                    <Col m={6} s={6}>

     <Card  id="free" className='grey lighten-5' textclassname='grey-text' title='Free (U$S 00)'  actions={[<Link to={{
                            pathname: '/register',
                            state: 'free'

                        }}> 

                        <button waves="light" type="button" className="btn btn-secondary btn-lg" textclassname="white">
                                Version Free </button></Link>]}>
<Table class="table table-dark">
 <thead>
    <tr>
      <th data-field="id">Descripcion</th>
      <th data-field="name">Disponible</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td >Escucha canciones sin limites</td>
      <td><i className="material-icons">check_circle</i></td>
    </tr>
    <tr>
      <td>Disfruta de la musica sin publicidad</td>
      <td><i className="material-icons">cancel</i></td>
    </tr>
    <tr>
      <td>Guarda hasta 200.000 canciones en tu ordenador</td>
      <td><i className="material-icons">cancel</i></td>
    </tr>
  </tbody>
</Table>
    </Card>

          </Col> 
             <Col m={6} s={6}>
         <Card id="premium" className='grey lighten-5' textclassname='grey-text' title='Premium(U$S 10/mes)' actions={[<Link to={{
                   pathname: '/register',
                    state: 'premium'
                      }}><button waves="light" className="btn btn-primary btn-lg " textclassname="white">
                            Version Premium </button></Link>]}>
                                <Table class="table table-dark">
  <thead>
    <tr>
      <th data-field="id">Descripcion </th>
      <th data-field="name">Disponible</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Escucha canciones sin limites</td>
      <td><i className="material-icons">check_circle</i></td>
    </tr>
    <tr>
      <td>Disfruta de la musica sin publicidad</td>
      <td><i className="material-icons">check_circle</i></td>
    </tr>
    <tr>
      <td>Guarda hasta 200.000 canciones en tu ordenador</td>
      <td><i className="material-icons">check_circle</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
          
                </Row>
</div>

            </div>



        );
    }
}

export default Home;
