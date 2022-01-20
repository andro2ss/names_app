import React from 'react';
import VerticalTabs from "./Items/Tabs";


function TopNames(props) {

    return (
        <>
            <div className="topNames">
                <h2>Najpopularniejsze imiona</h2>
                <VerticalTabs/>
            </div>
        </>

    );
}

export default TopNames;