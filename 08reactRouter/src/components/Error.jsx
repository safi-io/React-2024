import { useRouteError } from "react-router-dom";

export default function Error() {
    const errorDetails = useRouteError();
    return(
        <>
        <h1>Error Page</h1>
        <p>{errorDetails.data}</p>
        </>
    );

}