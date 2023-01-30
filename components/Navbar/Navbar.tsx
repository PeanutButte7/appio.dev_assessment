import { x } from '@xstyled/emotion';
import { useRouter } from 'next/router';
import { NavbarLink } from './NavbarLink';
import { ReactFun, ReactLogo } from 'assets';

export function Navbar() {
    const router = useRouter();
    const availableJobs = 9;

    return (
        <x.div display='flex' justifyContent='space-evenly'>
            <x.div display='flex' alignItems='center' gap='1rem'>
                <ReactLogo />
                <ReactFun />
            </x.div>
            <x.div display='flex' gap='5'>
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
                px='1rem'
                fontWeight='600'
                cursor='pointer'
            >
                <x.span fontSize='1rem'>Pracuj v Reactu</x.span>
                <x.span
                    fontSize='1rem'
                    bg='dark'
                    color='magenta'
                    w='34px'
                    h='34px'
                    textAlign='center'
                    padding='8px'
                    borderRadius='50%'
                >
                    {availableJobs}
                </x.span>
            </x.div>
        </x.div>
    );
}
