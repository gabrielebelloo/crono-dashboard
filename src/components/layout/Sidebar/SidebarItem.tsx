import type { SidebarItemType } from '../../../types/SidebarItemType'

export default function SidebarItem({ label, href }: SidebarItemType) {
  return <div>{label}</div>
}
