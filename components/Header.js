import React, { useState } from 'react'
import { NextLink } from './NextLink';
import { Container, Group, Burger, Collapse, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';

import classes from '@/styles/Header.module.css';

const links = [
    { link: '/', label: 'Home' },
    { link: '/events', label: 'Events' },
    { link: '/contact', label: 'Contact' },
    { link: '/members', label: 'Members' },
  ];

export default function Header() {
    const router = useRouter()
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(router.pathname);

    const items = links.map((link) => (
        <NextLink
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                setActive(link.link)
            }}
            >
            {link.label}
        </NextLink>
    ));

  return (
    <header className={classes.header}>
        <Container size="md" className={classes.inner}>
            <div>Logo</div>
            <Group gap={5} visibleFrom="xs">
            {items}
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
        <Collapse in={opened} className={classes.dropdown} onBlur={close}>
            <Text ta="center">{items}</Text>
        </Collapse>
    </header>
  )
}
