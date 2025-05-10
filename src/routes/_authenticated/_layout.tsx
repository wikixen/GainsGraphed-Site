import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../../components/header'

export const Route = createFileRoute('/_authenticated/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-w-screen min-h-screen grid grid-cols-[auto_1fr] gap-4 bg-gray-50 mr-8 dark:bg-black dark:text-white">
      <Header />
      <section className="flex flex-col w-full gap-4 py-8 px-4 text-left lg:gap-8 lg:items-center">
        <Outlet />
      </section>
    </main>
  )
}
