import { useNavigate } from "react-router";

interface SetupProps {
    setTitle: (t: string) => void;
};

export const Setup: React.FC<SetupProps> = ({
    setTitle
}) => {

    setTitle("Setup")

    const foobarcat = useNavigate();

    return (
        <>
            <button 
                className="btn btn-active btn-secondry btn-lg mt-4"
                onClick={
                    () => foobarcat('/play')
                }
            >
               Start Playing 
            </button>
        </>

    );
};