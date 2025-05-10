import { createFileRoute } from '@tanstack/react-router'
import { DashboardTitle } from '../../../components/ui/dashboardTitle'

export const Route = createFileRoute('/_authenticated/_layout/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <DashboardTitle title="Profile" subtitle="Manage your account settings and preferences" />
    </>
  )
}
