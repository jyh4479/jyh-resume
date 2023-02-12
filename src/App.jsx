import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

import {Resume} from "@/pages";

const App = () => {
    return (
        <RecoilRoot>
            <Resume/>
        </RecoilRoot>
    )
}

export default App;