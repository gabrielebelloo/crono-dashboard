import type { SidebarItemType } from '../../../types/SidebarItemType'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
  const sidebarItems: SidebarItemType[] = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Find New',
      href: '/find-new',
    },
    {
      label: 'Lists',
      href: '/lists',
    },
    {
      label: 'Templates',
      href: '/find-new',
    },
    {
      label: 'Sequences',
      href: '/find-new',
    },
    {
      label: 'Tasks',
      href: '/find-new',
    },
    {
      label: 'Inbox',
      href: '/find-new',
    },
    {
      label: 'Deals',
      href: '/find-new',
    },
    {
      label: 'Analytics',
      href: '/find-new',
    },
  ]

  return (
    <aside className="w-[192px] bg-white h-screen border-r border-border">
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </div>
    </aside>
  )
}
