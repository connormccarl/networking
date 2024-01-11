import React from 'react'
import { useState } from 'react';

import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Notification, rem } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconX, IconCheck } from '@tabler/icons-react';

export default function Contact() {
    const [showMessage, setShowMessage] = useState({
        display: false,
        message: "",
        success: "Message successfully sent!",
        error: "Error sending message."
    })

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    })

    const handleSubmit = async (values) => {
        //console.log(values)

        // add formData
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("email", values.email)
        formData.append("subject", values.subject)
        formData.append("message", values.message)

        // call api
        await fetch('api/contact', {
            method: 'POST',
            body: formData
        })
        .then (() => {
            //reset page
            form.reset()

            setShowMessage({
                ...showMessage,
                display: true,
                message: "success"
            })
        })
        .catch((e) => {
            setShowMessage({
                ...showMessage,
                display: true,
                message: "error"
            })
        })
    }

    const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />

  return (
    <main className="container mt-4">
        {showMessage.display && (
            showMessage.message == "success" ?
                (
                    <Notification icon={checkIcon} color="teal" title="Success!" className='mb-4' onClose={() => setShowMessage({...showMessage, display: false})}>
                        {showMessage.success}
                    </Notification>
                )
            :
                (
                    <Notification icon={xIcon} color="red" title="Bummer!" className='mb-4' onClose={() => setShowMessage({...showMessage, display: false})}>
                        {showMessage.error}
                    </Notification>
                )
        )
        }
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
            >
                Get in touch
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps('name')}
                />
                <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps('email')}
                />
            </SimpleGrid>

            <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
                {...form.getInputProps('subject')}
            />
            <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
            />

            <Group justify="center" mt="xl">
                <Button type="submit" size="md">
                Send message
                </Button>
            </Group>
            </form>
    </main>
  )
}
