import React from 'react';
import "../styles/About.css";

export default function About() {
    return (
        <div>
            <div className="about-container">
                <div className="imagen-about"></div>
                <h1 className="h1-about">NUESTRO EQUIPO</h1>
            </div>
            <div className='team1-about'>
                <div>
                    <h4>Scrum Master</h4>
                    <h3>Fanny Tineo</h3>
                    <p>LinkedIn</p>
                </div>

                <div>
                    <h4>Product Owner</h4>
                    <h3>Elian Menegozzi</h3>
                    <p>LinkedIn</p>
                </div>
            </div>

            <div className='separador-about'>
                <h2>Equipo Desarrollo</h2>
            </div>

            <div className='team-back-about'>
                <h4>Desarrollo Back End</h4>
            </div>

            <div className='team-back'>
                <div>
                    <h3>Hummel Agustín</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Pérez Huanca José Luis</h3>
                    <p>LinkedIn</p>
                </div>
            </div>



            <div className='team-front-about'>
                <h4>Desarrollo Front End</h4>
            </div>

            <div className='team-front'>
                <div>
                    <h3>Grodz Juan Ignacio</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Sanchez Rodrigo</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Torcetta Ezequiel</h3>
                    <p>LinkedIn</p>
                </div>
            </div>

            <div className='separador-about'>
                <h2>Equipo Diseño / UX</h2>
            </div>

            <div className='team-ux'>
                <div className='team1-ux'>
                <div>
                    <h3>Bernal Helen</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Castro Melanie</h3>
                    <p>LinkedIn</p>
                </div>
                </div>
                <div className='team2-ux'>
                <div>
                    <h3>Marcer Julieta</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Muñoz Julieta</h3>
                    <p>LinkedIn</p>
                </div>
                </div>
            </div>


            <div className='separador-about'>
                <h2>Equipo Analista</h2>
            </div>

            <div className='analista-funcional'>
                <h4>Analista Funcional</h4>
                <h3>Villalba Alejandro</h3>
                <p>LinkedIn</p>
            </div>


            <div className='separador-about'>
                <h2>Equipo Testing</h2>
            </div>

            <div className='team-tester-manual'>
                <h4>Tester Manual</h4>
            </div>


            <div className='team-tester-automatizado'>
                <h4>Tester Automatizado</h4>
            </div>

            <div className='team-tester-automatizado'>
               <div className='team1-automatizado'>
                <div>
                    <h3>Abdoni Gisele Vanesa</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Castro Agustin</h3>
                    <p>LinkedIn</p>
                </div>
                </div>
                <div className='team2-automatizado'>
                <div>
                    <h3>Cinieri Jessica</h3>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <h3>Riedinger Julián</h3>
                    <p>LinkedIn</p>
                </div>
                </div>
            </div>

        </div>
    );
}
