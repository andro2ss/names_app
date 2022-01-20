import React from 'react';
import BasicTable from "../TopNames/Items/Table";
import {kidNameForm} from "./Items/KidNameForm";

function GenerateKidName(props) {
    return (
        <>
            <div className="generateKidName">
                <h2>Znajdź imię dla swojej pociechy</h2>
                <div className="generateKidName__container">
                    {kidNameForm()}
                    <BasicTable/>
                </div>
            </div>
        </>
    );
}

export default GenerateKidName;