const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				
					fetch("https://playground.4geeks.com/contact/agendas/Cesar/contacts")
					.then((response)=>response.json())
					.then(data => setStore({ contacts: data.contacts }))
				
			},
			createcontact: (data) => {
                
                console.log(data);
                const URL = "https://playground.4geeks.com/contact/agendas/Cesar/contacts";
                const opt = {
                    method: "POST",
                    headers: {
                        "Content-type": "Application/json",
                    },
                    body: JSON.stringify(data),
                };
                fetch(URL, opt)
                    .then((response) => {
                        console.log("Respuesta:", response);
                        if (response.ok) {
                           
                            alert("Contacto creado exitosamente");
                        } else {
                            alert("Error al crear contacto");
                        }
                    })
                    .catch((error) => {
                        console.log("Error:", error);
                        alert("Error al crear contacto");
                    });
            },
			deleteContact: (id) => {
				console.log("funciona")
				console.log(id)
                const actions = getActions();
               
                fetch(`https://playground.4geeks.com/contact/agendas/Cesar/contacts/${id}`, {
                    method: "DELETE"
                })
                .then((response) => {
                    console.log("Respuesta:", response);
                    if (response.ok) {
                        actions.loadSomeData(); // Actualizar contactos después de la eliminación.
                        alert("Contacto eliminado exitosamente");
                    } else {
                        alert("Error al eliminar contacto");
                    }
                })
                .catch((error) => {
                    console.log("Error:", error);
                    alert("Error al eliminar contacto");
                });
            },
            editcontact: (data,id) => {
                console.log(id)
                console.log(data)
                const actions = getActions();
                const URL = `https://playground.4geeks.com/contact/agendas/Cesar/contacts/${id}`;
                const opt = {
                    method: "PUT",
                    headers: {
                        "Content-type": "Application/json",
                    },
                    body: JSON.stringify(data),
                };
                fetch(URL, opt)
                    .then((response) => {
                        console.log("Respuesta:", response);
                        if (response.ok) {
                            actions.loadSomeData(); 
                            alert("Contacto actualizado exitosamente");
                        } else {
                            alert("Error al actualizar contacto");
                        }
                    })
                    .catch((error) => {
                        console.log("Error:", error);
                        alert("Error al actualizar contacto");
                    });
            },
		}
	};
};

export default getState;
