import { x } from '@xstyled/emotion';
import { Button } from 'anolis-ui';

export function HeroSection() {
    return (
        <x.div
            bg='hero'
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingTop='7rem'
            paddingBottom='6rem'
        >
            <x.h1 fontWeight='300' letterSpacing='-0.02em' marginTop='1rem'>
                Nauč se React s námi!
            </x.h1>
            <x.h6 textAlign='center' marginTop='1.4rem' maxWidth='730px'>
                Sérií místa by dostal stopa kotel soudí byl, miliony obou v
                superexpoloze s oborechjednou hibernujícím výborná slavný.
            </x.h6>
            <Button fontSize='24px' py='1.6rem' px='4rem' marginTop='4rem'>
                C2A Fun Academy
            </Button>
        </x.div>
    );
}
