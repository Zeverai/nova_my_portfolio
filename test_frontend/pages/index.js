import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Rates from '../components/Rates'

const Index = (props) => {
    console.log('This is the Index Page')
    return (

        <Layout>
            <h1>[ Home Page ]</h1>
            <Rates rates={props.data}/>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
    const data = await res.json();
    return {
        data
    }
};



export default Index;