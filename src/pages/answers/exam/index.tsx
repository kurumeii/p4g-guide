import Icons from '@/components/icons'
import { Stats, TITLE } from '@/configs/constants'
import useSearchParamState from '@/hooks/useSearchParamState'
import { Button, Container, Group, List, Select, Text } from '@mantine/core'
import { useDocumentTitle } from '@mantine/hooks'
import { useMemo } from 'react'
import * as R from 'remeda'

const type = {
  popQuiz: 'Pop Quiz',
  midterms: 'Midterms',
  finals: 'Finals',
  advanced: 'Advanced',
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

type AnswerType = keyof typeof type
type Month = (typeof months)[number]

type Filter = {
  month?: Month
  type?: AnswerType
}

export default function ExamPage() {
  const [filterParams, setFilterParams] = useSearchParamState<Filter>({
    month: undefined,
    type: 'popQuiz',
  })

  const chosenMonth = useMemo<Month[] | undefined>(() => {
    switch (filterParams?.type) {
      case 'popQuiz': {
        return [
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
          'January',
          'February',
        ]
      }
      case 'midterms': {
        return ['May', 'October']
      }
      case 'finals': {
        return ['July', 'November']
      }
      case 'advanced': {
        return ['February']
      }
      default: {
        return undefined
      }
    }
  }, [filterParams?.type])

  useDocumentTitle(`Exam - ${TITLE}`)
  return (
    <Container fluid p={'md'}>
      <List withPadding>
        Stat increased:
        <List.Item>{Stats.Knowledge}</List.Item>
        <List.Item>{Stats.Expression}</List.Item>
      </List>
      <Text fs={'italic'} pt={'md'}>
        Below is a complete list of all the correct test answers you'll need for
        every test day in Persona 4 Golden.
      </Text>
      <Group align="flex-end" pt={'md'}>
        <Select
          checkIconPosition="right"
          allowDeselect={false}
          clearable
          label="Select a type"
          placeholder="Pick a type"
          value={filterParams?.type}
          data={R.entries(type).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
          onChange={(value) =>
            setFilterParams({
              type: value as AnswerType,
              month: undefined,
            })
          }
        />
        <Select
          searchable
          checkIconPosition="right"
          label="Select a month"
          placeholder="Pick a month"
          disabled={!chosenMonth}
          allowDeselect={false}
          clearable
          value={filterParams?.month}
          data={
            chosenMonth
              ? chosenMonth.map((month) => ({
                  label: month,
                  value: month,
                }))
              : undefined
          }
          onChange={(value) =>
            setFilterParams({
              month: value as Month,
            })
          }
        />
        <Button rightSection={<Icons.Search size={20}/>}>Search</Button>
      </Group>
    </Container>
  )
}
