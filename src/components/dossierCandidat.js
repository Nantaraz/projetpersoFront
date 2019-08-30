import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import PDF from 'react-pdf-js';

export default class DossierCandidat extends Component {

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
    }

    liste() {
        return <div>
            <div class="row">

                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                        return (
                            <div class="col-md-6 carde">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-title" id="titre">Nom: {obj.Nom}</p>
                                        <p class="card-title" id="titre">Prenom: {obj.Prenom}</p>
                                        <p class="card-title" id="titre">Contact rapide: {obj.Contact}</p>
                                        <p id="titre">Cliquer voir detail ci-déssous pour voir CV et LM</p>
                                        <center><Link to={"/afficheSeul/"+obj._id} id='mil'>Voir detail</Link></center>
                                        {/* <center><p class="card-text" id='milieu'>CV</p></center>
                                        <PDF width="65%" height="300px" file={'http://localhost:8080/afficheListe1/' + obj.photo_profil1}/>
                                        <center><p class="card-text" id='milieu'>LM</p></center>
                                        <PDF width="65%" height="300px" file={'http://localhost:8080/afficheListe2/' + obj.photo_profil2}/> */}
                                        {/* <center><p class="card-text" id='milieu'>CV</p></center>
                                        <center><img width="65%" height="300px" src={'http://localhost:8080/afficheListe1/' + obj.photo_profil1} alt="pdp" /> </center>
                                        <center><p class="card-text" id='milieu'>LM</p></center>
                                        <center><img width="65%" height="300px" src={'http://localhost:8080/afficheListe2/' + obj.photo_profil2} alt="pdp" /> </center>                       */}
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