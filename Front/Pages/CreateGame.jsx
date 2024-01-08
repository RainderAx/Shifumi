export default function CreateAGame() {
    const handleCreateGame = async () => {
      try {
        const newGame = await addGame();
        console.log("Game créé avec succès:", newGame);
        setCreatingGame(true);
      } catch (error) {
        console.error("Erreur lors de la création du game:", error);
      }
    };
  
    useEffect(() => {
      if (creatingGame) {
        setCreatingGame(false);
        fetchGames();
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
      </>
    );
  }
  