Note De Cours 2

* useState = une variable de stage, surveille le changment de la variable et permet de recuperer sa dérniere version.
           = Utiliser seulement a l'interieur de la composante. Il est utiliser comme un couple avec useEffect.
    - const [age, setAge] = useState(0)
    - Comme un getter et setter = [age, setAge] , modifier avec set. 
    - (0), ([]), ("") == donne le type qu'on veut. 

* UseEffect = C'est une fonction native, qui permet de faire des calls Http quand on utilise quelque chose qui  ne nous appartient pas
 
* Axios et fetch = 
    Permet de faire des call Rest , on va utiliser principalement get qui premet comme param URL
    Rest = Get, Post, Delete, Patch, Put

Quelle est la difference entre Axios et Fetch ?
    axios : Doit etre installer, pour tout les browser, plus simple
    fetch : natif dans react, limite

 <!-- //A Faire : tabUser.map((ligne, count) => (
                    <tr key={count}>

Routage : 
function App() { -->

  <!-- return (
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/listAxios' element={<ListUserAxios/>}/>
        <Route path='/listFlech' element={<ListUserFlech/>}/>
        <Route path='/options/1' element={<Inscription/>}/>
        <Route path='/options/2' element={<Modification/>}/>
        <Route path='/options/3' element={<Suppression/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    
  );
} 


-- Link 
<a class="navbar-brand">
          <Link to="/"> Mon Projet</Link>
        </a>

-- Utiliser UseEffect et UseState

function ListUserAxios() {
  const [tabUser, setTabUsers] = useState([]);

  // Prend les info, l'es met dans une variable qu'on met dans le setter du tableau et puis on retourne le tableau
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => setTabUsers(reponse.data))
      .catch((err) => console.log(err)); //s'il y a une erreur, on le catch et le met dans le log console
  }, []);

function ListUserFetch() {
    const [tabUser, setTabUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(reponse => reponse.json()) // Il faut préciser quelle est le type de fichier , C'est une difference avec axios
      .then(data => setTabUsers(data))
      .catch((err) => console.log(err)); 
  }, []);
-->

