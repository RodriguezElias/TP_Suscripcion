import React, { Component } from 'react';
import { Row, Input, Button, Card} from 'react-materialize';
import { CountryDropdown } from 'react-country-region-selector';
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles-compiled.css';
import CreditCardInput from 'react-credit-card-input';
import checkCreditCard from '.././components/CreditValidator';
import * as EmailValidator from 'email-validator';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: '',
      name: '',
      surname: '',
      country: '',
      password: '',
      email: '',
      cnumber: '',
      cexpiry: '',
      ccvc:'',
    };
  }

  componentDidMount() {
    this.setState({ tipo: this.props.location.state })
  }
  

  selectCountry(val) {
    this.setState({ country: val });
  }


  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })}

  payment(){
    if (this.state.tipo === 'premium'){
      return (<div><CreditCardInput containerClassName="creditcard" inputClassName="inputCC"
        cardNumberInputProps={{ onChange: e => this.handleChange(e), name:"cnumber" }}
        cardExpiryInputProps={{ onChange: e => this.handleChange(e), name:"cexpiry" }}
        cardCVCInputProps={{ onChange: e => this.handleChange(e), name:"ccvc" }}
          />
          
          
          <Cards  number={this.state.cnumber}
                  name={this.state.name + " " + this.state.surname}
                  expiry={this.state.cexpiry}
                  cvc={this.state.ccvc}
                   />
          
          </div>  );
    }
  }

  heavyCheckCC(){
    let r;
    if (checkCreditCard(this.state.cnumber, 'visa')){   
      r = true
    }else{r = false;}
    
    return r;
 }
    
checkFields(){
 let res = false;


 if((this.state.name.length > 0) &&
  (this.state.surname.length > 0) &&
  (this.state.email.length > 0 ) &&
  (this.state.country.length > 0) &&
  (this.state.password.length > 0)){
    res = true;
  };

  if(this.state.tipo === "premium"){
    if((this.state.cnumber.length > 0) &&
  (this.state.cexpiry.length > 0) &&
  (this.state.ccvc.length > 0)){
    
  }else{
    res = false;
  }
  }

  if(!EmailValidator.validate(this.state.email)){
    res= false;
         window.Materialize.toast('Email Invalido', 1000); 

  }
  return res;

}


 registrarse() { 
   if (this.checkFields()){
    this.fetchData();
    console.log(this.state);
    setTimeout(() => {
      this.props.history.push('/');
  }, 2000);
   }else{
    window.Materialize.toast('Campos incompletos', 1000);
   }
    
  }


  fetchData(){

    let userPost = {
      tipo: this.state.tipo,
      nombre: this.state.name + " " + this.state.surname,
      email: this.state.email,
      pais: this.state.country,
    };


    fetch('https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones', { // URL: https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userPost, '\t')
    })
    .then(JSON.stringify(userPost, '\t'))
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      window.Materialize.toast('Request succeeded with JSON response', 1000);
    })
    .catch(function (error) {
      console.log('Request failed', error);
      window.Materialize.toast('Request failed', 1000);
    });
  }

  render() {
    const { country } = this.state;

    return (
      <div className="Register">
      <Card className="w-50 ml-5 mt-5">
        <Row>
          <form >
            <Input id="userName" s={6} label="First Name" name="name" onChange={e => this.handleChange(e)} />
            <Input s={6} label="Last Name" validate name="surname" onChange={e => this.handleChange(e)} />
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)} className="showBlock" name="country" />

            <Input type="password" label="password" s={12} validate name="password" onChange={e => this.handleChange(e)} />
            <Input type="email" label="Email" s={12} validate name="email" onChange={e => this.handleChange(e)} />
          </form>

         <div className="ccDiv"> {this.payment()} </div>
         
        </Row>
        <button waves="orange" className="btn btn-secondary btn-lg"  onClick={ () => {this.registrarse()}} disabled={this.state.boton} >Registrarse</button>
</Card>
      </div>
    );
  }
}

export default Register;
