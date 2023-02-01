import { x } from '@xstyled/emotion';
import { Tag, TextLink } from 'anolis-ui';
import styles from './Card.module.scss';

interface StoryCardProps {
    id: string;
    tags: string[];
    title: string;
    description: string;
}

export function StoryCard({ id, tags, title, description }: StoryCardProps) {
    return (
        <x.div
            className={styles.storyCard}
            w='416px'
            display='flex'
            flexDirection='column'
            alignItems='start'
            gap='2rem'
            border={2}
            borderColor={{ _: 'hero', hover: 'copy' }}
            px='2rem'
            py='2.5rem'
        >
            <x.div display='flex' flexDirection='row' gap='1rem'>
                {tags.map((tag, index) => (
                    <Tag
                        key={index}
                        backgroundImage='gradient-to-r'
                        gradientFrom='primary'
                        gradientTo='secondary'
                    >
                        {tag}
                    </Tag>
                ))}
            </x.div>
            <x.h4 color='primary'>{title}</x.h4>
            <x.p>{description}</x.p>
            <TextLink href={'/story/' + id}>Story detail</TextLink>
        </x.div>
    );
}
