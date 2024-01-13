import React, { useState, useEffect, useRef } from 'react';
import TopImages from './Item';
import GameItem from './Item';
import { useParams } from 'react-router-dom';
import './Components&Style/Style.css';

const Shifumi = () => {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const eventSource = useRef(null); 
  const [turnNumber, setTurnNumber] = useState(1);
  const [move, setMove] = useState(null);

  const retrieveMatch = async () => {
    try {
      const response = await fetch(`http://fauques.freeboxos.fr:3000/matches/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMatch(data);
        if (data.user2) {
          setLoading(false);
        }
      } else {
        throw new Error(`Error retrieving match: ${response.status}`);
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleMove = async (move) => {
    setMove(move);

    try {
      await fetch(`http://fauques.freeboxos.fr:3000/matches/${id}/turns/${turnNumber}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({ move }),
      });

      setTurnNumber(turnNumber + 1);
    } catch (error) {
      console.error('Error handling move:', error);
    }
  };

  useEffect(() => {
    retrieveMatch();

    const eventSource = new EventSource(`http://fauques.freeboxos.fr:3000/matches/${id}/subscribe`);

    eventSource.current = eventSource;

    eventSource.addEventListener('message', (event) => {
      try {
        const data = JSON.parse(event.data);
        setMatch(data);
      } catch (error) {
        console.error('Error parsing match update:', error);
      }
    });

    return () => {
      
      if (eventSource.current) {
        eventSource.current.close();
      }
    };
  }, []);

  if (loading) {
    return <div className='wait'>Waiting for player...</div>;
  }

  return (
    <div>
      <div>
        <h1>{match && match.user1 && match.user1.username ? match.user1.username : 'Loading...'} vs {match && match.user2 && match.user2.username ? match.user2.username : 'Waiting for player...'}</h1>
        <TopImages />
      </div>

      <GameItem onChoice={handleMove} />
    </div>
  );
};

export default Shifumi;
