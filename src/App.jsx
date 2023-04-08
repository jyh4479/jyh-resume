import React from 'react';
import {RecoilRoot} from 'recoil';

import {Resume} from "@/pages";

const App = () => {
    return (
        <RecoilRoot>
            <Resume/>
        </RecoilRoot>
    )
}

export default App;