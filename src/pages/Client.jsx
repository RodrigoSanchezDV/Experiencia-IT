import { useState, useEffect } from "react";
import "../styles/Client.css";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router-dom";
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
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredClients, setFilteredClients] = useState(clients);

  useEffect(() => {
    const sortedClients = [...filteredClients];
    sortedClients.sort((a, b) => {
      const nameA = a.razonSocial.toLowerCase();
      const nameB = b.razonSocial.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setFilteredClients(sortedClients);
  }, [sortOrder, filteredClients]); // Este efecto se ejecutará cuando cambie sortOrder o filteredClients

  const handleSortByRazonSocial = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearch = (searchTerm) => {
    const filtered = clients.filter((client) =>
      client.razonSocial.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  return (
    <div className="client-list-container">
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
            {/* ... (otras columnas) */}
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
              {/* ... (otras celdas) */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
       
        <Link to='/newclient'> <button>Añadir nuevo cliente</button></Link>
      </div>
    </div>
  );
}
