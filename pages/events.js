import React from 'react'
import { Container, Title, SimpleGrid, Group, Avatar, Text, Image } from '@mantine/core';
import { IconMapPin, IconWorldWww } from '@tabler/icons-react';

import classes from '@/styles/Events.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";

export default function Events() {
    const rows = [
        {
            title: "Poker Tournament",
            day: "Feb 2, 2024",
            time: "07:00 PM - 11:00 PM",
            location: "Muldoon's Irish Pub",
            location_url: "https://www.google.com/maps?saddr=My+Location&daddr=Muldoon%27s+Irish+Pub,+202+Newport+Center+Dr,+Newport+Beach,+CA+92660",
            description: "Come have an exciting night of Poker and Networking.",
            image: "https://test.connormccarl.com/images/poker.png"
        }
    ]

  return (
    <Container size='md'>
        <Title
                order={2}
                size="h2"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
                className='mt-2'
            >
                Event Sponsors
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} className='my-4'>
            <Group wrap="nowrap">
                <Avatar
                src="https://test.connormccarl.com/images/muldoons_logo.png"
                size={94}
                radius="none"
                />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Restaurant
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        Muldoon&apos;s Irish Pub
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconWorldWww stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            www.muldoonspub.com
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconMapPin stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            202 Newport Center Dr, Newport Beach, CA 92660
                        </Text>
                    </Group>
                </div>
            </Group>
            <Group wrap="nowrap">
                <Avatar
                src="https://test.connormccarl.com/images/elwoodclub_logo.png"
                size={94}
                radius="0"
                />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Members Club
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        The Elwood Club
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconWorldWww stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            www.elwoodclub.com
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconMapPin stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            Pendry Newport Beach, Newport Beach, CA 92660 
                        </Text>
                    </Group>
                </div>
            </Group>
        </SimpleGrid>
        { rows.map((row, index) => (
            <div className="row align-items-center shadow py-2" key={index}>
                <div className="col-lg-5 col-sm-12">
                    <div className="position-relative">
                        <Image
                            src={row.image}
                            h={280}
                            w={450}
                            className='img-fluid mx-auto'
                        />
                        <div className={classes.eventsDate}>
                            <div className={classes.eventDateDay}>{row.day.split(' ')[1].replace(',','')}</div>
                            <div className={classes.eventDateMonth}>{row.day.split(' ')[0]}</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className="p-2 p-sm-1 px-md-3 px-3">
                        <h5 className="fw-bold">{row.title}</h5>
                        <ul className="my-2">
                            <li className='d-inline me-3'><FontAwesomeIcon icon={faClock} /> {row.time}</li>
                            <li className='d-inline'><FontAwesomeIcon icon={faUser} /> Location: <a target="_blank" href={row.location_url}>{row.location}</a></li>
                        </ul>
                        <p>{row.description}</p>
                        <button className="btn btn-link text-decoration-none" href="#">RSVP <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </div>
                </div>
            </div>
        ))}
    </Container>
  )
}
