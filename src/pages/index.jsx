import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Home from "../features/home/Home";

const index = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'navigation/setSelectedIndex', payload: 'home'})
    }, [])

    return (
        <Home/>
    )
}

export default index
