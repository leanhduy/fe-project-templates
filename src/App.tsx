// 1. External Libraries (alphabetical)
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'sonner'

import { Button, Card, Input } from '@/components/atoms'
import LanguageSwitch from '@/components/atoms/LanguageSwitch'
import Sample from '@/components/atoms/Sample'
import LoginForm from '@/components/molecules/LoginForm'
import { PageTemplate } from '@/components/templates'
import { persistor, store } from '@/store'
import { AppThemeProvider } from '@/theme'

// 2. Internal Project Aliases (alphabetical)

function AppContent() {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <Typography variant="h1" gutterBottom>
        Project Template
      </Typography>

      {/* Placeholder atoms — delete when building real features */}
      <Card sx={{ mb: 2, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Sample Atom
        </Typography>
        <Input label="Placeholder Input" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained">Placeholder Button</Button>
      </Card>

      {/* Placeholder sample component with rtk usage*/}
      <Card sx={{ mb: 2, maxWidth: 400 }}>
        <Sample />
      </Card>

      {/*  Sample Login Form */}
      <Card sx={{ mb: 2, maxWidth: 800 }}>
        <Typography variant="h6" gutterBottom>
          {t('sample.loginFormSectionTitle')}
        </Typography>
        <LoginForm />
      </Card>

      {/*  Sample Language toggle with i18next*/}
      <Card sx={{ mb: 2, maxWidth: 800 }}>
        <Typography variant="h6" gutterBottom>
          {t('sample.languageSwitchSectionTitle')}
        </Typography>
        <LanguageSwitch />
      </Card>
    </PageTemplate>
  )
}

/**
 * Root component.
 * AppThemeProvider wraps everything with MUI ThemeProvider + CssBaseline.
 * To enable dark mode by default: <AppThemeProvider defaultMode="dark">
 */
function App() {
  return (
    <AppThemeProvider>
      <Provider store={store}>
        <PersistGate
          // loading={<LoadingScreen/>}  // TODO: Need to add a loading screen for when the persisted state is being rehydrated
          persistor={persistor}
        >
          <Toaster richColors closeButton />
          <AppContent />
        </PersistGate>
      </Provider>
    </AppThemeProvider>
  )
}

export default App
