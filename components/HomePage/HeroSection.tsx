import { x } from '@xstyled/emotion';
import { Button } from 'anolis-ui';

export function HeroSection() {
    return (
        <x.div
            bg='hero'
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='2rem'
            py='6rem'
        >
            <x.h1>Nauč se React s námi!</x.h1>
            <x.h6>
                Sérií místa by dostal stopa kotel soudí byl, miliony obou v
                superexpoloze s oborechjednou hibernujícím výborná slavný.
            </x.h6>
            <Button s='lg'>C2A Fun Academy</Button>
        </x.div>
    );
}
