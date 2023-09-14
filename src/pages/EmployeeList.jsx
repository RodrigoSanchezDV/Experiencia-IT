import React, { useState } from "react";
import "../styles/EmployeeList.css"; // Importa tu archivo CSS para estilos personalizados
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";


export default function EmployeeList() {
  const initialEmployees = [
    {
      lastName: "aGomez",
      name: "Nombre 1",
      joinDate: "01/01/2022",
      department: "Departamento 1",
      user: 50000,
      email: "correo1@example.com",
      job: "Trabajo 1",
    },
    {
      lastName: "bLopez",
      name: "Nombre 2",
      joinDate: "02/01/2022",
      department: "Departamento 2",
      user: 60000,
      email: "correo2@example.com",
      job: "Trabajo 2",
    },
    {
      lastName: "cPerez",
      name: "Nombre 3",
      joinDate: "03/01/2022",
      department: "Departamento 1",
      user: 55000,
      email: "correo3@example.com",
      job: "Trabajo 3",
    },
    {
      lastName: "dDiaz",
      name: "Nombre 4",
      joinDate: "04/01/2022",
      department: "Departamento 3",
      user: 70000,
      email: "correo4@example.com",
      job: "Trabajo 4",
    },
    {
      lastName: "eGimenez",
      name: "Nombre 5",
      joinDate: "05/01/2022",
      department: "Departamento 2",
      user: 65000,
      email: "correo5@example.com",
      job: "Trabajo 5",
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
  <div className="left-content">
    <SearchBar className="searchbar-employeelist" onSearch={handleSearch} />
   
  </div>
  <div className="right-content">
    <select onChange={handleSortByLastName}>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
  </div>
</div>

<div class="employee-card">
  <div class="employee-image">
    <img src="../../img-persona.jpg" alt="Imagen del empleado"/>
  </div>
  <div class="employee-details">
    <div class="top-details">
      <div class="employee-name">Nombre: Juan</div>
      <div class="employee-lastname">Apellido: Pérez</div>
      <div class="employee-sector">Sector: Ventas</div>
    </div>
    <div class="bottom-details">
      <div class="employee-email">Email: juan@example.com</div>
      <div class="employee-username">Usuario: juanperez</div>
      <div class="employee-join-date">Fecha de Ingreso: 01/01/2023</div>
    </div>
  </div>
  <div class="employee-buttons">
    <button class="edit-button">Editar</button>
    <button class="delete-button">Eliminar</button>
  </div>
</div>



        <div>
          <button>Añadir nuevo empleado</button>
        </div>
      </div>
    </div>
  );
}





// <table>
// <thead>
//   <tr>
//     <th>
//       Apellido{" "}
      
//     </th>
//     <th>Nombre</th>
//     <th>Fecha Ingreso</th>
//     <th>Sector</th>
//     <th>Usuario</th>
//     <th>Email</th>
//     <th>Trabajo</th>

//   </tr>
// </thead>
// <tbody>
//   {employees.map((employee, index) => (
//     <tr key={index}>
//       <td>{employee.lastName}</td>
//       <td>{employee.name}</td>
//       <td>{employee.joinDate}</td>
//       <td>{employee.department}</td>
//       <td>{employee.user}</td>
//       <td>{employee.email}</td>
//       <td>{employee.job}</td>
     
//     </tr>
//   ))}
// </tbody>

// </table>