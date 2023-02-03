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
            marginTop='6rem'
        >
            <x.h2>{title}</x.h2>
            <x.h6 maxWidth='730px' textAlign='center' marginTop='2rem'>
                {subtitle}
            </x.h6>
            <x.div mx='10vw' marginTop='4rem'>
                <x.div
                    display='grid'
                    gridTemplateColumns={3}
                    gap='2rem'
                    justifyItems='center'
                >
                    {children}
                </x.div>
                <Button alignSelf='start' marginTop='3rem'>
                    Show more C2A
                </Button>
            </x.div>
        </x.div>
    );
}
