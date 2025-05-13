import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GameResult } from "./GameResults";

interface PlayProps {
    addNewGameResult: (r: GameResult) => void
    setTitle: (t: string) => void;
    currentPlayers: string[];
};

export const Play: React.FC<PlayProps> = ({
    addNewGameResult
    , setTitle
    , currentPlayers
}) => {

    useEffect(
        () => setTitle("Play")
        , []
    );

    const nav = useNavigate();

    const [turnNumber, setTurnNumber] = useState(1);

    const [startTimestamp] = useState(
        new Date().toISOString()
    );
   
    return (
        <>
            {/* <h4 
                className="text-lg font-semibold"
            >
                Turn #{turnNumber}
                <button 
                    className="btn btn-xs btn-outline btn-light ml-4"
                    onClick={
                        () => {
                            setTurnNumber(turnNumber + 1);
                            console.log(turnNumber);
                        }
                    }
                >
                    +
                </button>
            </h4> */}
                {currentPlayers.length >= 2 && (
                <div className="text-xl font-bold mt-2 mb-4 text-center">
                    {currentPlayers[0]} <span className="text-red-500">vs</span> {currentPlayers[1]}
            </div>
                )}
            <div 
                className="grid grid-cols-2 gap-2 mt-4"
            >
                {
                    currentPlayers.map(
                        x => (
                            <button
                                key={x} 
                                className="btn btn-active btn-secondry btn-lg mt-4"
                                onClick={
                                () => {
                                    console.log("papa")
                                    addNewGameResult({
                                        winner: x
                                        , players: currentPlayers
                                        , start: startTimestamp
                                        , end: new Date().toISOString()
                                        , turnCount: turnNumber
                                    });
                                    nav(-2);
                                }
                            }
                        >
                          {x} Won
                        </button>
                        )
                    )
                }

            </div>
        </>

    );
};