import { WithThemeColor } from '../types';

interface Props extends WithThemeColor {}
const IconDefaultCalculator = ({ color }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.69018 20.355C6.69018 18.285 4.31268 15.915 2.24268 15.915V20.355H6.69018Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7502 15.915C19.6802 15.915 17.3027 18.285 17.3027 20.355H21.7502V15.915Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.6725 3.64502H16.3275C17.7657 3.64899 19.1438 4.22259 20.1601 5.24026C21.1763 6.25794 21.748 7.6368 21.75 9.07502V20.325H2.25V9.07502C2.25198 7.6368 2.82367 6.25794 3.83995 5.24026C4.85622 4.22259 6.23428 3.64899 7.6725 3.64502V3.64502Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7577 11.5649H2.24268"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.1777 15.3975C10.1777 15.8809 10.3697 16.3444 10.7115 16.6862C11.0533 17.028 11.5169 17.22 12.0002 17.22C12.4836 17.22 12.9472 17.028 13.2889 16.6862C13.6307 16.3444 13.8227 15.8809 13.8227 15.3975V9H10.1777V15.3975Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 13.7998V15.2473" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default IconDefaultCalculator;
