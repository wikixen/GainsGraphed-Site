import { createFileRoute } from '@tanstack/react-router'
import { DashboardTitle } from '../../../components/ui/dashboardTitle'

export const Route = createFileRoute('/_authenticated/_layout/diary')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <DashboardTitle title="Food Diary" subtitle="Track your meals and nutrition intake" />
    </>
  )
}
