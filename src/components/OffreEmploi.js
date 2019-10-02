import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import { connect } from 'react-redux';

class OffreEmploi extends Component {
    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('https://young-thicket-26043.herokuapp.com/profil')
            .then(response => {
               
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
	if(this.props.auth.isAuthenticated) {
            this.props.history.push('/admin');
        }
        else{
            
        }
    }

    liste() {
        return <div>
            <Slider />
             
            <div  class="row">

                {
                   (this.state.profil.length > 0) ? (this.state.profil.filter((params) => params.visibilite).map((obj) => {
                        return (
                            <div class="col-md-4 carde">
                                <div class="card" onClick={() => {localStorage.setItem('travail',obj.id2)
                                 console.log(obj._id)}}>
                                    
                                    
                                    <div class="card-body">

                                        
                                        {/* <div className="container"><img width="98%" height="90%" src={'http://localhost:8080/user/' + obj.photo_profil} alt="pdp" /></div> */}
                                        
                                        <center><h6 class="card-title" id="titre">offre d'emploi</h6></center>
                                        <p class="card-text" id='milieu1'>Intitulé du poste: {obj.Titre}</p>
                                        {/* <img width="98%" height="190px" src={'http://localhost:8080/user/' + obj.photo_profil} alt="pdp" /> */}
                                        <p class="card-text" id='milieu1'>Type de contrat: {obj.Description}</p>
                                        <p class="card-text" id='milieu1'>Expérience exigée: {obj.Date}</p>
                                        <p class="card-text" id='milieu1'>Salaire: {obj.HoraireDebut} Ar</p>
                                        <p class="card-text" id='milieu'>Notre société spécialisée dans {obj.Duree} recherche un(e) {obj.NombrePlacesDispo} pour venir renforcer mes équipes!</p>
                                        {/* <p class="card-text" id='milieu'>Place dispo: {obj.NombrePlacesDispo}</p> */}
                                        <p class="card-text" id='milieu'>Pour occuper ce poste,nous aimerons recruter un proffesionel {obj.NombrePlacesRes} titulaire d'un (diplome souhaité) et possedant les compétences suivantes:</p>
                                        <p class="card-text" id='milieu' onClick={()=>{
                                            console.log(obj._id);
                                            
                                        }}>Si vous êtes intéressé par cette offre et posssédez toutes les qualités et compétences recherchées,n'hézitez pas à nous envoyer votre CV accompagné d'une lettre de motivation en cliquant sur le boutton s'inscrire ou à l'addresse à: {obj.Prix} Ar</p>
                                        <p id='milieu'>Nous vous répondons dans le plus bref détail</p>
                                        <p id='milieu'>Pour toute formation complémentaire: tel,e-mail</p>
                                        <Link to={"/postuler/"+obj.id2} className="btn btn-success" id="butatelier"><center>Postuler</center></Link>
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
            <div >
                {this.liste()}
            </div>
        );
    }
}

//     render() {
//         return (<div>

//             <div id="emplois-regions" class="clearfix">
//       <div class="regions-block">
//         <h2>Emplois par départements</h2>
//           <div class="row"><div class="col-md-3"><ul class="links-list"><li><i class="fa fa-chevron-right"></i> <a href="/Ain-(01)-Emploi" title="Trouver un emploi dans le département : Ain" target="_self">Emploi Ain</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Aisne-(02)-Emploi" title="Trouver un emploi dans le département : Aisne" target="_self">Emploi Aisne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Allier-(03)-Emploi" title="Trouver un emploi dans le département : Allier" target="_self">Emploi Allier</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Alpes-Maritimes-(06)-Emploi" title="Trouver un emploi dans le département : Alpes-Maritimes" target="_self">Emploi Alpes-Maritimes</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Alpes-De-Haute-Provence-(04)-Emploi" title="Trouver un emploi dans le département : Alpes-de-Haute-Provence" target="_self">Emploi Alpes-de-Haute-Provence</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Ardennes-(08)-Emploi" title="Trouver un emploi dans le département : Ardennes" target="_self">Emploi Ardennes</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Ard%C3%A8che-(07)-Emploi" title="Trouver un emploi dans le département : Ardèche" target="_self">Emploi Ardèche</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Ari%C3%A8ge-(09)-Emploi" title="Trouver un emploi dans le département : Ariège" target="_self">Emploi Ariège</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Aube-(10)-Emploi" title="Trouver un emploi dans le département : Aube" target="_self">Emploi Aube</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Aude-(11)-Emploi" title="Trouver un emploi dans le département : Aude" target="_self">Emploi Aude</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Aveyron-(12)-Emploi" title="Trouver un emploi dans le département : Aveyron" target="_self">Emploi Aveyron</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Bas-Rhin-(67)-Emploi" title="Trouver un emploi dans le département : Bas-Rhin" target="_self">Emploi Bas-Rhin</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Bouches-Du-Rh%C3%B4ne-(13)-Emploi" title="Trouver un emploi dans le département : Bouches-du-Rhône" target="_self">Emploi Bouches-du-Rhône</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Calvados-(14)-Emploi" title="Trouver un emploi dans le département : Calvados" target="_self">Emploi Calvados</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Cantal-(15)-Emploi" title="Trouver un emploi dans le département : Cantal" target="_self">Emploi Cantal</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Charente-(16)-Emploi" title="Trouver un emploi dans le département : Charente" target="_self">Emploi Charente</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Charente-Maritime-(17)-Emploi" title="Trouver un emploi dans le département : Charente-Maritime" target="_self">Emploi Charente-Maritime</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Cher-(18)-Emploi" title="Trouver un emploi dans le département : Cher" target="_self">Emploi Cher</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Corr%C3%A8ze-(19)-Emploi" title="Trouver un emploi dans le département : Corrèze" target="_self">Emploi Corrèze</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Corse-Du-Sud-(2a)-Emploi" title="Trouver un emploi dans le département : Corse-du-Sud" target="_self">Emploi Corse-du-Sud</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Creuse-(23)-Emploi" title="Trouver un emploi dans le département : Creuse" target="_self">Emploi Creuse</a></li><li><i class="fa fa-chevron-right"></i> <a href="/C%C3%B4te-D%27Or-(21)-Emploi" title="Trouver un emploi dans le département : Côte-d'Or" target="_self">Emploi Côte-d'Or</a></li><li><i class="fa fa-chevron-right"></i> <a href="/C%C3%B4tes-D%27Armor-(22)-Emploi" title="Trouver un emploi dans le département : Côtes-d'Armor" target="_self">Emploi Côtes-d'Armor</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Deux-S%C3%A8vres-(79)-Emploi" title="Trouver un emploi dans le département : Deux-Sèvres" target="_self">Emploi Deux-Sèvres</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Dordogne-(24)-Emploi" title="Trouver un emploi dans le département : Dordogne" target="_self">Emploi Dordogne</a></li></ul></div><div class="col-md-3"><ul class="links-list"><li><i class="fa fa-chevron-right"></i> <a href="/Doubs-(25)-Emploi" title="Trouver un emploi dans le département : Doubs" target="_self">Emploi Doubs</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Dr%C3%B4me-(26)-Emploi" title="Trouver un emploi dans le département : Drôme" target="_self">Emploi Drôme</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Essonne-(91)-Emploi" title="Trouver un emploi dans le département : Essonne" target="_self">Emploi Essonne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Eure-(27)-Emploi" title="Trouver un emploi dans le département : Eure" target="_self">Emploi Eure</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Eure-Et-Loir-(28)-Emploi" title="Trouver un emploi dans le département : Eure-et-Loir" target="_self">Emploi Eure-et-Loir</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Finist%C3%A8re-(29)-Emploi" title="Trouver un emploi dans le département : Finistère" target="_self">Emploi Finistère</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Gard-(30)-Emploi" title="Trouver un emploi dans le département : Gard" target="_self">Emploi Gard</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Gers-(32)-Emploi" title="Trouver un emploi dans le département : Gers" target="_self">Emploi Gers</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Gironde-(33)-Emploi" title="Trouver un emploi dans le département : Gironde" target="_self">Emploi Gironde</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Guadeloupe-(971)-Emploi" title="Trouver un emploi dans le département : Guadeloupe" target="_self">Emploi Guadeloupe</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Guyane-(973)-Emploi" title="Trouver un emploi dans le département : Guyane" target="_self">Emploi Guyane</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haut-Rhin-(68)-Emploi" title="Trouver un emploi dans le département : Haut-Rhin" target="_self">Emploi Haut-Rhin</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Corse-(2b)-Emploi" title="Trouver un emploi dans le département : Haute-Corse" target="_self">Emploi Haute-Corse</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Garonne-(31)-Emploi" title="Trouver un emploi dans le département : Haute-Garonne" target="_self">Emploi Haute-Garonne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Loire-(43)-Emploi" title="Trouver un emploi dans le département : Haute-Loire" target="_self">Emploi Haute-Loire</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Marne-(52)-Emploi" title="Trouver un emploi dans le département : Haute-Marne" target="_self">Emploi Haute-Marne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Savoie-(74)-Emploi" title="Trouver un emploi dans le département : Haute-Savoie" target="_self">Emploi Haute-Savoie</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Sa%C3%B4ne-(70)-Emploi" title="Trouver un emploi dans le département : Haute-Saône" target="_self">Emploi Haute-Saône</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Haute-Vienne-(87)-Emploi" title="Trouver un emploi dans le département : Haute-Vienne" target="_self">Emploi Haute-Vienne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Hautes-Alpes-(05)-Emploi" title="Trouver un emploi dans le département : Hautes-Alpes" target="_self">Emploi Hautes-Alpes</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Hautes-Pyr%C3%A9n%C3%A9es-(65)-Emploi" title="Trouver un emploi dans le département : Hautes-Pyrénées" target="_self">Emploi Hautes-Pyrénées</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Hauts-De-Seine-(92)-Emploi" title="Trouver un emploi dans le département : Hauts-de-Seine" target="_self">Emploi Hauts-de-Seine</a></li><li><i class="fa fa-chevron-right"></i> <a href="/H%C3%A9rault-(34)-Emploi" title="Trouver un emploi dans le département : Hérault" target="_self">Emploi Hérault</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Ille-Et-Vilaine-(35)-Emploi" title="Trouver un emploi dans le département : Ille-et-Vilaine" target="_self">Emploi Ille-et-Vilaine</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Indre-(36)-Emploi" title="Trouver un emploi dans le département : Indre" target="_self">Emploi Indre</a></li></ul></div><div class="col-md-3"><ul class="links-list"><li><i class="fa fa-chevron-right"></i> <a href="/Indre-Et-Loire-(37)-Emploi" title="Trouver un emploi dans le département : Indre-et-Loire" target="_self">Emploi Indre-et-Loire</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Is%C3%A8re-(38)-Emploi" title="Trouver un emploi dans le département : Isère" target="_self">Emploi Isère</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Jura-(39)-Emploi" title="Trouver un emploi dans le département : Jura" target="_self">Emploi Jura</a></li><li><i class="fa fa-chevron-right"></i> <a href="/La-R%C3%A9union-(974)-Emploi" title="Trouver un emploi dans le département : La Réunion" target="_self">Emploi La Réunion</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Landes-(40)-Emploi" title="Trouver un emploi dans le département : Landes" target="_self">Emploi Landes</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Loir-Et-Cher-(41)-Emploi" title="Trouver un emploi dans le département : Loir-et-Cher" target="_self">Emploi Loir-et-Cher</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Loire-(42)-Emploi" title="Trouver un emploi dans le département : Loire" target="_self">Emploi Loire</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Loire-Atlantique-(44)-Emploi" title="Trouver un emploi dans le département : Loire-Atlantique" target="_self">Emploi Loire-Atlantique</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Loiret-(45)-Emploi" title="Trouver un emploi dans le département : Loiret" target="_self">Emploi Loiret</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Lot-(46)-Emploi" title="Trouver un emploi dans le département : Lot" target="_self">Emploi Lot</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Lot-Et-Garonne-(47)-Emploi" title="Trouver un emploi dans le département : Lot-et-Garonne" target="_self">Emploi Lot-et-Garonne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Loz%C3%A8re-(48)-Emploi" title="Trouver un emploi dans le département : Lozère" target="_self">Emploi Lozère</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Maine-Et-Loire-(49)-Emploi" title="Trouver un emploi dans le département : Maine-et-Loire" target="_self">Emploi Maine-et-Loire</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Manche-(50)-Emploi" title="Trouver un emploi dans le département : Manche" target="_self">Emploi Manche</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Marne-(51)-Emploi" title="Trouver un emploi dans le département : Marne" target="_self">Emploi Marne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Martinique-(972)-Emploi" title="Trouver un emploi dans le département : Martinique" target="_self">Emploi Martinique</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Mayenne-(53)-Emploi" title="Trouver un emploi dans le département : Mayenne" target="_self">Emploi Mayenne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Meurthe-Et-Moselle-(54)-Emploi" title="Trouver un emploi dans le département : Meurthe-et-Moselle" target="_self">Emploi Meurthe-et-Moselle</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Meuse-(55)-Emploi" title="Trouver un emploi dans le département : Meuse" target="_self">Emploi Meuse</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Morbihan-(56)-Emploi" title="Trouver un emploi dans le département : Morbihan" target="_self">Emploi Morbihan</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Moselle-(57)-Emploi" title="Trouver un emploi dans le département : Moselle" target="_self">Emploi Moselle</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Ni%C3%A8vre-(58)-Emploi" title="Trouver un emploi dans le département : Nièvre" target="_self">Emploi Nièvre</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Nord-(59)-Emploi" title="Trouver un emploi dans le département : Nord" target="_self">Emploi Nord</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Oise-(60)-Emploi" title="Trouver un emploi dans le département : Oise" target="_self">Emploi Oise</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Orne-(61)-Emploi" title="Trouver un emploi dans le département : Orne" target="_self">Emploi Orne</a></li></ul></div><div class="col-md-3"><ul class="links-list"><li><i class="fa fa-chevron-right"></i> <a href="/Paris-(75)-Emploi" title="Trouver un emploi dans le département : Paris" target="_self">Emploi Paris</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Pas-De-Calais-(62)-Emploi" title="Trouver un emploi dans le département : Pas-de-Calais" target="_self">Emploi Pas-de-Calais</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Puy-De-D%C3%B4me-(63)-Emploi" title="Trouver un emploi dans le département : Puy-de-Dôme" target="_self">Emploi Puy-de-Dôme</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Pyr%C3%A9n%C3%A9es-Atlantiques-(64)-Emploi" title="Trouver un emploi dans le département : Pyrénées-Atlantiques" target="_self">Emploi Pyrénées-Atlantiques</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Pyr%C3%A9n%C3%A9es-Orientales-(66)-Emploi" title="Trouver un emploi dans le département : Pyrénées-Orientales" target="_self">Emploi Pyrénées-Orientales</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Rh%C3%B4ne-(69)-Emploi" title="Trouver un emploi dans le département : Rhône" target="_self">Emploi Rhône</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Sarthe-(72)-Emploi" title="Trouver un emploi dans le département : Sarthe" target="_self">Emploi Sarthe</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Savoie-(73)-Emploi" title="Trouver un emploi dans le département : Savoie" target="_self">Emploi Savoie</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Sa%C3%B4ne-Et-Loire-(71)-Emploi" title="Trouver un emploi dans le département : Saône-et-Loire" target="_self">Emploi Saône-et-Loire</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Seine-Maritime-(76)-Emploi" title="Trouver un emploi dans le département : Seine-Maritime" target="_self">Emploi Seine-Maritime</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Seine-Saint-Denis-(93)-Emploi" title="Trouver un emploi dans le département : Seine-Saint-Denis" target="_self">Emploi Seine-Saint-Denis</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Seine-Et-Marne-(77)-Emploi" title="Trouver un emploi dans le département : Seine-et-Marne" target="_self">Emploi Seine-et-Marne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Somme-(80)-Emploi" title="Trouver un emploi dans le département : Somme" target="_self">Emploi Somme</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Tarn-(81)-Emploi" title="Trouver un emploi dans le département : Tarn" target="_self">Emploi Tarn</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Tarn-Et-Garonne-(82)-Emploi" title="Trouver un emploi dans le département : Tarn-et-Garonne" target="_self">Emploi Tarn-et-Garonne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Territoire-De-Belfort-(90)-Emploi" title="Trouver un emploi dans le département : Territoire de Belfort" target="_self">Emploi Territoire de Belfort</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Val-D%27Oise-(95)-Emploi" title="Trouver un emploi dans le département : Val-d'Oise" target="_self">Emploi Val-d'Oise</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Val-De-Marne-(94)-Emploi" title="Trouver un emploi dans le département : Val-de-Marne" target="_self">Emploi Val-de-Marne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Var-(83)-Emploi" title="Trouver un emploi dans le département : Var" target="_self">Emploi Var</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Vaucluse-(84)-Emploi" title="Trouver un emploi dans le département : Vaucluse" target="_self">Emploi Vaucluse</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Vend%C3%A9e-(85)-Emploi" title="Trouver un emploi dans le département : Vendée" target="_self">Emploi Vendée</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Vienne-(86)-Emploi" title="Trouver un emploi dans le département : Vienne" target="_self">Emploi Vienne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Vosges-(88)-Emploi" title="Trouver un emploi dans le département : Vosges" target="_self">Emploi Vosges</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Yonne-(89)-Emploi" title="Trouver un emploi dans le département : Yonne" target="_self">Emploi Yonne</a></li><li><i class="fa fa-chevron-right"></i> <a href="/Yvelines-(78)-Emploi" title="Trouver un emploi dans le département : Yvelines" target="_self">Emploi Yvelines</a></li></ul></div></div>      </div>
//     </div>

//     <div id="emplois-entreprises" class="clearfix">
//       <div class="entreprises-block">
//         <div class="row">
//           <h2>Emplois par entreprise</h2>
//           <div class="col-sm-6">
//             <ul class="links-list">
//               <li><i class="fa fa-chevron-right"></i><a href="/fiches-entreprises">Toutes les fiches entreprises</a>
//               </li>
//             </ul>
//           </div>
//           <div class="col-sm-6">
//             <ul class="links-list">
//               <li><i class="fa fa-chevron-right"></i><a href="/fiches-metiers">Toutes les fiches métiers</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
                    
// )}}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps)(OffreEmploi)

      
        






