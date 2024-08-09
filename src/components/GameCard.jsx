import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function GameCard({gameInfo}) {
  return (
    <Card className="py-4 bg-gray-800 text-yellow-700 cursor-pointer">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{gameInfo.name} </h4>
        <p className="text-default-500 uppercase font-bold">Release Date-{gameInfo.released}</p>
        <small className="text-default-500">Rating - {gameInfo.rating} / 5</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-[300px] h-[200px] "
          src={`${gameInfo.background_image}`}
        />
      </CardBody>
    </Card>
  );
}