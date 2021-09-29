import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

const Loading = ({isLoading = false}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'loading/setIsLoading', payload: isLoading})
    },)

    return null;
};

export default Loading;
