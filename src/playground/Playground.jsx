import React, { useState } from 'react';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/spotlight/styles.css';
import {
  MantineProvider, AppShell, Burger, Group, NavLink, ScrollArea,
  Title, Text, Stack, Grid, GridCol, Divider, Space,
  Button, ActionIcon, CloseButton,
  TextInput, Textarea, PasswordInput, NumberInput, Select, MultiSelect,
  Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Slider, RangeSlider,
  FileInput, PinInput, ColorInput, JsonInput, Autocomplete, TagsInput,
  Badge, Avatar, Indicator, ThemeIcon,
  Card, Paper, Accordion, Tabs, Spoiler,
  Table, Pagination,
  Modal, Drawer, Popover, HoverCard, Tooltip, Menu,
  Alert, Notification, Progress, Loader, Skeleton, LoadingOverlay,
  Image, AspectRatio,
  Timeline, Stepper, List,
  Anchor, Breadcrumbs,
  Kbd, Code, Mark, Highlight, BlockQuote,
  SimpleGrid, Flex, Center, Box,
  SegmentedControl, Chip, ChipGroup, NativeSelect,
  DatePickerInput, DateTimePicker, TimeInput,
  Combobox, useCombobox,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Notifications, notifications } from '@mantine/notifications';
import { ModalsProvider, modals } from '@mantine/modals';
import { CodeHighlight } from '@mantine/code-highlight';
import { Dropzone } from '@mantine/dropzone';
import { BarChart, LineChart, DonutChart, PieChart, AreaChart } from '@mantine/charts';
import { Carousel } from '@mantine/carousel';
import { theme } from '../theme/theme';

// ── Section wrapper ─────────────────────────────────────────────────────
function Section({ id, title, children }) {
  return (
    <Box id={id} mb="xl" pt="md">
      <Title order={2} size="h4" mb="xs" fw={600}>{title}</Title>
      <Divider mb="md" />
      {children}
    </Box>
  );
}

function SubSection({ title, children }) {
  return (
    <Stack gap="sm" mb="lg">
      <Text size="xs" fw={600} tt="uppercase" c="dimmed" lts="0.05em">{title}</Text>
      {children}
    </Stack>
  );
}

// ── Nav sections ─────────────────────────────────────────────────────────
const NAV = [
  { id: 'typography',   label: 'Typography' },
  { id: 'colors',       label: 'Colors' },
  { id: 'buttons',      label: 'Buttons' },
  { id: 'inputs',       label: 'Inputs' },
  { id: 'selects',      label: 'Selects & Pickers' },
  { id: 'toggles',      label: 'Toggles & Controls' },
  { id: 'feedback',     label: 'Feedback & Status' },
  { id: 'data-display', label: 'Data Display' },
  { id: 'overlays',     label: 'Overlays' },
  { id: 'navigation',   label: 'Navigation' },
  { id: 'layout',       label: 'Layout' },
  { id: 'charts',       label: 'Charts' },
  { id: 'misc',         label: 'Misc' },
];

// ── Chart data ────────────────────────────────────────────────────────────
const chartData = [
  { month: 'Jan', value: 42, value2: 28 },
  { month: 'Feb', value: 68, value2: 40 },
  { month: 'Mar', value: 55, value2: 62 },
  { month: 'Apr', value: 90, value2: 75 },
  { month: 'May', value: 73, value2: 88 },
  { month: 'Jun', value: 110, value2: 95 },
];

const donutData = [
  { name: 'Assist',    value: 40, color: '#0A0B0D' },
  { name: 'Configure', value: 30, color: '#848B96' },
  { name: 'Insight',   value: 20, color: '#C5CAD3' },
  { name: 'Other',     value: 10, color: '#E1E4E8' },
];

// ── Main playground ────────────────────────────────────────────────────────
function PlaygroundApp() {
  const [navOpen, { toggle: toggleNav }] = useDisclosure(true);
  const [modalOpen, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [drawerOpen, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const [activeNav, setActiveNav] = useState('typography');
  const [checkVal, setCheckVal] = useState(['react']);
  const [radioVal, setRadioVal] = useState('assist');
  const [sliderVal, setSliderVal] = useState(40);
  const [rangeVal, setRangeVal] = useState([20, 80]);
  const [stepperActive, setStepperActive] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [chipVal, setChipVal] = useState(['assist']);

  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppShell
      navbar={{ width: 220, breakpoint: 'sm', collapsed: { desktop: !navOpen } }}
      header={{ height: 56 }}
      padding="xl"
    >
      {/* Header */}
      <AppShell.Header style={{ borderBottom: '1px solid #E1E4E8' }}>
        <Group h="100%" px="md" gap="sm">
          <Burger opened={navOpen} onClick={toggleNav} size="sm" />
          <Text fw={600} size="sm">Mantine Component Playground</Text>
          <Badge variant="outline" size="xs" color="dark" ml="auto">Stamps.com Grey Theme</Badge>
        </Group>
      </AppShell.Header>

      {/* Sidebar */}
      <AppShell.Navbar p="sm" style={{ borderRight: '1px solid #E1E4E8' }}>
        <ScrollArea>
          <Stack gap={2}>
            {NAV.map(item => (
              <NavLink
                key={item.id}
                label={item.label}
                active={activeNav === item.id}
                onClick={() => scrollTo(item.id)}
                styles={{ root: { borderRadius: '6px', fontSize: '0.8125rem' } }}
              />
            ))}
          </Stack>
        </ScrollArea>
      </AppShell.Navbar>

      {/* Content */}
      <AppShell.Main>
        <Box maw={860}>

          {/* ── TYPOGRAPHY ─────────────────────────────────────── */}
          <Section id="typography" title="Typography">
            <Stack gap="xs">
              <Title order={1}>Heading 1 — 32px Semibold</Title>
              <Title order={2}>Heading 2 — 24px Semibold</Title>
              <Title order={3}>Heading 3 — 20px Semibold</Title>
              <Title order={4}>Heading 4 — 16px Semibold</Title>
              <Title order={5}>Heading 5 — 14px Semibold</Title>
              <Title order={6}>Heading 6 — 12px Semibold</Title>
              <Divider my="xs" />
              <Text size="xl">Text xl — 18px regular body copy for long-form reading</Text>
              <Text size="lg">Text lg — 16px standard body copy</Text>
              <Text size="md">Text md — 14px default paragraph text</Text>
              <Text size="sm">Text sm — 13px secondary labels and captions</Text>
              <Text size="xs">Text xs — 12px metadata and fine print</Text>
              <Divider my="xs" />
              <Text size="sm" c="dimmed">Dimmed — secondary text color</Text>
              <Text size="sm" fw={500}>Medium weight — 500</Text>
              <Text size="sm" fw={600}>Semibold weight — 600</Text>
              <Text size="sm" fw={700}>Bold weight — 700</Text>
              <Divider my="xs" />
              <Text size="sm"><Mark>Highlighted text</Mark> with inline mark</Text>
              <Text size="sm"><Highlight highlight={['AI', 'response']}>AI response pattern playground</Highlight></Text>
              <Code>inline code snippet</Code>
              <Kbd>⌘K</Kbd>
              <BlockQuote cite="AI Playbook">
                Every response should help the user continue with a path, CTA, or follow-up.
              </BlockQuote>
            </Stack>
          </Section>

          {/* ── COLORS ───────────────────────────────────────────── */}
          <Section id="colors" title="Colors">
            <SubSection title="Grey Scale">
              <SimpleGrid cols={10} spacing={4}>
                {['#FFFFFF','#F7F8FA','#F0F2F5','#E1E4E8','#C5CAD3','#A4ABB6','#848B96','#656C76','#484F59','#2C323A'].map((c, i) => (
                  <Stack key={c} gap={4} align="center">
                    <Box w={40} h={40} style={{ background: c, border: '1px solid #E1E4E8', borderRadius: 6 }} />
                    <Text size="xs" c="dimmed">{i}</Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </SubSection>
            <SubSection title="Semantic">
              <Group>
                {[
                  { label: 'Danger',  c: '#CC0000' },
                  { label: 'Success', c: '#15803D' },
                  { label: 'Warning', c: '#D48F00' },
                  { label: 'Info',    c: '#1D5AD8' },
                ].map(({ label, c }) => (
                  <Stack key={label} gap={4} align="center">
                    <Box w={48} h={32} style={{ background: c, borderRadius: 6 }} />
                    <Text size="xs">{label}</Text>
                  </Stack>
                ))}
              </Group>
            </SubSection>
          </Section>

          {/* ── BUTTONS ──────────────────────────────────────────── */}
          <Section id="buttons" title="Buttons">
            <SubSection title="Variants">
              <Group wrap="wrap">
                <Button variant="filled" color="dark">Filled</Button>
                <Button variant="outline" color="dark">Outline</Button>
                <Button variant="light" color="dark">Light</Button>
                <Button variant="subtle" color="dark">Subtle</Button>
                <Button variant="default">Default</Button>
                <Button variant="transparent">Transparent</Button>
                <Button variant="gradient" gradient={{ from: '#0A0B0D', to: '#484F59', deg: 135 }}>Gradient</Button>
              </Group>
            </SubSection>
            <SubSection title="Sizes">
              <Group align="center" wrap="wrap">
                {['xs','sm','md','lg','xl'].map(s => (
                  <Button key={s} size={s} variant="default">{s}</Button>
                ))}
              </Group>
            </SubSection>
            <SubSection title="States">
              <Group wrap="wrap">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </Group>
            </SubSection>
            <SubSection title="Action Icons">
              <Group>
                <ActionIcon variant="filled" color="dark" aria-label="add">+</ActionIcon>
                <ActionIcon variant="outline" color="dark" aria-label="edit">✎</ActionIcon>
                <ActionIcon variant="light" color="dark" aria-label="delete">✕</ActionIcon>
                <ActionIcon variant="default" aria-label="settings">⚙</ActionIcon>
                <ActionIcon variant="subtle" aria-label="more">•••</ActionIcon>
              </Group>
            </SubSection>
            <SubSection title="Close Button">
              <CloseButton />
            </SubSection>
          </Section>

          {/* ── INPUTS ───────────────────────────────────────────── */}
          <Section id="inputs" title="Inputs">
            <SimpleGrid cols={2} spacing="md">
              <TextInput label="Text Input" placeholder="Enter text..." description="Helper text below" />
              <TextInput label="Required Input" placeholder="Required..." required />
              <TextInput label="With Error" placeholder="Invalid..." error="This field is required" />
              <TextInput label="Disabled" placeholder="Disabled..." disabled />
              <PasswordInput label="Password" placeholder="Enter password..." />
              <NumberInput label="Number Input" placeholder="0" min={0} max={100} />
              <Textarea label="Textarea" placeholder="Enter long text..." autosize minRows={3} />
              <FileInput label="File Upload" placeholder="Pick file" />
              <ColorInput label="Color Picker" placeholder="#000000" defaultValue="#0A0B0D" />
              <PinInput length={6} />
            </SimpleGrid>
            <Space h="md" />
            <SubSection title="Code / JSON Input">
              <JsonInput
                label="JSON Input"
                placeholder='{"key": "value"}'
                formatOnBlur
                autosize
                minRows={3}
              />
            </SubSection>
          </Section>

          {/* ── SELECTS ──────────────────────────────────────────── */}
          <Section id="selects" title="Selects & Pickers">
            <SimpleGrid cols={2} spacing="md">
              <Select
                label="Select"
                placeholder="Pick a pattern"
                data={['Assist', 'Insight', 'Configure', 'Clarification']}
              />
              <MultiSelect
                label="Multi Select"
                placeholder="Pick patterns"
                data={['Assist', 'Insight', 'Configure', 'Clarification', 'Escalation']}
              />
              <Autocomplete
                label="Autocomplete"
                placeholder="Start typing..."
                data={['Assist', 'Insight', 'Configure', 'Clarification', 'Escalation']}
              />
              <TagsInput
                label="Tags Input"
                placeholder="Add tags"
                defaultValue={['AI', 'UX']}
              />
              <NativeSelect
                label="Native Select"
                data={['Assist', 'Insight', 'Configure']}
              />
              <DatePickerInput label="Date Picker" placeholder="Pick a date" />
              <DateTimePicker label="Date Time Picker" placeholder="Pick date and time" />
              <TimeInput label="Time Input" />
            </SimpleGrid>
          </Section>

          {/* ── TOGGLES ──────────────────────────────────────────── */}
          <Section id="toggles" title="Toggles & Controls">
            <SimpleGrid cols={2} spacing="md">
              <SubSection title="Checkboxes">
                <CheckboxGroup value={checkVal} onChange={setCheckVal} label="Frameworks">
                  <Stack mt="xs" gap="xs">
                    <Checkbox value="react" label="React" />
                    <Checkbox value="vue" label="Vue" />
                    <Checkbox value="svelte" label="Svelte" />
                  </Stack>
                </CheckboxGroup>
              </SubSection>
              <SubSection title="Radio Group">
                <RadioGroup value={radioVal} onChange={setRadioVal} label="Response Pattern">
                  <Stack mt="xs" gap="xs">
                    <Radio value="assist" label="Assist" />
                    <Radio value="insight" label="Insight" />
                    <Radio value="configure" label="Configure" />
                  </Stack>
                </RadioGroup>
              </SubSection>
              <SubSection title="Switch">
                <Stack gap="xs">
                  <Switch label="Enable AI" defaultChecked />
                  <Switch label="Show reasoning" />
                  <Switch label="Disabled" disabled />
                </Stack>
              </SubSection>
              <SubSection title="Chips">
                <ChipGroup multiple value={chipVal} onChange={setChipVal}>
                  <Group>
                    <Chip value="assist">Assist</Chip>
                    <Chip value="insight">Insight</Chip>
                    <Chip value="configure">Configure</Chip>
                  </Group>
                </ChipGroup>
              </SubSection>
            </SimpleGrid>
            <SubSection title="Slider">
              <Stack gap="md" maw={400}>
                <Slider value={sliderVal} onChange={setSliderVal} label={(v) => `${v}%`} />
                <RangeSlider value={rangeVal} onChange={setRangeVal} />
              </Stack>
            </SubSection>
            <SubSection title="Segmented Control">
              <SegmentedControl
                data={['Assist', 'Insight', 'Configure']}
              />
            </SubSection>
          </Section>

          {/* ── FEEDBACK ─────────────────────────────────────────── */}
          <Section id="feedback" title="Feedback & Status">
            <SubSection title="Alerts">
              <Stack gap="sm">
                <Alert title="Info" color="dark" variant="light">Something happened that you should know about.</Alert>
                <Alert title="Success" color="green" variant="light">Your changes have been saved successfully.</Alert>
                <Alert title="Warning" color="yellow" variant="light">This action may have unintended consequences.</Alert>
                <Alert title="Error" color="red" variant="light">Failed to save. Please try again.</Alert>
                <Alert title="With border" color="dark" variant="outline">Outline variant for less emphasis.</Alert>
              </Stack>
            </SubSection>
            <SubSection title="Badges">
              <Group wrap="wrap">
                <Badge color="dark">Default</Badge>
                <Badge color="dark" variant="outline">Outline</Badge>
                <Badge color="dark" variant="dot">Dot</Badge>
                <Badge color="green">Success</Badge>
                <Badge color="red">Error</Badge>
                <Badge color="yellow">Warning</Badge>
                {['xs','sm','md','lg','xl'].map(s => <Badge key={s} size={s}>{s}</Badge>)}
              </Group>
            </SubSection>
            <SubSection title="Progress">
              <Stack gap="sm" maw={400}>
                <Progress value={33} />
                <Progress value={66} color="dark" />
                <Progress value={100} color="green" />
                <Progress.Root>
                  <Progress.Section value={40} color="dark" />
                  <Progress.Section value={20} color="grey.5" />
                  <Progress.Section value={15} color="grey.3" />
                </Progress.Root>
              </Stack>
            </SubSection>
            <SubSection title="Loaders & Skeleton">
              <Group align="center">
                <Loader size="xs" color="dark" />
                <Loader size="sm" color="dark" />
                <Loader size="md" color="dark" />
                <Loader size="sm" color="dark" type="bars" />
                <Loader size="sm" color="dark" type="dots" />
              </Group>
              <Stack gap="xs" mt="sm" maw={300}>
                <Skeleton height={12} radius="sm" />
                <Skeleton height={12} radius="sm" width="70%" />
                <Skeleton height={12} radius="sm" width="40%" />
              </Stack>
            </SubSection>
            <SubSection title="Notifications (live)">
              <Group>
                <Button variant="default" size="xs" onClick={() =>
                  notifications.show({ title: 'Default', message: 'Something happened', color: 'dark' })
                }>Default</Button>
                <Button variant="default" size="xs" onClick={() =>
                  notifications.show({ title: 'Success', message: 'Saved!', color: 'green' })
                }>Success</Button>
                <Button variant="default" size="xs" onClick={() =>
                  notifications.show({ title: 'Error', message: 'Failed to save', color: 'red' })
                }>Error</Button>
              </Group>
            </SubSection>
          </Section>

          {/* ── DATA DISPLAY ─────────────────────────────────────── */}
          <Section id="data-display" title="Data Display">
            <SubSection title="Cards">
              <SimpleGrid cols={3} spacing="md">
                <Card>
                  <Text fw={600} size="sm" mb="xs">Default Card</Text>
                  <Text size="sm" c="dimmed">With border, shadow, and padding.</Text>
                </Card>
                <Card>
                  <Card.Section>
                    <Box h={80} style={{ background: '#F0F2F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Text size="xs" c="dimmed">Card.Section</Text>
                    </Box>
                  </Card.Section>
                  <Text fw={600} size="sm" mt="sm">With Section</Text>
                </Card>
                <Card>
                  <Group justify="space-between" mb="xs">
                    <Text fw={600} size="sm">With Actions</Text>
                    <Badge size="xs">New</Badge>
                  </Group>
                  <Text size="sm" c="dimmed" mb="sm">Card footer with actions.</Text>
                  <Button variant="default" size="xs" fullWidth>Learn more</Button>
                </Card>
              </SimpleGrid>
            </SubSection>

            <SubSection title="Table">
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Pattern</Table.Th>
                    <Table.Th>Use Case</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {[
                    { p: 'Assist',       u: 'Q&A, navigation',       s: 'Active' },
                    { p: 'Insight',      u: 'Proactive alerts',       s: 'Active' },
                    { p: 'Configure',    u: 'Create, apply, generate',s: 'Beta' },
                    { p: 'Clarification',u: 'Ambiguous requests',     s: 'Active' },
                    { p: 'Escalation',   u: 'Support handoff',        s: 'Active' },
                  ].map(row => (
                    <Table.Tr key={row.p}>
                      <Table.Td fw={500}>{row.p}</Table.Td>
                      <Table.Td c="dimmed">{row.u}</Table.Td>
                      <Table.Td>
                        <Badge size="xs" color={row.s === 'Beta' ? 'yellow' : 'green'} variant="light">{row.s}</Badge>
                      </Table.Td>
                      <Table.Td>
                        <ActionIcon variant="subtle" size="xs" aria-label="edit">✎</ActionIcon>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </SubSection>

            <SubSection title="Accordion">
              <Accordion variant="separated">
                {[
                  { v: 'lead',    q: '1. Lead with value',         a: 'Start with the most useful thing: the answer, insight, or recommendation.' },
                  { v: 'next',    q: '2. Make the next step clear', a: 'Every response should help the user continue with a path, CTA, or follow-up.' },
                  { v: 'control', q: '3. Keep user in control',     a: 'When AI prepares something, the user should be able to review before changes apply.' },
                  { v: 'trust',   q: '4. Build trust',              a: 'Use data, sources, context, or fallback when the response affects decisions.' },
                ].map(item => (
                  <Accordion.Item key={item.v} value={item.v}>
                    <Accordion.Control>{item.q}</Accordion.Control>
                    <Accordion.Panel><Text size="sm" c="dimmed">{item.a}</Text></Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </SubSection>

            <SubSection title="Tabs">
              <Tabs value={activeTab} onChange={setActiveTab}>
                <Tabs.List>
                  <Tabs.Tab value="overview">Overview</Tabs.Tab>
                  <Tabs.Tab value="examples">Examples</Tabs.Tab>
                  <Tabs.Tab value="code">Code</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview" pt="md">
                  <Text size="sm" c="dimmed">Overview content goes here.</Text>
                </Tabs.Panel>
                <Tabs.Panel value="examples" pt="md">
                  <Text size="sm" c="dimmed">Examples of the pattern in use.</Text>
                </Tabs.Panel>
                <Tabs.Panel value="code" pt="md">
                  <CodeHighlight code={`const pattern = 'Assist';\nconsole.log(pattern);`} language="js" />
                </Tabs.Panel>
              </Tabs>
            </SubSection>

            <SubSection title="Avatar & Indicator">
              <Group>
                <Avatar color="dark" radius="xl">AI</Avatar>
                <Avatar src={null} alt="User" radius="xl" />
                <Indicator color="green" size={10}>
                  <Avatar color="dark" radius="xl">QN</Avatar>
                </Indicator>
                <ThemeIcon variant="light" color="dark" size="lg" radius="xl">✦</ThemeIcon>
              </Group>
            </SubSection>

            <SubSection title="Timeline">
              <Timeline active={1} bulletSize={24} lineWidth={2}>
                <Timeline.Item title="Request received">
                  <Text c="dimmed" size="xs">User submitted a query</Text>
                </Timeline.Item>
                <Timeline.Item title="Pattern selected">
                  <Text c="dimmed" size="xs">AI classified as Assist</Text>
                </Timeline.Item>
                <Timeline.Item title="Response generated" lineVariant="dashed">
                  <Text c="dimmed" size="xs">Generating response...</Text>
                </Timeline.Item>
                <Timeline.Item title="Feedback collected">
                  <Text c="dimmed" size="xs">Waiting for user feedback</Text>
                </Timeline.Item>
              </Timeline>
            </SubSection>

            <SubSection title="Stepper">
              <Stepper active={stepperActive} onStepClick={setStepperActive}>
                <Stepper.Step label="Intent" description="Classify request">
                  <Text size="sm" c="dimmed" mt="sm">Step 1 content: identify user intent</Text>
                </Stepper.Step>
                <Stepper.Step label="Pattern" description="Select response type">
                  <Text size="sm" c="dimmed" mt="sm">Step 2 content: choose Assist, Insight, or Configure</Text>
                </Stepper.Step>
                <Stepper.Step label="Generate" description="Build response">
                  <Text size="sm" c="dimmed" mt="sm">Step 3 content: compose the response</Text>
                </Stepper.Step>
                <Stepper.Completed>
                  <Text size="sm" c="dimmed" mt="sm">All steps complete — response delivered</Text>
                </Stepper.Completed>
              </Stepper>
              <Group mt="md">
                <Button variant="default" size="xs" onClick={() => setStepperActive(s => Math.max(0, s - 1))}>Back</Button>
                <Button size="xs" onClick={() => setStepperActive(s => Math.min(3, s + 1))}>Next</Button>
              </Group>
            </SubSection>

            <SubSection title="List">
              <SimpleGrid cols={2}>
                <List>
                  <List.Item>Lead with value</List.Item>
                  <List.Item>Make the next step clear</List.Item>
                  <List.Item>Keep the user in control</List.Item>
                  <List.Item>Build trust when it matters</List.Item>
                </List>
                <List type="ordered">
                  <List.Item>Classify intent</List.Item>
                  <List.Item>Select pattern</List.Item>
                  <List.Item>Generate response</List.Item>
                  <List.Item>Collect feedback</List.Item>
                </List>
              </SimpleGrid>
            </SubSection>

            <SubSection title="Pagination">
              <Pagination total={10} defaultValue={1} color="dark" />
            </SubSection>

            <SubSection title="Spoiler">
              <Spoiler maxHeight={60} showLabel="Show more" hideLabel="Hide" maw={500}>
                <Text size="sm">
                  This is a long piece of content that will be hidden by the spoiler component.
                  It demonstrates how to progressively disclose information to avoid overwhelming users.
                  The Spoiler component truncates text and provides an expand/collapse control.
                </Text>
              </Spoiler>
            </SubSection>
          </Section>

          {/* ── OVERLAYS ─────────────────────────────────────────── */}
          <Section id="overlays" title="Overlays">
            <SubSection title="Modal & Drawer">
              <Group>
                <Button variant="default" onClick={openModal}>Open Modal</Button>
                <Button variant="default" onClick={openDrawer}>Open Drawer</Button>
                <Button variant="default" onClick={() =>
                  modals.openConfirmModal({
                    title: 'Confirm action',
                    children: <Text size="sm">Are you sure you want to apply this change?</Text>,
                    labels: { confirm: 'Confirm', cancel: 'Cancel' },
                    confirmProps: { color: 'dark' },
                  })
                }>Confirm Modal</Button>
              </Group>
              <Modal opened={modalOpen} onClose={closeModal} title="Example Modal" radius="md">
                <Text size="sm" c="dimmed" mb="md">This modal demonstrates the shadcn-themed overlay.</Text>
                <TextInput label="Field" placeholder="Enter value..." mb="sm" />
                <Group justify="flex-end">
                  <Button variant="default" onClick={closeModal}>Cancel</Button>
                  <Button onClick={closeModal}>Save</Button>
                </Group>
              </Modal>
              <Drawer opened={drawerOpen} onClose={closeDrawer} title="Example Drawer" position="right">
                <Text size="sm" c="dimmed">Drawer content goes here.</Text>
              </Drawer>
            </SubSection>

            <SubSection title="Tooltip & Popover">
              <Group>
                <Tooltip label="This is a tooltip" withArrow>
                  <Button variant="default" size="xs">Hover me</Button>
                </Tooltip>
                <Popover width={220} shadow="md">
                  <Popover.Target>
                    <Button variant="default" size="xs">Popover</Button>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text size="sm" fw={600} mb={4}>More info</Text>
                    <Text size="xs" c="dimmed">This is a popover with additional context.</Text>
                  </Popover.Dropdown>
                </Popover>
                <HoverCard width={200} shadow="md">
                  <HoverCard.Target>
                    <Button variant="default" size="xs">Hover Card</Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm" fw={600} mb={4}>Hover Card</Text>
                    <Text size="xs" c="dimmed">Appears on hover with richer content.</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </SubSection>

            <SubSection title="Menu">
              <Menu shadow="md" width={180}>
                <Menu.Target>
                  <Button variant="default" size="xs">Open Menu</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Actions</Menu.Label>
                  <Menu.Item>Edit pattern</Menu.Item>
                  <Menu.Item>Duplicate</Menu.Item>
                  <Menu.Item>View history</Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Danger</Menu.Label>
                  <Menu.Item color="red">Delete</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </SubSection>
          </Section>

          {/* ── NAVIGATION ───────────────────────────────────────── */}
          <Section id="navigation" title="Navigation">
            <SubSection title="Breadcrumbs">
              <Breadcrumbs>
                <Anchor href="#" size="sm">Playbook</Anchor>
                <Anchor href="#" size="sm">UI Patterns</Anchor>
                <Text size="sm">Buttons & CTAs</Text>
              </Breadcrumbs>
            </SubSection>
            <SubSection title="Anchor">
              <Group>
                <Anchor href="#" size="sm">Default link</Anchor>
                <Anchor href="#" size="sm" c="dimmed">Dimmed link</Anchor>
                <Anchor href="#" size="sm" underline="never">No underline</Anchor>
              </Group>
            </SubSection>
          </Section>

          {/* ── LAYOUT ───────────────────────────────────────────── */}
          <Section id="layout" title="Layout">
            <SubSection title="SimpleGrid">
              <SimpleGrid cols={4} spacing="sm">
                {[1,2,3,4].map(i => (
                  <Paper key={i} p="sm" ta="center">
                    <Text size="xs" c="dimmed">Col {i}</Text>
                  </Paper>
                ))}
              </SimpleGrid>
            </SubSection>
            <SubSection title="Grid (responsive)">
              <Grid>
                <GridCol span={8}><Paper p="sm"><Text size="xs" c="dimmed">span=8</Text></Paper></GridCol>
                <GridCol span={4}><Paper p="sm"><Text size="xs" c="dimmed">span=4</Text></Paper></GridCol>
                <GridCol span={4}><Paper p="sm"><Text size="xs" c="dimmed">span=4</Text></Paper></GridCol>
                <GridCol span={4}><Paper p="sm"><Text size="xs" c="dimmed">span=4</Text></Paper></GridCol>
                <GridCol span={4}><Paper p="sm"><Text size="xs" c="dimmed">span=4</Text></Paper></GridCol>
              </Grid>
            </SubSection>
            <SubSection title="Divider variants">
              <Stack gap="md">
                <Divider />
                <Divider label="Section label" labelPosition="center" />
                <Divider variant="dashed" />
                <Divider variant="dotted" />
              </Stack>
            </SubSection>
            <SubSection title="Dropzone">
              <Dropzone onDrop={() => {}} accept={['image/*', 'application/pdf']} maw={400}>
                <Stack align="center" gap="xs" mih={80} justify="center">
                  <Text size="sm" fw={500}>Drop files here or click to upload</Text>
                  <Text size="xs" c="dimmed">PDF or image, up to 5MB</Text>
                </Stack>
              </Dropzone>
            </SubSection>
          </Section>

          {/* ── CHARTS ───────────────────────────────────────────── */}
          <Section id="charts" title="Charts">
            <SubSection title="Bar Chart">
              <BarChart
                h={220}
                data={chartData}
                dataKey="month"
                series={[{ name: 'value', color: '#0A0B0D' }, { name: 'value2', color: '#C5CAD3' }]}
                tickLine="y"
              />
            </SubSection>
            <SubSection title="Line Chart">
              <LineChart
                h={220}
                data={chartData}
                dataKey="month"
                series={[{ name: 'value', color: '#0A0B0D' }, { name: 'value2', color: '#848B96' }]}
                curveType="natural"
              />
            </SubSection>
            <SubSection title="Area Chart">
              <AreaChart
                h={220}
                data={chartData}
                dataKey="month"
                series={[{ name: 'value', color: '#484F59' }]}
                curveType="natural"
              />
            </SubSection>
            <SubSection title="Donut Chart">
              <DonutChart data={donutData} size={160} thickness={30} />
            </SubSection>
          </Section>

          {/* ── MISC ─────────────────────────────────────────────── */}
          <Section id="misc" title="Misc">
            <SubSection title="Code Highlight">
              <CodeHighlight
                code={`const theme = createTheme({
  primaryColor: 'dark',
  fontFamily: "'Figtree', sans-serif",
  defaultRadius: 'sm',
});`}
                language="js"
              />
            </SubSection>
            <SubSection title="Aspect Ratio">
              <AspectRatio ratio={16 / 9} maw={320}>
                <Box style={{ background: '#F0F2F5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text size="xs" c="dimmed">16:9</Text>
                </Box>
              </AspectRatio>
            </SubSection>
            <SubSection title="Carousel">
              <Carousel withIndicators height={120} maw={400}>
                {['Assist', 'Insight', 'Configure', 'Clarification', 'Escalation'].map(p => (
                  <Carousel.Slide key={p}>
                    <Paper h={120} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Text fw={600}>{p}</Text>
                    </Paper>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </SubSection>
          </Section>

        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default function Playground() {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications position="top-right" />
        <PlaygroundApp />
      </ModalsProvider>
    </MantineProvider>
  );
}
