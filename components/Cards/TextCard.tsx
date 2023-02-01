import { x } from '@xstyled/emotion';
import { Tag, TextLink } from 'anolis-ui';
import styles from './Card.module.scss';

interface StoryCardProps {
    id: string;
    tags: string[];
    title: string;
    description: string;
}

export function TextCard({ id, tags, title, description }: StoryCardProps) {
    return (
        <x.div
            className={styles.textCard}
            w='416px'
            display='flex'
            gap='2rem'
            flexDirection='column'
            alignItems='start'
        >
            <x.div>
                <x.h4 color='primary' marginBottom='1rem'>
                    {title}
                </x.h4>
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
            </x.div>
            <x.p>{description}</x.p>
            <TextLink href={'/story/' + id}>Story detail</TextLink>
        </x.div>
    );
}
