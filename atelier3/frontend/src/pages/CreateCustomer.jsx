import 'react';
import {useState} from "react"; //Manipuler les données qu'on a
import axios from "axios"; // Parler a une api (webservice)
import {useNavigate} from "react-router-dom";


function CreateCustomer() {
    //Faire un objet des champs d'un coup avec {}
    const [customer, setCustomer] = useState({
        fname:"",
        lname:"",
        email:""
    });

    //Te laisse ecrire et recuperer la donnée
    const changement = (e) => {
        // e.target = il vient se pointer dans la donnée (curser); .value = donne la donnée qui est dedans
        setCustomer({...customer, [e.target.name]:e.target.value }) // ...customer = Pense qu'il est un tableau
        //e.target.name = prend le changemtn de name et met la value
    }

    const navigate = useNavigate();

    //
    const submitNewCustomer = (e) => {
        e.preventDefault(); //bloque le reload de la page , fige l'action que tu va faire
        axios.post("http://localhost:8585/ika/newCust", customer) //ramene avec toi le formulaire
            .then(() => {
                navigate("/customersList") // si ca passe bien va sur l'autre page sans rien envoyer
            }).catch(((error) => { //sinon
                console.log(error);
        }))
    }

    //href fait tjr appelle au server donc il refleche alors que useNavigate() est direct non

    // l'Avantage de react est qu'il a pas besoin d'aller au serveur

    //Identifier les element avec name=
    //onChange={(e) : veut dire qu'il a detecte qu'il est dans un champ qu'il va changer . e = event qui va detecter le changement
    return (
            <div className="container mt-5">
                <div className="row justify-content-lg-start">
                    <div className="col-md-6">
                        <h2 className="mb-4">User Information</h2>
                        <form className="form-detail"  onSubmit={(e) => submitNewCustomer(e)} method="post">

                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label text-start d-block">First Name</label>
                                <input type="text" name="fname" className="form-control" id="firstname"
                                       placeholder="Enter your first name"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="lastname" className="form-label text-start d-block">Last Name</label>
                                <input type="text" name="lname" className="form-control" id="lastname"
                                       placeholder="Enter your last name"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-start d-block">Email</label>
                                <input type="email" name="email" className="form-control" id="email"
                                       placeholder="Enter your email"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

    );
}

export default CreateCustomer;