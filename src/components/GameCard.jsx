import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function GameCard({gameInfo}) {

  function getGameId(getId){
    console.log(getId);
  }
 

  return (
<div  onClick={()=>getGameId(gameInfo.id)}>
<NavLink to={`/games/${gameInfo.id}`}>
<Card className="py-4 bg-gray-800 text-yellow-700 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg" >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{gameInfo.name} </h4>
        <p className="text-default-500 uppercase font-bold">Release Date-{gameInfo.released}</p>
        <small className="text-default-500">Rating - {gameInfo.rating} / 5</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-[300px] h-[200px] hover:blur-[1px] "
          src={`${gameInfo.background_image}`}
        />
      </CardBody>
    </Card>
</NavLink>
</div>
  );
}