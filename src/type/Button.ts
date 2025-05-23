import { ImpactHapticFeedbackStyle } from '@telegram-apps/sdk-react'
import { HTMLAttributes, ReactNode } from 'react'
import { ClassName } from 'type/Props'

enum ButtonTypes {
  success,
  error,
  accent,
  alt,
  secondary,
  outline,
  ghost,
  neutral,
  special,
  warmGradient,
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonTypes | undefined
  children: ReactNode
  iconLeft?: JSX.Element | null
  iconRight?: JSX.Element | null
  isLoading?: boolean | undefined
  disabled?: boolean | undefined
  allowDisabledClick?: boolean | undefined
  haptic?: ImpactHapticFeedbackStyle | false
  contentClassName?: ClassName
}

export const buttonClassNames = (disabled?: boolean) => ({
  [ButtonTypes.accent]:
    'bg-accent hover:bg-accent-hover focus-visible:bg-accent-focus disabled:bg-accent-disabled disabled:text-white/75',
  [ButtonTypes.secondary]:
    'text-primary bg-white hover:bg-opacity-90 active:bg-opacity-70 disabled:bg-opacity-60',
  [ButtonTypes.error]:
    'text-primary bg-error hover:bg-opacity-90 focus-visible:bg-opacity-70 disabled:bg-opacity-60',
  [ButtonTypes.success]:
    'text-primary bg-success hover:bg-opacity-90 focus-visible:bg-opacity-70 disabled:bg-opacity-60',
  [ButtonTypes.ghost]:
    'text-white bg-transparent hover:text-opacity-90 focus-visible:text-opacity-70 disabled:text-opacity-60',
  [ButtonTypes.neutral]:
    'bg-controls-tertiary hover:bg-controls-tertiary-hover active:bg-controls-tertiary-active disabled:bg-controls-tertiary-disabled',
  [ButtonTypes.outline]:
    'bg-secondary border border-white-16 disabled:opacity-60 focus-visible:bg-opacity-70 hover:opacity-90 active:opacity-90',
  [ButtonTypes.special]: `text-white ${disabled ? 'bg-border-gradient' : 'bg-special-gradient'} hover:opacity-90 active:opacity-90 font-medium disabled:bg-primary disabled:text-opacity-50`,
  [ButtonTypes.warmGradient]: `text-primary ${disabled ? 'bg-border-gradient' : 'bg-warm-gradient'} hover:opacity-90 active:opacity-90 font-medium disabled:bg-primary disabled:text-opacity-50`,
  [ButtonTypes.alt]: `text-secondary font-semibold bg-alt hover:bg-alt-hover active:bg-alt-active disabled:opacity-50`,
})

export default ButtonTypes
