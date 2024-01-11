import React from 'react'
import { Container, Avatar, Badge, Title, Table, Group, Text, ActionIcon, Anchor, rem, SimpleGrid } from '@mantine/core';
import { IconSend,IconPhoneCall, IconAt } from '@tabler/icons-react';

import classes from '@/styles/Members.module.css';

const members = [
    {
        photo: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
        name: "Connor McCarl",
        job: "Multifamily Real Estate Syndicator",
        group: "Real Estate",
        email: "invest@connormccarl.com",
        phone: "925-378-1728"
    },
    {
        photo: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
        name: "Joe McKnight",
        job: "Property and Casualty Insurance",
        group: "Insurance",
        email: "joewmcknight@gmail.com",
        phone: "714-709-3177"
    },
]

const groupColors = {
    "Real Estate": "blue",
    "Insurance": "cyan"
}

export default function Members() {
    const rows = members.map((item) => (
        <Table.Tr key={item.name}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={30} src={item.photo} radius={30} />
              <Text fz="sm" fw={500}>
                {item.name}
              </Text>
            </Group>
          </Table.Td>
    
          <Table.Td>
            <Badge color={groupColors[item.group]} variant="light">
              {item.job}
            </Badge>
          </Table.Td>
          <Table.Td>
            <Anchor component="button" size="sm">
              {item.email}
            </Anchor>
          </Table.Td>
          <Table.Td>
            <Text fz="sm">{item.phone}</Text>
          </Table.Td>
          <Table.Td>
            <Group gap={0} justify="flex-end">
              <ActionIcon variant="subtle" color="blue">
                <IconSend style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Table.Td>
        </Table.Tr>
      ))

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
                Group Administrators
        </Title>
        <SimpleGrid cols={2} className='mt-4'>
            <Group wrap="nowrap">
                <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                size={94}
                radius="md"
                />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Property and Casualty Insurance
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        Joe McKnight
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            joewmcknight@gmail.com
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            714-709-3177
                        </Text>
                    </Group>
                </div>
            </Group>
            <Group wrap="nowrap">
                <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                size={94}
                radius="md"
                />
                <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Multifamily Real Estate Syndicator
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        Connor McCarl
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            invest@connormccarl.com
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            925-378-1728
                        </Text>
                    </Group>
                </div>
            </Group>
        </SimpleGrid>
        <Title
                order={2}
                size="h2"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
                className='mt-4 mb-2'
            >
                Group Members
        </Title>
        <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="sm">
                <Table.Thead>
                <Table.Tr>
                    <Table.Th>Member</Table.Th>
                    <Table.Th>Job Title</Table.Th>
                    <Table.Th>Email</Table.Th>
                    <Table.Th>Phone</Table.Th>
                    <Table.Th />
                </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    </Container>
  )
}
