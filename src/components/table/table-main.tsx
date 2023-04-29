import React, { useMemo, useEffect, useState, useRef } from 'react'
import MaterialReactTable, {
  type MRT_ColumnDef,
  MRT_SortingState,
  MRT_Virtualizer
} from 'material-react-table'
import { Box, IconButton, Button } from '@mui/material'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import { dataPerson } from './index'
import QueryStatsIcon from '@mui/icons-material/QueryStats'

export type Person = {
  name: {
    firstName: string
    lastName: string
  }
  address: string
  city: string
  state: string
}

const Example = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name'
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name'
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address'
      },
      {
        accessorKey: 'city',
        header: 'City'
      },
      {
        accessorKey: 'state',
        header: 'State'
      }
    ],
    []
  )

  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef =
    useRef<MRT_Virtualizer<HTMLDivElement, HTMLTableRowElement>>(null)

  const [data, setData] = useState<Person[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sorting, setSorting] = useState<MRT_SortingState>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setData(dataPerson)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0)
    } catch (error) {
      console.error(error)
    }
  }, [sorting])

  return (
    <MaterialReactTable
      columns={columns}
      data={data} //10,000 rows
      defaultDisplayColumn={{ enableResizing: true }}
      enableColumnResizing
      enableColumnVirtualization
      enableGlobalFilterModes
      enablePagination={false}
      enableBottomToolbar={true}
      enableRowNumbers
      enableRowVirtualization
      onSortingChange={setSorting}
      state={{ isLoading, sorting }}
      rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //optional
      muiTableBodyProps={{ sx: { background: '#fff' } }}
      muiTablePaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxHeight: '100%',
          overflow: 'hidden'
        }
      }}
      muiTableContainerProps={{
        sx: { zIndex: 1 }
      }}
      renderTopToolbarCustomActions={() => (
        <Box sx={{ display: 'flex' }}>
          <Tooltip title="Dodaj nowe zlecenie" placement="bottom-start" arrow>
            <IconButton>
              <AddIcon sx={{ color: '#01343c' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Statystyki" placement="bottom-start" arrow>
            <IconButton>
              <QueryStatsIcon sx={{ color: '#01343c' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    />
  )
}

export default Example

//
{
  /* <MaterialReactTable
      columns={columns}
      data={data}
      enablePagination={false}
      enableBottomToolbar={false}
      muiTablePaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden'
        }
      }}
      muiTableContainerProps={{
        sx: { overflow: 'auto', flex: 1 }
      }}
      renderTopToolbarCustomActions={() => (
        <IconButton>
          <AddIcon />
        </IconButton>
      )}
    /> */
}

//
