
import React, { Component } from 'react';
import accas from './accas.jpeg'
import { connect } from 'react-redux';
class Entreprise extends Component {
  componentDidMount() 
      {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/admin');
        }
        else{
            
        }
       }

    render() {
        return (
                    <div class="row">
                        <div class="sheet-list">
      

                            <a href="https://www.meteojob.com/pages-entreprises/emploi-Acass-e-17435" class="sheet-link" data-company-id="17435">
                                <article class="sheet ">

                                <div class="text-wrapper">
                                    <div class="text-container">
                                        <div class="text-content text-center">
                                            <span>ACASS</span>
                                        </div>
                                        <div class="text-overlay text-center">
                                            <button class="btn btn-primary-light mtop-md mbot-xs">Voir l'entreprise</button>
                                        </div>
                                    </div>
                                </div>

    
        <div class="logo-wrapper">
            <img alt="" src={accas} />
        </div>
    

    
</article>
</a>

<a href="https://www.meteojob.com/pages-entreprises/emploi-Acii-e-20278" class="sheet-link" data-company-id="20278">
<article class="sheet">

    <div class="text-wrapper">
        <div class="text-container">
            <div class="text-content text-center">
                <span>ACII</span>
            </div>
            <div class="text-overlay text-center">
                <button class="btn btn-primary-light mtop-md mbot-xs">Voir l'entreprise</button>
            </div>
        </div>
    </div>

    
        <div class="logo-wrapper">
        <img alt="" src={accas} />
        </div>
    

    
</article>
</a>

 
<a href="https://www.meteojob.com/pages-entreprises/emploi-Afti-e-28303" class="sheet-link" data-company-id="28303">
<article class="sheet">

    <div class="text-wrapper">
        <div class="text-container">
            <div class="text-content text-center">
                <span>AFTI</span>
            </div>
            <div class="text-overlay text-center">
                <button class="btn btn-primary-light mtop-md mbot-xs">Voir l'entreprise</button>
            </div>
        </div>
    </div>

    
        <div class="logo-wrapper">
             <img alt="" src={accas} />
        </div>
    

    
</article>
</a>


<a href="https://www.meteojob.com/pages-entreprises/emploi-Apamad-e-23499" class="sheet-link" data-company-id="23499">
<article class="sheet">

    <div class="text-wrapper">
        <div class="text-container">
            <div class="text-content text-center">
                <span>APAMAD</span>
            </div>
            <div class="text-overlay text-center">
                <button class="btn btn-primary-light mtop-md mbot-xs">Voir l'entreprise</button>
            </div>
        </div>
    </div>

    
        <div class="logo-wrapper">
            <img alt="" src={accas} />
        </div>
    

    
</article>
</a>

<a href="https://www.meteojob.com/pages-entreprises/emploi-Axa-France-e-5548" class="sheet-link" data-company-id="5548">
<article class="sheet">

    <div class="text-wrapper">
        <div class="text-container">
            <div class="text-content text-center">
                <span>AXA FRANCE</span>
            </div>
            <div class="text-overlay text-center">
                <button class="btn btn-primary-light mtop-md mbot-xs">Voir l'entreprise</button>
            </div>
        </div>
    </div>

    
        <div class="logo-wrapper">
            <img alt="" src={accas} />
        </div>
    

    
</article>
</a>
</div>
</div>
)}}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps)(Entreprise)

      
        






