import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/progress')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/progress"!</div>
}
