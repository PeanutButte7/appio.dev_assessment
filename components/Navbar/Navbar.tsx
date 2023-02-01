import { x } from '@xstyled/emotion';
import { NavbarLink } from './NavbarLink';
import { ReactFun, ReactLogo } from 'assets';

export function Navbar() {
    const availableJobs = 9;

    return (
        <x.div
            display='flex'
            justifyContent='space-between'
            px='16vw'
            bg='darker'
        >
            <x.div display='flex' alignItems='center' gap='0.4rem'>
                <ReactLogo />
                <ReactFun />
            </x.div>
            <x.div display='flex' gap='2rem' marginLeft='4rem'>
                <NavbarLink link='/' label='Objevuj' />
                <NavbarLink link='/learn' label='Nauč se' />
                <NavbarLink link='/test' label='Otestuj se' />
                <NavbarLink link='/work' label='Pracuj' />
            </x.div>
            <x.div
                display='flex'
                alignItems='center'
                gap='0.5rem'
                bg='magenta'
                px='1.2rem'
                fontWeight='600'
                cursor='pointer'
                fontSize='1rem'
            >
                <x.span fontSize='1rem'>Pracuj v Reactu</x.span>
                <x.span
                    bg='dark'
                    color='magenta'
                    w='28px'
                    h='28px'
                    textAlign='center'
                    padding='5px'
                    borderRadius='50%'
                >
                    {availableJobs}
                </x.span>
            </x.div>
        </x.div>
    );
}
