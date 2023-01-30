import { NextPage } from 'next';
import { HomePage } from 'components/HomePage';
import { Layout } from 'components/Layout';

const Index: NextPage = () => {
    return (
        <Layout>
            <HomePage />;
        </Layout>
    );
};

export default Index;
