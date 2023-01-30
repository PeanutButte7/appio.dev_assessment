import { ReactNode } from 'react';
import { x } from '@xstyled/emotion';
import { Button } from 'anolis-ui';

interface StorySectionProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export function StorySection({ title, subtitle, children }: StorySectionProps) {
    return (
        <x.div
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='3rem'
            marginTop='6rem'
        >
            <x.h2>{title}</x.h2>
            <x.h6>{subtitle}</x.h6>
            <x.div>
                <x.div display='grid' gridTemplateColumns={3} gap='2rem'>
                    {children}
                </x.div>
                <Button alignSelf='start' marginTop='3rem'>
                    Show more C2A
                </Button>
            </x.div>
        </x.div>
    );
}