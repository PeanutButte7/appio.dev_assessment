import styles from './NavbarLink.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { x } from '@xstyled/emotion';
import './NavbarLink.module.scss';

interface NavbarLinkProps {
    link: string;
    label: string;
}

export function NavbarLink({ link, label }: NavbarLinkProps) {
    const router = useRouter();

    return (
        <Link href={link}>
            <x.p
                className={router.pathname == link ? styles.activeLink : ''}
                fontSize='1rem'
                color={{ _: 'react-blue', hover: 'white' }}
                cursor='pointer'
                py='1.5rem'
            >
                {label}
            </x.p>
        </Link>
    );
}
