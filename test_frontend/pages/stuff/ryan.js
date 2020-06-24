import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = () => {
    console.log('This is the Index Page')
    return (
        <Layout>
            <h1>[ Ryan Page ]</h1>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
    const data = await res.json();
    return {
        data,
        ryan: 'This is the Ryan data. Hello Ryan data!'
    }
};

export default Index;