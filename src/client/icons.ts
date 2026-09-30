import * as Primitives from '@deepseek-ai/dsh-client-ui-primitives'
import type { ComponentType } from 'react'

type IconProps = { size?: number; className?: string; [key: string]: any }
type IconComponent = ComponentType<IconProps>

const P = Primitives as Record<string, any>
const fallback: IconComponent = () => null

function resolveIcon(...names: string[]): IconComponent {
  for (const name of names) {
    if (typeof P[name] === 'function') {
      return P[name]
    }
  }
  return fallback
}

export const IconBranchOutlineRegular: IconComponent = resolveIcon('IconBranchOutlineRegular', 'IconBranchOutline16')
export const IconCheckOutlineRegular: IconComponent = resolveIcon('IconCheckOutlineRegular', 'IconCheckOutline14', 'IconCheckOutline16')
export const IconChevronDownOutlineRegular: IconComponent = resolveIcon('IconChevronDownOutlineRegular', 'IconChevronDownOutline14')
export const IconChevronRightOutlineRegular: IconComponent = resolveIcon('IconChevronRightOutlineRegular', 'IconChevronRightOutline14')
export const IconChevronUpOutlineRegular: IconComponent = resolveIcon('IconChevronUpOutlineRegular', 'IconChevronUpOutline14')
export const IconCopyOutlineRegular: IconComponent = resolveIcon('IconCopyOutlineRegular', 'IconCopyOutline16')
export const IconEditOutlineRegular: IconComponent = resolveIcon('IconEditOutlineRegular', 'IconEditOutline16')
export const IconFolderCloseRegular: IconComponent = resolveIcon('IconFolderCloseRegular', 'IconFolderClose16')
export const IconGoalOutlineRegular: IconComponent = resolveIcon('IconGoalOutlineRegular', 'IconGoalOutline16')
export const IconPlusOutlineRegular: IconComponent = resolveIcon('IconPlusOutlineRegular', 'IconPlusOutline16')
export const IconProjectAddOutlineRegular: IconComponent = resolveIcon('IconProjectAddOutlineRegular', 'IconProjectAddOutline16')
export const IconRightUpOutlineRegular: IconComponent = resolveIcon('IconRightUpOutlineRegular', 'IconRightUpOutline14', 'IconRightUpOutline16')
export const IconTrashOutlineRegular: IconComponent = resolveIcon('IconTrashOutlineRegular', 'IconTrashOutline16')
