import { useNavigate } from "react-router";
import { LeaderboardEntry } from "./GameResults";
import { useEffect } from "react";


export const AppTitle = "fossball";

interface HomeProps {
    leaderboardData: LeaderboardEntry[];
    setTitle: (t: string) => void;
};

export const Home: React.FC<HomeProps> = ({
    leaderboardData
    , setTitle
}) => {

    // Passing a function 
    useEffect(
        () => setTitle(AppTitle)
        , []
    );

    // Use a react for hook navigation...
    const nav = useNavigate();

    return (
        <>
            <button
                className="btn btn-active btn-secondry btn-lg mt-4"
                onClick={
                    () => nav("/setup")
                }

            >
                Play Foosball
            </button>

            <div
                className="card w-full bg-base-100 card-md shadow-sm mt-4"
            >
                <div

                    className="card-body"
                >
                    <h2
                        className="card-title"
                    >
                        Leaderboard
                    </h2>
                    {
                        leaderboardData.length > 0
                            ? (
                                <div
                                    className="overflow-x-auto"
                                >
                                    <table
                                        className="table"
                                    >
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>W</th>
                                                <th>L</th>
                                                <th>AVG</th>
                                                <th>PLAYER</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                leaderboardData.map(
                                                    x => (

                                                        <tr
                                                            key={x.player}
                                                        >
                                                            <td>
                                                                {x.wins}
                                                            </td>
                                                            <td>
                                                                {x.losses}
                                                            </td>
                                                            <td>
                                                                {x.average}
                                                            </td>
                                                            <td>{x.player}</td>
                                                        </tr>
                                                    )
                                                )
                                            }
                                            {/* row 1 */}

                                        </tbody>
                                    </table>
                                </div>
                            )
                            : (
                                <p>
                                    Play a game of Foosball to see the leaderboard
                                </p>
                            )
                    }
                </div>
            </div>
        </>
    );
};