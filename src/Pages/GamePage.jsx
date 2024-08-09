import React, { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import GameCard from "../components/GameCard";
import { data } from 'autoprefixer';

function GamePage() {
    const [gameList, setGamelist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          await fetch(
            `https://api.rawg.io/api/games?key=${import.meta.env.VITE_MY_KEY}`
          )
            .then((response) => response.json())
            .then((data) => {
              setGamelist(data.results);
              setNextPage(data.next);
            });
          setLoading(false);
          console.log(data);
          
        };
    
        fetchData();
      }, []);
    
      const loadMoreGames = async () => {
        event.preventDefault();
        if (nextPage) {
          setLoading(true);
          await fetch(nextPage)
            .then((response) => response.json())
            .then((data) => {
              setGamelist((prevGames) => [...prevGames, ...data.results]);
              setNextPage(data.next);
            });
          setLoading(false);
        }
      };
    
      console.log(gameList);
    

  return (
    <>

    <div className='bg-slate-900 py-1'>
    <h1 className='my-11 text-center text-4xl text-slate-100 font-semibold'> All Games </h1>

{loading ? (
  <div className="w-[100%] h-[100vh] flex justify-center items-center">
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md h-auto"
    />
  </div>
) : (
  <div className="flex container mx-auto gap-7 flex-wrap my-4 justify-center">
    {gameList.map((game) => (
      <GameCard key={game.id} gameInfo={game} />
    ))}
  </div>
)}

{nextPage && (
  <div className="flex justify-center my-5">
    <Button onClick={loadMoreGames} color="warning" variant="flat">
      More Games . . .
    </Button>
  </div>
)}
    </div>
    </>
  )
}

export default GamePage;