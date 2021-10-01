import Home from "../features/home/Home";
import {Auth} from "aws-amplify";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const index = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'auth/setIsAuthorized', payload: props.isAuthorized})
    },[])

    return (
        <Home/>
    )
}

export default index

export async function getServerSideProps(context) {
    try {
        const user = await Auth.currentAuthenticatedUser();

        return {
            props: {
                isAuthorized: !!user,
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {},
        }
    } finally {
    }
}
