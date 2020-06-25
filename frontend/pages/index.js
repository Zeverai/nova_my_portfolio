import React from 'react';
import Card from 'components/Card/Card';
import fetch from 'isomorphic-unfetch';


export default function Index () {
    return (
        <div>
            <Card>
                Lets get to building.
            </Card>
        </div>
    )
}

Index.getInitialProps= async () => {

    let res, data, projects;
    try {
        // make api request here
        // fetch returns a promise
        res = await fetch('http://142.93.61.248:8000/api/v1/project/');
        data = await res.json();
        projects = data.objects;

    } catch(error) {

        console.error(error)

    } 

    return {
        
        projects

    }  
};