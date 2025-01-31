import axios from "axios";
import React, { useEffect, useState } from "react";

function ListUserAxios() {
  const [tabUser, setTabUsers] = useState([]);

  // Prend les info, l'es met dans une variable qu'on met dans le setter du tableau et puis on retourne le tableau
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => setTabUsers(reponse.data))
      .catch((err) => console.log(err)); //s'il y a une erreur, on le catch et le met dans le log console
  }, []);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Longitude</th>
          </tr>
        </thead>
        <tbody>
            {
                tabUser.map((ligne, count) => (
                    <tr key={count}> 
                        <th scope="row">{ligne.id}</th>
                        <td>{ligne.name}</td>
                        <td>{ligne.email}</td>
                        <td>{ligne.address.city}</td>
                        <td>{ligne.address.geo.lng}</td>
                    </tr>
                )

                )
            }
         
        </tbody>
      </table>
    </div>
  );
}

export default ListUserAxios;
