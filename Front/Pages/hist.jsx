import { useContext, useEffect } from 'react';
import MatchListProvider, {MatchListContext} from '../src/components/Contexts/MatchConditions';


function HistContent({matches: matchesprop}) {
  const { matches, fetchMatches } = useContext(MatchListContext);

  useEffect(() => {
    fetchMatches();
}, []);

  return (
    <MatchListProvider>
      <div>
          <ul>
              {matches && matches.map((match) => (
                  <li key={match._id}>
                      Match ID: {match._id}, Joueur 1: {match.user1.username}, Joueur 2: {match.user2?.username || 'En attente'}
                  </li>
              ))}
          </ul>
      </div>
      <div>
        <List />
      </div>
    </MatchListProvider>
  );
}

export { HistContent };

