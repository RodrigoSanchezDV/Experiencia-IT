export const apiService = {
  URLBASE: "http://programar_reunion_backend.com",
  onSignIn: async (sigInData) => {
    const url = apiService.URLBASE;
    const params = {
      method: "POST",
      body: JSON.stringify(sigInData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = {
        status: true,
        data:{
          rol: "reclutador",
          id: "1",
          email: "xxprueba@gmail.com",
          user_name: "Rodrigo Sanchez"
        }
      };
    try {
      /* res = await fetch(url, params); */
    } catch (error) {
      console.log({ message: "Error al intentar iniciar sesion", error });
    }
    /*     if (!res.ok) {
      return await res.json();
    }
    return await res.json(); */
    return res;
  },
  onSignUp: async (sigUpData) => {
    const url = apiService.URLBASE;
    const params = {
      method: "POST",
      body: JSON.stringify(sigUpData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = sigUpData;
    try {
      /* res = await fetch(url, params); */
    } catch (error) {
      console.log({ message: "Error al intentar registrarse", error });
    }
    /*     if (!res.ok) {
      return await res.json();
    }
    return await res.json(); */
    return res;
  },
  onLogOut: async (logOutData) => {
    const url = apiService.URLBASE;
    const params = {
      method: "POST",
      body: JSON.stringify(logOutData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = logOutData;
    try {
      /* res = await fetch(url, params); */
    } catch (error) {
      console.log({ message: "Error al intentar cerrar sesion", error });
    }
    /*     if (!res.ok) {
      return await res.json();
    }
    return await res.json(); */
    return res;
  },
  onSearch: async (searchRequest,typeOfSearch) => {

    const searchFor = `/${typeOfSearch}?search=`            //* defino que voy a buscar (vacantes, empleados, postulantes, etc..)
    const request = searchRequest.trim().replace(" ","&")   //* limpio el string de espacios y lo preparo para la query
    const url = apiService.URLBASE + searchFor + request;
    console.log(url);
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch(url,params)
      return await res.json()
    } catch (error) {
      console.log({message: "error al intentar buscar", error});
    }
  },
  onSearchAll: async(typeOfSearch)=>{                           //* Trae todo loq ue hayamos buscado (vacancies, empleados, etc..)
    const url = apiService.URLBASE + `/${typeOfSearch}`
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch(url,params)
      searchResponse = res.json()
      return searchResponse;
    } catch (error) {
      console.log({message: "error al intentar buscar todos", error});
    }
  },
  getProfile: async userID => {
    const url = apiService.URLBASE + "/profile/"
    const data = {
      userID
    };
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    };
    let res = {
      name: "Rodrigo Sanchez",
      pais: "Argentina",
      provincia: "Rio Negro",
      edad: "21",
      fecha_nacimiento: "21/03/2002"
    }
/*     try {
      res = await fetch(url,params)  
    } catch (error) {
      console.log({message: "error al obtener el perfil", error});
    } */
  /* return await res.json() */
  return res
  }
};



/* 
const roles = {
  solicitante,
  reclutador,
  empleador,
  experienciaIT(admin)
}
*/