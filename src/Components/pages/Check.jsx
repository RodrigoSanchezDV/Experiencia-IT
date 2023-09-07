import "../styles/Check.css";
import logo2 from '/Logo2.png'; // Reemplaza con la ruta de tu logo

export default function Check() {
    return (
        <div className="check-container">
            <img src={logo2} alt="Logo2" className="logo2" />
            <div className="button-container">
                <button className="button">SOY EMPLEADO</button>
                <button className="button">SOY EMPRESA</button>
                <button className="button">SOY RECRUITER</button>
            </div>
        </div>
    );
}
