import { useNavigate } from "react-router";

interface SetupProps {
};

export const Setup: React.FC<SetupProps> = ({
}) => {

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