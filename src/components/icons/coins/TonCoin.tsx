import { ClassNameProp } from 'type/Props'

export default function ({
  className,
  size = 24,
  inCircle,
}: {
  size?: number
  inCircle?: boolean
} & ClassNameProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {inCircle ? (
        <path
          d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47714 17.5229 2 12 2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22Z"
          fill="#000"
        />
      ) : null}
      <path
        d="M15.4139 7.58203H8.58468C7.32903 7.58203 6.53318 8.9365 7.16489 10.0315L11.3796 17.3367C11.6546 17.8137 12.3439 17.8137 12.6189 17.3367L16.8345 10.0315C17.4654 8.93825 16.6695 7.58203 15.4147 7.58203H15.4139ZM11.3762 15.146L10.4583 13.3695L8.2435 9.40835C8.09739 9.15482 8.27786 8.82992 8.58382 8.82992H11.3753V15.1469L11.3762 15.146ZM15.7533 9.4075L13.5394 13.3704L12.6215 15.146V8.82907H15.413C15.719 8.82907 15.8994 9.15396 15.7533 9.4075Z"
        fill="currentColor"
      />
    </svg>
  )
}
