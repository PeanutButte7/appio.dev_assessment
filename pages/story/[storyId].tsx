import { useRouter } from 'next/router';
import { Layout } from 'components/Layout';

export default function Subject() {
    const router = useRouter();
    const { storyId } = router.query;

    return (
        <Layout>
            <h1>Subject {storyId}</h1>
        </Layout>
    );
}
