import { useNavigate } from "react-router";
import { GeneralFacts, LeaderboardEntry } from "./GameResults";
import { useEffect } from "react";


export const AppTitle = "fossball";

interface HomeProps {
    leaderboardData: LeaderboardEntry[];
    setTitle: (t: string) => void;
    generalFacts: GeneralFacts;
    gamesByMonthDate: Array<[string, number]>
};

export const Home: React.FC<HomeProps> = ({
    leaderboardData
    , setTitle
    , generalFacts
    , gamesByMonthDate
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
                        General
                    </h2>
                    <div
                        className="overflow-x-auto"
                    >
                        <table
                            className="table"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        Last Played
                                    </td>
                                    <th>
                                        {generalFacts.lastPlayed}
                                    </th>
                                </tr>

                                <tr>
                                    <td>
                                        Last Played
                                    </td>
                                    <th>
                                        {generalFacts.lastPlayed}
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Total Games
                                    </td>
                                    <th>
                                        {generalFacts.totalGames}
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Shortest Game
                                    </td>
                                    <th>
                                        {generalFacts.shortestGame}
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Longest Game
                                    </td>
                                    <th>
                                        {generalFacts.longestGame}
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        AVG Turns per Game
                                    </td>
                                    <th>
                                        {generalFacts.avgTurnsPerGame}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div
                className="card w-full bg-base-100 card-md shadow-sm mt-4"
            >
                <div

                    className="card-body p-0"
                >
                    <h2
                        className="card-title ml-3 mt-3"
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

            <div
                className="card w-full bg-base-100 card-md shadow-sm mt-4"
            >
                <div

                    className="card-body p-0"
                >
                    <h2
                        className="card-title ml-3 mt-3"
                    >
                       Games by Month 
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
                                                <th>Month</th>
                                                <th># OF GAMES</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                gamesByMonthDate.map(
                                                    x => (

                                                        <tr
                                                            key={x[0]}
                                                        >
                                                            <td>
                                                                {x[0]}
                                                            </td>
                                                            <td>
                                                                {x[1]}
                                                            </td>
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
                                <p className="mx-3 mb-3">
                                   Play a game to see
                                </p>
                            )
                    }
                </div>
            </div>
        </>
    );
};