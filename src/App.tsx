import Typography from '@mui/material/Typography'

import { Button, Card, Input } from '@/components/atoms'
import { PageTemplate } from '@/components/templates'
import { AppThemeProvider } from '@/theme'

function AppContent() {
  return (
    <PageTemplate>
      <Typography variant="h1" gutterBottom>
        Project Template
      </Typography>

      {/* Placeholder atoms — delete when building real features */}
      <Card sx={{ mb: 2, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Placeholder Card
        </Typography>
        <Input label="Placeholder Input" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained">Placeholder Button</Button>
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
      <AppContent />
    </AppThemeProvider>
  )
}

export default App
