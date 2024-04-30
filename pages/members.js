import React, { useState } from 'react'
import { Container, Avatar, Badge, Title, Table, Group, Text, ActionIcon, Anchor, rem, SimpleGrid, TextInput, ScrollArea, UnstyledButton, Center, keys } from '@mantine/core';
import { IconSend, IconPhoneCall, IconAt, IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

import classes from './Members.module.css';

const data = [
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

function Th({ children, reversed, sorted, onSort }) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
      <Table.Th className={classes.th}>
        <UnstyledButton onClick={onSort} className={classes.control}>
          <Group justify="space-between">
            <Text fw={500} fz="sm">
              {children}
            </Text>
            <Center className={classes.icon}>
              <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Center>
          </Group>
        </UnstyledButton>
      </Table.Th>
    )
}

function filterData(data, search) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(data, payload) {
    const { sortBy } = payload;
  
    if (!sortBy) {
      return filterData(data, payload.search);
    }
  
    return filterData(
      [...data].sort((a, b) => {
        if (payload.reversed) {
          return b[sortBy].localeCompare(a[sortBy]);
        }
  
        return a[sortBy].localeCompare(b[sortBy]);
      }),
      payload.search
    );
}

export default function Members() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    }

    const handleSearchChange = (event) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    }

    const rows = sortedData.map((item) => (
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
        <SimpleGrid cols={{ base: 1, md: 2 }} className='mt-4'>
            <Group wrap="nowrap">
                <Avatar
                src="./profile_joe.jpeg"
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
                            joe@korurm.com
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
                src="./profile_connor.png"
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
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700}>
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                        sorted={sortBy === 'name'}
                        reversed={reverseSortDirection}
                        onSort={() => setSorting('name')}
                        >
                        Name
                        </Th>
                        <Th
                        sorted={sortBy === 'job'}
                        reversed={reverseSortDirection}
                        onSort={() => setSorting('job')}
                        >
                        Job Title
                        </Th>
                        <Th
                        sorted={sortBy === 'email'}
                        reversed={reverseSortDirection}
                        onSort={() => setSorting('email')}
                        >
                        Email
                        </Th>
                        <Th
                        sorted={sortBy === 'phone'}
                        reversed={reverseSortDirection}
                        onSort={() => setSorting('phone')}
                        >
                        Phone
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                        <Table.Td colSpan={Object.keys(data[0]).length}>
                            <Text fw={500} ta="center">
                            Nothing found
                            </Text>
                        </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    </Container>
  )
}
