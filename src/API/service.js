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
          roll: "recruiter",
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
};



/* 
const roles = {
  solicitante,
  reclutador,
  empleador,
  experienciaIT(admin)
}
*/