import React, { useState } from "react";
import "../styles/EmployeeList.css"; // Importa tu archivo CSS para estilos personalizados
// import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";

export default function EmployeeList() {
  const initialEmployees = [
    {
      lastName: "Perez",
      name: "Juan",
      sector: "Ventas",
      user: "juanperez",
      email: "juan@example.com",
      date: "01/01/2023",
      img: "../../img-persona.jpg",
    },
    {
      lastName: "Sanchez",
      name: "Lucas",
      sector: "Ventas",
      user: "juanperez",
      email: "juan@example.com",
      date: "01/01/2023",
      img: "../../img-manos.png",
    },
    {
      lastName: "Perez",
      name: "Juan",
      sector: "Ventas",
      user: "juanperez",
      email: "juan@example.com",
      date: "01/01/2023",
      img: "../../img-persona.jpg",
    },
    {
      lastName: "Perez",
      name: "Juan",
      sector: "Ventas",
      user: "juanperez",
      email: "juan@example.com",
      date: "01/01/2023",
      img: "../../img-persona.jpg",
    },
    {
      lastName: "Perez",
      name: "Juan",
      sector: "Ventas",
      user: "juanperez",
      email: "juan@example.com",
      date: "01/01/2023",
      img: "../../img-persona.jpg",
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [sortOrder, setSortOrder] = useState("asc"); // Por defecto, orden ascendente

  const handleSortByLastName = (event) => {
    const selectedOrder = event.target.value;
    const sortedEmployees = [...employees];
    sortedEmployees.sort((a, b) => {
      const nameA = a.lastName.toLowerCase();
      const nameB = b.lastName.toLowerCase();

      if (selectedOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setEmployees(sortedEmployees);
  };



  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = (searchTerm) => {
    // Filtrar la lista de empleados según el término de búsqueda
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div>
      <Header />
      <div className="employee-list-container">
        <div className="text-employee-list">
          <h2 className="h2-employee-list">
            <div className="left-icon">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="text-center">
              Lista de Empleados
            </div>
          </h2>
        </div>



        <div className="searchbar-employeelist-container">

          <div className="searchbar-input-button">
            <button className="button-search">Buscar</button>
            <input
              type="text"
              placeholder="Buscar..."
            // value={searchTerm}
            // onChange={handleSearchChange}
            />
          </div>

          <div className="right-content">
          <strong>Ordenar</strong>
            <select onChange={handleSortByLastName}>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>
        </div>

        {employees.map((employee, index) => (
          <div className="employee-card" key={index}>
            <div className="employee-image">
              <img src={employee.img} alt="Imagen del empleado" />
            </div>
            <div className="employee-details">
              <div className="top-details">
                <div className="employee-name">
                  <strong>Nombre:</strong> {employee.name}
                </div>
                <div className="employee-lastname">
                  <strong>Apellido:</strong> {employee.lastName}
                </div>
                <div className="employee-sector">
                  <strong>Sector:</strong> {employee.sector}
                </div>
              </div>
              <div className="bottom-details">
                <div className="employee-email">
                  <strong>Email:</strong> {employee.email}
                </div>
                <div className="employee-username">
                  <strong>Usuario:</strong> {employee.user}
                </div>
              </div>
            </div>
            <div className="employee-buttons">
              <div className="employee-join-date">
                <strong>Fecha de Ingreso:</strong> {employee.date}
              </div>
              <div className="employee-buttons-group">
                <button className="edit-button">Editar</button>
                <button className="delete-button">Eliminar</button>
              </div>
            </div>
          </div>
        ))}

        <div>
          <button className="button-new-employee">Añadir nuevo empleado</button>
        </div>
      </div>
      <Footer2 />
    </div>

  );
}



