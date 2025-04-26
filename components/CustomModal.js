import React, { useState, useMemo, useRef } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, Group, Button, Textarea } from '@mantine/core';

// check if value is null
const isNull = (value) => typeof value === "object" && !value;

export default function CustomModal({ view, reset }) {
    const [opened, { open, close }] = useDisclosure(false);

    const [requestName, setRequestName] = useState(null);
    const [requestEmail, setRequestEmail] = useState(null);
    const [requestPhone, setRequestPhone] = useState(null);
    const [requestType, setRequestType] = useState(null);
    const [requestWhen, setRequestWhen] = useState(null);
    const [requestPeople, setRequestPeople] = useState(null);

    const [golfName, setGolfName] = useState(null);
    const [golfEmail, setGolfEmail] = useState(null);
    const [golfPhone, setGolfPhone] = useState(null);
    const [golfWhen, setGolfWhen] = useState(null);
    const [golfPeople, setGolfPeople] = useState(null);

    const [podcastName, setPodcastName] = useState(null);
    const [podcastEmail, setPodcastEmail] = useState(null);
    const [podcastPhone, setPodcastPhone] = useState(null);
    const [podcastWhen, setPodcastWhen] = useState(null);

    useMemo(() => {
      console.log("view: ", view);
      if(!isNull(view)){
        open();
      }
    }, [view]);

    // display fields
    let displayFields;
    if(view == 'Request an Event'){
      displayFields = (
        <>
          <TextInput value={requestName} onChange={setRequestName} label="Your Name" />
          <TextInput value={requestEmail} onChange={setRequestEmail} label="Your Email" />
          <TextInput value={requestPhone} onChange={setRequestPhone} label="Your Phone" />
          <Textarea value={requestType} onChange={setRequestType} label="What type of event?" />
          <TextInput value={requestWhen} onChange={setRequestWhen} label="When?" />
          <TextInput value={requestPeople} onChange={setRequestPeople} label="How many people?" />
          <Group justify='space-between' className='mt-2'>
            <Button color="red" onClick={() => {
              close();
              reset();
            }}>Cancel</Button>
            <Button>Submit</Button>
          </Group> 
        </>
      )
    } else if (view == 'Book a Round of Golf'){
      displayFields = (
        <>
          <TextInput value={golfName} onChange={setGolfName} label="Your Name" />
          <TextInput value={golfEmail} onChange={setGolfEmail} label="Your Email" />
          <TextInput value={golfPhone} onChange={setGolfPhone} label="Your Phone" />
          <TextInput value={golfWhen} onChange={setGolfWhen} label="When?" />
          <TextInput value={golfPeople} onChange={setGolfPeople} label="How many people?" />
          <Group justify='space-between' className='mt-2'>
            <Button color="red" onClick={() => {
              close();
              reset();
            }}>Cancel</Button>
            <Button>Submit</Button>
          </Group>
        </>
      )
    } else if (view == 'Be a Podcast Guest'){
      displayFields = (
        <>
          <TextInput value={podcastName} onChange={setPodcastName} label="Your Name" />
          <TextInput value={podcastEmail} onChange={setPodcastEmail} label="Your Email" />
          <TextInput value={podcastPhone} onChange={setPodcastPhone} label="Your Phone" />
          <TextInput value={podcastWhen} onChange={setPodcastWhen} label="When?" />
          <Group justify='space-between' className='mt-2'>
            <Button color="red" onClick={() => {
              close();
              reset();
            }}>Cancel</Button>
            <Button>Submit</Button>
          </Group>
        </>
      )
    }

  return (
    <>
        <Modal opened={opened} onClose={() => {
          close();
          reset();
        }} title={view.title} centered>
            {displayFields}
        </Modal>
    </>
  );
}
