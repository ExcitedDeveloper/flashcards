import { ReactNode } from 'react'

export type NullableString = string | null | undefined
export type NullableBoolean = boolean | null | undefined
export type NullableNumber = number | null | undefined
export interface ChildrenProps {
  children: ReactNode
}
