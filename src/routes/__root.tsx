import { TanstackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { ThemeProvider } from '@/components/ThemeProviderContext'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <ThemeProvider>
        <Outlet />
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </ThemeProvider>
    </>
  ),
})
