import { useState, useEffect } from "react";
import "../styles/PerfilRecruiter.css";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import { apiService} from "../API/service.js";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx"
export default function PerfilRecruiter() {
    const { user } = useContext(AuthContext);
    const [profileData, setProfileData] = useState({});
    useEffect(() => {
        (async () => {
            let res = await apiService.getProfile(user.id)

            setProfileData(res)
            console.log(res)
        })()
    }, [])
    return (
        <div>
            <Header />
            <div className="perfil-container">
                
                <div className="card-container">
                    <div className="large-card">
                    <h1>Mi Perfil </h1>
                        <div className="top-section">
                            
                            <img src="../../img-persona.jpg" alt="Imagen de perfil" className="foto-perfil" />
                            <div className="info">
                                <p className="nombre-perfil">{profileData.name}</p>
                                <p>It Recruiter JR</p>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <label>Pais</label>
                            <input type="text" />
                            <label>Correo</label>
                            <input type="email" />
                            <label>Télefono</label>
                            <input type="tel" />
                            <button className="button-section">EDITAR PERFIL</button>
                        </div>
                    </div>
                    <div className="small-cards ">
                        <div className="small-card custom-centered">
                            <h3 className="h3-perfilrecruiter">Clientes asignados</h3>
                            <button className="button-perfilrecruiter">VER LISTADO</button>
                        </div>
                        <div className="small-card custom-centered">
                            <h3 className="h3-perfilrecruiter">Vacantes </h3>
                            <button className="button-perfilrecruiter">VER LISTADO</button>
                        </div>
                        <div className="small-card custom-centered">
                            <h3 className="h3-perfilrecruiter">Lista de postulantes</h3>
                            <button className="button-perfilrecruiter">VER LISTADO</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="cerrar-sesion">CERRAR SESIÓN</button>
            <Footer2 />
        </div>
    );
}

