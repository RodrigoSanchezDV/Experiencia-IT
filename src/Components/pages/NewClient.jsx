import React, { useState } from "react";
import "../styles/NewClient.css"; // Importa tu archivo CSS para estilos personalizados
import SearchBar from "../pageComponents/SearchBar";

export default function NewClient() {
  const initialClients = [
    {
      razonSocial: "ACliente",
      nCuit: "12345678-1",
      domicilioSocial: "Calle 123, Ciudad 1",
      rubro: "Rubro 1",
      email: "cliente1@example.com",
      telefono: "123-456-7890",
      paginaWeb: "www.cliente1.com",
      acciones: "No se ",
    },
    {
      razonSocial: "BCliente",
      nCuit: "12345678-1",
      domicilioSocial: "Calle 123, Ciudad 1",
      rubro: "Rubro 1",
      email: "cliente2@example.com",
      telefono: "123-456-7890",
      paginaWeb: "www.cliente2.com",
      acciones: "No se ",
    },
    {
      razonSocial: "CCliente ",
      nCuit: "12345678-1",
      domicilioSocial: "Calle 123, Ciudad 1",
      rubro: "Rubro 1",
      email: "cliente3@example.com",
      telefono: "123-456-7890",
      paginaWeb: "www.cliente3.com",
      acciones: "No se ",
    },
    {
      razonSocial: "DCliente ",
      nCuit: "12345678-1",
      domicilioSocial: "Calle 123, Ciudad 1",
      rubro: "Rubro 1",
      email: "cliente4@example.com",
      telefono: "123-456-7890",
      paginaWeb: "www.cliente4.com",
      acciones: "No se ",
    },
    {
      razonSocial: "ECliente ",
      nCuit: "12345678-1",
      domicilioSocial: "Calle 123, Ciudad 1",
      rubro: "Rubro 1",
      email: "cliente5@example.com",
      telefono: "123-456-7890",
      paginaWeb: "www.cliente5.com",
      acciones: "No se ",
    },
  ];

  const [clients, setClients] = useState(initialClients);
  const [sortOrder, setSortOrder] = useState("asc"); // Por defecto, orden ascendente

  const handleSortByRazonSocial = () => {
    const sortedClients = [...clients];
    sortedClients.sort((a, b) => {
      const nameA = a.razonSocial.toLowerCase();
      const nameB = b.razonSocial.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setClients(sortedClients);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Cambia el orden actual
  };

  const [filteredClients, setFilteredClients] = useState(clients);

  const handleSearch = (searchTerm) => {
    // Filtrar la lista de clientes según el término de búsqueda
    const filtered = clients.filter((client) =>
      client.razonSocial.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  return (
    <div className="employee-list-container">
      <h2>Lista de Clientes</h2>
      <SearchBar onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>
              Razon Social{" "}
              <select onChange={handleSortByRazonSocial} value={sortOrder}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </th>
            <th>N Cuit</th>
            <th>Domicilio Social</th>
            <th>Rubro</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Pagina Web</th>
            <th>Acciones</th>
            {/* Agregar otras columnas según tus necesidades */}
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client, index) => (
            <tr key={index}>
              <td>{client.razonSocial}</td>
              <td>{client.nCuit}</td>
              <td>{client.domicilioSocial}</td>
              <td>{client.rubro}</td>
              <td>{client.email}</td>
              <td>{client.telefono}</td>
              <td>{client.paginaWeb}</td>
              <td>{client.acciones}</td>
              {/* Agregar datos de otras columnas según corresponda */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button>Añadir nuevo cliente</button>
      </div>
    </div>
  );
}
