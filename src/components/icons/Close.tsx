export default function ({ onClick }: { onClick?: () => void }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer hover:opacity-90 active:opacity-80 transition-opacity"
    >
      <path
        d="M0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17Z"
        fill="#1D232F"
      />
      <path
        d="M12.3866 10.4095C11.8407 9.86351 10.9555 9.86351 10.4095 10.4095C9.86351 10.9555 9.86351 11.8407 10.4095 12.3866L15.0228 17L10.4095 21.6134C9.86351 22.1593 9.86351 23.0445 10.4095 23.5905C10.9555 24.1365 11.8407 24.1365 12.3866 23.5905L17 18.9772L21.6134 23.5905C22.1593 24.1365 23.0445 24.1365 23.5905 23.5905C24.1365 23.0445 24.1365 22.1593 23.5905 21.6134L18.9772 17L23.5905 12.3866C24.1365 11.8407 24.1365 10.9555 23.5905 10.4095C23.0445 9.86351 22.1593 9.86351 21.6134 10.4095L17 15.0228L12.3866 10.4095Z"
        fill="white"
      />
    </svg>
  )
}
