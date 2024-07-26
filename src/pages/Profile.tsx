import Details from "./Details.tsx";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();

    return (
        <>
            <Details LLMid={parseInt(id ?? "")} />
        </>
    );
};

export default Profile;