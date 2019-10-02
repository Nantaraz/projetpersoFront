
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Mesateliers extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            profil: [],
         };

    }


    componentDidMount() {
        axios.get('https://young-thicket-26043.herokuapp.com'+this.props.location.pathname)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
	
        if(this.props.auth.isAuthenticated) {
            
        }
        else{
            this.props.history.push('/login');
      
       }

    }

    liste() {
        return <div>
            <div class="row">

                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                        return (
                            <div class="col-md-12 carde">
                                <div class="card">
                                    <div class="card-body">
                                        <center><h6 class="card-title" id="titre">offre d'emploi</h6></center>
                                        <p class="card-text" id='milieu1'>Intitulé du poste: {obj.Titre}</p>
                                        {/* <img width="98%" height="190px" src={'http://localhost:8080/user/' + obj.photo_profil} alt="pdp" /> */}
                                        <p class="card-text" id='milieu1'>Type de contrat: {obj.Description}</p>
                                        <p class="card-text" id='milieu1'>Expérience exigée: {obj.Date}</p>
                                        <p class="card-text" id='milieu1'>Salaire: {obj.HoraireDebut}</p>
                                        <p class="card-text" id='milieu1'>Notre société spécialisée dans {obj.Duree} recherche un(e) {obj.NombrePlacesDispo} pour venir renforcer mes équipes!</p>
                                        {/* <p class="card-text" id='milieu'>Place dispo: {obj.NombrePlacesDispo}</p> */}
                                        <p class="card-text" id='milieu1'>Pour occuper ce poste,nous aimerons recruter un proffesionel {obj.NombrePlacesRes} titulaire d'un (diplome souhaité) et possedant les compétences suivantes:</p>
                                        <p class="card-text" id='milieu1' onClick={()=>{
                                            console.log(obj._id);
                                            
                                        }}>Si vous êtes intéressé par cette offre et posssédez toutes les qualités et compétences recherchées,n'hézitez pas à nous envoyer votre CV accompagné d'une lettre de motivation à: {obj.Prix} Ar</p>
                                        <p id='milieu1'>Nous vous répondons dans le plus bref détail</p>
                                        <p id='milieu1'>Pour toute formation complémentaire: tel,e-mail</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <Link to={'/putAtelier/'+obj._id}><button className="btn bg-secondary" id="edit">Edit</button></Link>
                                            </div>
                                            <div className="col-md-6">
                                            <div>
                                            {obj.visibilite===true ?(<button className="btn bg-danger" id="activer" onClick={(e)=>{
                                                e.preventDefault()
                                                axios.get("https://young-thicket-26043.herokuapp.com/ateliermasquer/"+obj._id).then(res=>{
                                                    axios.get('https://young-thicket-26043.herokuapp.com/profil/'+localStorage.getItem('id')).then(res=>{
                                                console.log(res.data)
                                                this.setState({profil:res.data})
                                                })
                                                    console.log(res.data)})
                                            
                                                
                                                }}>Desactiver</button>):(<button className="btn bg-success" id="desactiver" onClick={(e)=>{
                                                
                                                    console.log(obj._id)
                                                   axios.get("https://young-thicket-26043.herokuapp.com/atelierafficher/"+obj._id).then(res=>{
                                                        axios.get('https://young-thicket-26043.herokuapp.com/profil/'+ localStorage.getItem('id')).then(res=>{
                                                console.log(res.data)
                                                this.setState({profil:res.data})
                                                    })
                                                    console.log(res.data)})
                                                
                                                    }}>Activer</button>)}
                                                    </div>
                                            </div> 
                                        </div>
                                       
                                                  
                                                             
                                    </div>
                                </div>
                            </div>)
                    })) : ('')
                }
            </div>
            </div>
        
            

        
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps)(Mesateliers)
