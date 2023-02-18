import React, {useState} from 'react';
import Loading from "@/components/Loading/index.jsx";

const LoadingContainer = (props) => {

    const {children} = props;

    const [loading, setLoading] = useState(true);

    return loading ? <Loading/> : children;
}

export default LoadingContainer;