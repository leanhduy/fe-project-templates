import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { changeLanguage } from 'i18next'
import { type ChangeEvent, useEffect, useState } from 'react'

import { langOptions } from '@/locales/constants.ts'

interface LanguageSwitchProps {
  className?: string
}

/**
 * Atom: LanguageSwitch
 * - A simple switch to toggle between Vietnamese and English languages.
 * - For simplicity, this component only toggle between 'vi' and langOptions.en.value languages. If more language options are needed, more complex component might be implemented.
 * - The switch state is determined by the checked state, which is false (vi) or true (en).
 * - When toggled, it should update the 'lang' value in localStorage and trigger a language change in the app.
 */
const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
  const [checked, setChecked] = useState(
    localStorage.getItem('lang') === langOptions.en.value || false,
  )

  const label = {
    slotProps: { input: { 'aria-label': checked ? langOptions.en.value : langOptions.vi.value } },
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  // Update localStorage and trigger language change when checked state changes
  useEffect(() => {
    const newLang = checked ? langOptions.en.value : langOptions.vi.value
    localStorage.setItem('lang', newLang)
    void changeLanguage(newLang) // Uncomment this line if you have i18n setup
  }, [checked])

  return (
    <Box className={className}>
      {/* Vietnamese icon */}
      <Typography>{langOptions.vi.label}</Typography>
      <Switch {...label} checked={checked} onChange={handleChange} />
      {/* English icon */}
      <Typography>{langOptions.en.label}</Typography>
    </Box>
  )
}

const StyledLanguageSwitch = styled(LanguageSwitch)`
  display: flex;
  gap: 8px;
  align-items: center;
`

export default StyledLanguageSwitch
