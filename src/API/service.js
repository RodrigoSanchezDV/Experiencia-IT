export const apiService = {
  onSigIn: async (sigInData) => {
    const url = "http://los_Navos_del_Backend.com";
    const data = sigInData
    const params = {
      method: "POST",
      body: JSON.stringify(sigInData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = data;
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
  onSigUp: async (sigUpData) => {
    const url = "http://los_Navos_del_Backend.com";
    const data = sigUpData
    const params = {
      method: "POST",
      body: JSON.stringify(sigUpData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = data;
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
};
