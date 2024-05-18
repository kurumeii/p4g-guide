import Datatable from "@/components/ui/table"
import { Stats, TABLE_PAGE_SIZES, TITLE } from "@/configs/constants"
import { Exams } from "@/database/exam/exam"
import useSearchParamState from "@/hooks/useSearchParamState"
import type { ExamTypes } from "@/types"
import { Box, Container, Flex, List, Select, Text } from "@mantine/core"
import { useDocumentTitle } from "@mantine/hooks"
import dayjs from "dayjs"
import type { DataTableColumn } from "mantine-datatable"
import { useEffect, useMemo, useState } from "react"
import * as R from "remeda"

const type: Record<ExamTypes, string> = {
  popQuiz: "Pop Quiz",
  midterms: "Midterms",
  finals: "Finals",
  advanced: "Advanced",
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const

type AnswerType = keyof typeof type
type Month = (typeof months)[number]

type Filter = {
  month?: Month
  type?: AnswerType
  page: number
  limit: number
  sortedBy?: string
  order?: "asc" | "desc"
}

export default function ExamPage() {
  const [filterParams, setFilterParams] = useSearchParamState<Filter>({
    month: undefined,
    type: undefined,
    page: 1,
    limit: TABLE_PAGE_SIZES[0],
    sortedBy: "date",
    order: "asc",
  })

  const dataSource = useMemo(() => {
    if (!filterParams?.type) {
      return []
    }

    const exams = filterParams.month
      ? Exams[filterParams.type]?.filter(
          ({ date }) =>
            dayjs(date).month() === dayjs(filterParams.month, "MMMM").month()
        )
      : Exams[filterParams.type]

    const result = exams?.map((item, idx) => ({
      id: `items-${filterParams.type}-${item.date}-${idx}`,
      ...item,
    }))
    return result ?? []
  }, [filterParams])

  const [records, setRecords] = useState(dataSource)

  const chosenMonth = useMemo<Month[] | undefined>(() => {
    switch (filterParams?.type) {
      case "popQuiz": {
        return [
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
        ]
      }
      case "midterms": {
        return ["May", "October"]
      }
      case "finals": {
        return ["July", "November"]
      }
      case "advanced": {
        return ["February"]
      }
      default: {
        return undefined
      }
    }
  }, [filterParams?.type])

  const columns = useMemo<DataTableColumn[]>(() => {
    return [
      {
        title: "Date",
        accessor: "date",
        width: 100,
        sortable: true,
      },
      {
        title: "Question",
        accessor: "question",
        width: 350,
        ellipsis: true,
      },
      {
        title: "Answer",
        accessor: "answer",
      },
    ]
  }, [])

  useDocumentTitle(`Exam - ${TITLE}`)

  useEffect(() => {
    const data = R.pipe(
      dataSource,
      R.sortBy((item) =>
        filterParams.sortedBy ? filterParams.sortedBy : item.date
      )
    )
    setRecords(filterParams.order === "desc" ? data.reverse() : data)
  }, [dataSource, filterParams.order, filterParams.sortedBy])

  return (
    <Container
      fluid
      pt={"md"}
      display={"flex"}
      style={{
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      Stat increased:
      <List withPadding>
        <List.Item>{Stats.Knowledge}</List.Item>
        <List.Item>{Stats.Expression}</List.Item>
      </List>
      <Text fs={"italic"} pt={"md"}>
        Below is a complete list of all the correct test answers you'll need for
        every test day in Persona 4 Golden.
      </Text>
      <Flex
        gap={"md"}
        direction={{
          base: "column",
          md: "row",
        }}
        align={{
          md: "flex-end",
        }}
      >
        <Select
          clearable
          checkIconPosition="right"
          allowDeselect={false}
          label="Select a type"
          placeholder="Pick a type"
          defaultValue={filterParams.type}
          data={R.entries(type).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
          onChange={(value) => {
            setFilterParams({
              type: value as AnswerType,
              month: undefined,
            })
          }}
        />
        {chosenMonth && (
          <Select
            clearable
            searchable
            checkIconPosition="right"
            label="Select a month"
            placeholder="Pick a month"
            disabled={!chosenMonth}
            allowDeselect={false}
            defaultValue={filterParams?.month}
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
        )}
      </Flex>
      <Box pt={"sm"} flex={1}>
        <Datatable
          scrollHeight={"100%"}
          emptyText="No answer found"
          sortStatus={{
            columnAccessor: filterParams.sortedBy ?? "date",
            direction: filterParams.order ?? "asc",
          }}
          onSortChange={(status) =>
            setFilterParams({
              sortedBy: status.columnAccessor,
              order: status.direction,
            })
          }
          dataSource={records}
          pagination={{
            currentPage: +filterParams.page,
            limit: +filterParams.limit,
            totalPages: dataSource ? dataSource.length : 0,
            onPageChange: (page) => setFilterParams({ page: +page }),
            onLimitChange: (limit) => setFilterParams({ limit: +limit }),
          }}
          columns={columns}
        />
      </Box>
    </Container>
  )
}
