import { useNavigate } from "react-router";

interface HomeProps {
    totalGameCount: number;
};

export const Home: React.FC<HomeProps> = ({
    totalGameCount
}) => {

    // Use a react for hook navigation...
    const nav = useNavigate();

    return (
        <>
            <h3
                className='text-2xl font-bold'
            >
                Home ({totalGameCount} games played)
            </h3>
            <button 
                className="btn btn-active btn-secondry btn-lg mt-4"
                onClick={
                    () => nav("/setup")
                }

            >
                Play Foosball
            </button>
        </>

    );
};