import { Typography, Box } from '@mui/material'
import { PrimaryButton } from 'components/common/button/primary'
import { SuccessButton } from 'components/common/button/success'
import { WarningButton } from 'components/common/button/warning'
import { ErrorButton } from 'components/common/button/error'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import DeleteIcon from '@mui/icons-material/Delete'

export function Cars() {
  return (
    <>
      <Typography>Cars</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <PrimaryButton startIcon={<AddIcon />}>Nowy</PrimaryButton>
        <SuccessButton startIcon={<SaveIcon />}>Zapisz</SuccessButton>
        <WarningButton startIcon={<PriorityHighIcon />}>Uwaga</WarningButton>
        <ErrorButton startIcon={<DeleteIcon />}>Usuń</ErrorButton>
      </Box>
    </>
  )
}
