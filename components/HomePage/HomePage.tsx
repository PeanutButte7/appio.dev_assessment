import { x } from '@xstyled/emotion';
import { HeroSection, StorySection } from 'components/HomePage';
import { StoryCard, TextCard } from 'components/Cards';

import storyCards from 'data/storyCards.json';
import textCards from 'data/textCards.json';

export function HomePage() {
    return (
        <x.div>
            <HeroSection />
            <StorySection
                title='H2 Card stories'
                subtitle='Sérií místa by dostal stopa kotel soudí byl, miliony obou v superexpoloze s oborechjednou hibernujícím výborná slavný.'
            >
                {storyCards.map(({ title, description, tags, id }) => (
                    <StoryCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        tags={tags}
                    />
                ))}
            </StorySection>
            <StorySection
                title='H2 Text stories'
                subtitle='Sérií místa by dostal stopa kotel soudí byl, miliony obou v superexpoloze s oborechjednou hibernujícím výborná slavný.'
            >
                {textCards.map(({ title, description, tags, id }) => (
                    <TextCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        tags={tags}
                    />
                ))}
            </StorySection>
        </x.div>
    );
}
