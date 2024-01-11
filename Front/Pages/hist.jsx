

const CreateAGame = () => {
    const [history, setHistory] = useState([]);
    const [creatingGame, setCreatingGame] = useState(false);
    
    const handleCreateGame = async () => {
      try {
        const newGame = await addGame();
        console.log("Game créé avec succès:", newGame);
        setCreatingGame(true);
        setHistory((prevHistory) => [...prevHistory, newGame]);
      } catch (error) {
        console.error("Erreur lors de la création du game:", error);
      }
    };
  
    useEffect(() => {
      if (creatingGame) {
        setCreatingGame(false);
     
      }
    }, [creatingGame]);
  
    return (
      <>
        <div>
          <p>Connecté en tant que : <strong>{user?.username}</strong></p>
          <p>Page de liste de games</p>
          <a href="/login">Déconnexion</a>
        </div>
        <div>
          <button onClick={handleCreateGame} disabled={creatingGame}>
            Créer un game
          </button>
          <GameListProvider>
            <GameList />
          </GameListProvider>
        </div>
        <div>
          <h2>Historique des parties :</h2>
          <ul>
            {history.map((game) => (
              <li key={game.id}>
                {/* Affichez les détails de chaque partie comme vous le souhaitez */}
                {game.date} - {game.result}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default CreateAGame;
  