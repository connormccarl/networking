import Head from 'next/head'
import { 
  Image, 
  Container, 
  Button,
  Title,
  Text, 
  List, 
  ThemeIcon, 
  rem, 
  Badge,
  Group,
  Card,
  SimpleGrid,
  useMantineTheme, } from '@mantine/core';
import { IconCheck, IconClubsFilled, IconGlassFullFilled, IconUser } from '@tabler/icons-react';
import image from '@/public/image.svg';

import classes from './Index.module.css';

const mockdata = [
  {
    title: 'Poker Tournaments',
    description:
      'Immerse yourself in the thrilling world of poker tournaments, where strategic prowess, unpredictable twists, and high-stakes excitement converge to create an engaging and dynamic connecting experience.',
    icon: IconClubsFilled,
  },
  {
    title: 'Whiskey/Tequila Tastings',
    description:
      'Indulge in a dynamic and flavorful experience with whiskey and tequila tastings, where the distinct character of each spirit intertwines, offering a delightful journey through the world of fine spirits and convivial enjoyment.',
    icon: IconGlassFullFilled,
  },
  {
    title: 'Guest Speakers',
    description:
      'Discover a wealth of knowledge and inspiration as insightful guest speakers captivate and enlighten audiences with their expertise, fostering engaging dialogues that leave a lasting impact.',
    icon: IconUser,
  },
]

export default function Home() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.black}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <>
      <Head>
        <title>Networking App</title>
        <meta charset="utf-8" />
        <meta name="description" content="Networking for Orange County's Elite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              An <span className={classes.highlight}>exclusive</span> Elite <br /> networking group
            </Title>
            <Text c="dimmed" mt="md">
              Build meaningful connections faster than what you could do on your own - participate in fun, entertaining, invite-only networking activities that will have you wanting more
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Broad</b> – connect with elite professionals from any industry
              </List.Item>
              <List.Item>
                <b>Invite-Only</b> – networking events are exclusive providing better access to members
              </List.Item>
              <List.Item>
                <b>Entertaining</b> – we aim tp provide fun, memorable events that allow people connect
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Join
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                See Events
              </Button>
            </Group>
          </div>
          <Image src='./networking.png' className={classes.image} />
        </div>
      </Container>

      <Container size="md" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Best networking ever
          </Badge>
        </Group>

        <Title order={2} className={classes.featuresTitle} ta="center" mt="sm">
          Connect with industry leaders in your backyard
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Our events are special...they are fun and entertaining providing you the opportunity to meet someone that will grow your business exponentially
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </>
  )
}
