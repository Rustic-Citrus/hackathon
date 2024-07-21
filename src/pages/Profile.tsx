import Details from "./Details.tsx";
import { useParams } from "react-router-dom";

export const Profile = () => {
    const { id } = useParams();

    return (
        <>
            <Details id={parseInt(id ?? "")} />
        </>
    );
};

export default Profile;