import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface SetupProps {
    setTitle: (t: string) => void;
    previousPlayers: string[];
    setCurrentPlayers: (players: string[]) => void;
};

export const Setup: React.FC<SetupProps> = ({
    setTitle
    , previousPlayers
    , setCurrentPlayers
}) => {

    //
    // React hooks, includes, state, effects. and others
    //


    useEffect(
        () => setTitle("SetUp")
        , []
    );

    const nav = useNavigate();

    const [availablePlayers, setAvailablePlayers] = useState(
        previousPlayers.map(
            x => ({
                name: x, 
                checked: false
            })
        )
    );

    //
    // Other codes, for example, derived state and other calcs..
    //
    const numberOfChosenPlayers = availablePlayers.filter(x => x.checked).length;
    const twoTwoSevenPlayersChosen = numberOfChosenPlayers >= 2 && numberOfChosenPlayers <= 7;


    return (
        <>
            <button 
                className="btn btn-active btn-secondry btn-lg mt-4 w-full lg:w-64"
                onClick={
                    () => {
                        setCurrentPlayers(
                            availablePlayers
                                .filter(
                                    x => x.checked
                                )
                                .map(
                                    x => (
                                        x.name
                                    )
                                )
                        );
                         nav('/play')
                    }
                        
                }
                disabled={!twoTwoSevenPlayersChosen}  
            >  
              {
                twoTwoSevenPlayersChosen
                ? "start Playing"
                : "Choose 2-7 Players"
              }
            </button>
            <div className="mt-4"
            >
                {
                    availablePlayers.map(
                        x => (
                            <label
                                key={x.name}
                                className="block mt-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="checkbox mr-2"
                                    checked={x.checked}
                                    onChange={
                                        () => setAvailablePlayers(
                                            availablePlayers.map(
                                                y => ({
                                                    name: y.name
                                                    , checked: y.name === x.name 
                                                        ? !y.checked
                                                        : y.checked
                                                })
                                            )
                                        )
                                    }
                                />
                                {x.name}
                            </label>
                        )
                    )
                }
            </div>
        </>

    );
};