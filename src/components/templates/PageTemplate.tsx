import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type { ContainerProps } from '@mui/material/Container'
import type { ReactNode } from 'react'

export interface PageTemplateProps {
  children: ReactNode
  /**
   * Optional header slot — renders above the main content area.
   * Pass your `<AppBar>` or custom header here.
   */
  header?: ReactNode
  /**
   * Optional footer slot — renders below the main content area.
   */
  footer?: ReactNode
  /**
   * Constrains the content width. Defaults to `'lg'`.
   * Set to `false` to remove the max-width constraint (full-bleed layout).
   */
  maxWidth?: ContainerProps['maxWidth']
  /** Remove horizontal padding on the Container (default: false) */
  disableGutter?: boolean
}

/**
 * Template: PageTemplate
 *
 * Base layout used by every page. Provides:
 *  - A full-height flex column (`min-height: 100dvh`)
 *  - Optional header + footer slots
 *  - A centred, max-width-constrained content area
 *
 * @example
 *   <PageTemplate header={<AppBar />} footer={<Footer />}>
 *     <Typography variant="h1">Hello</Typography>
 *   </PageTemplate>
 */
export function PageTemplate({
  children,
  header,
  footer,
  maxWidth = 'lg',
  disableGutter = false,
}: PageTemplateProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      {header}

      <Container
        component="main"
        maxWidth={maxWidth}
        disableGutters={disableGutter}
        sx={{ flex: 1, py: 3 }}
      >
        {children}
      </Container>

      {footer}
    </Box>
  )
}
