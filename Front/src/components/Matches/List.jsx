import { useContext, useEffect } from 'react';

import { MatchListContext } from '../Contexts/MatchConditions';
const List = () => {


  const { matches, fetchMatches } = useContext(MatchListContext);

  useEffect(() => {
    // Mettre à jour la liste des matches
    fetchMatches();
  }, []);

  return (
    <div>
      <h3>Liste des matchs :</h3>
      <ul>
        {matches.map((match) => (
          <li key={match._id}>
            Match ID: {match._id}, Joueur 1: {match.user1.username}, Joueur 2: {match.user2?.username || 'En attente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;