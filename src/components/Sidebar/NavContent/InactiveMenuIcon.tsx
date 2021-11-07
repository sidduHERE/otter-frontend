import { SVGProps, useContext } from 'react';
import { AppThemeContext } from 'src/helpers/app-theme-context';

function InactiveMenuIcon(props: SVGProps<SVGSVGElement> & { color?: string }) {
  const currentTheme = useContext(AppThemeContext);
  const color = currentTheme.theme.palette.primary.main;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.00941 8.54545L2.75358 8.63886L2.00941 8.54545ZM7.45302 16.9935L7.96198 17.5444C8.11258 17.4052 8.19964 17.2105 8.20292 17.0055C8.2062 16.8005 8.1254 16.6031 7.97933 16.4592L7.45302 16.9935ZM5.9394 19.8586L5.19097 19.81C5.17754 20.0169 5.25037 20.2202 5.39216 20.3715C5.53395 20.5228 5.73205 20.6086 5.9394 20.6086V19.8586ZM18.0606 19.8586V20.6086C18.268 20.6086 18.4661 20.5228 18.6079 20.3715C18.7496 20.2202 18.8225 20.0169 18.809 19.81L18.0606 19.8586ZM16.547 16.9935L16.0207 16.4592C15.8746 16.6031 15.7938 16.8005 15.7971 17.0055C15.8004 17.2105 15.8874 17.4052 16.038 17.5444L16.547 16.9935ZM21.9906 8.54545L21.2464 8.63886V8.63886L21.9906 8.54545ZM2.75358 8.63886C2.79906 8.27648 3.03684 7.84063 3.55593 7.366C4.06867 6.89719 4.79896 6.44463 5.69177 6.04946C7.47734 5.25914 9.79536 4.75 12 4.75V3.25C9.5897 3.25 7.06457 3.80147 5.08465 4.67781C4.09471 5.11598 3.21168 5.64827 2.54374 6.25899C1.88215 6.86392 1.37191 7.6023 1.26525 8.45205L2.75358 8.63886ZM7.97933 16.4592C6.58571 15.0865 5.21078 13.398 4.21309 11.8744C3.71391 11.112 3.32 10.4074 3.06502 9.81661C2.79564 9.19248 2.73224 8.80887 2.75358 8.63886L1.26525 8.45205C1.19066 9.04638 1.40186 9.74846 1.68782 10.411C1.98819 11.1069 2.43037 11.89 2.95819 12.6961C4.01454 14.3093 5.45734 16.0805 6.92671 17.5278L7.97933 16.4592ZM6.94406 16.4426C5.78891 17.5099 5.25361 18.8455 5.19097 19.81L6.68782 19.9072C6.72443 19.3434 7.07675 18.3623 7.96198 17.5444L6.94406 16.4426ZM5.9394 20.6086H12V19.1086H5.9394V20.6086ZM12 20.6086H18.0606V19.1086H12V20.6086ZM18.809 19.81C18.7464 18.8455 18.2111 17.5099 17.0559 16.4426L16.038 17.5444C16.9233 18.3622 17.2756 19.3434 17.3122 19.9072L18.809 19.81ZM21.2464 8.63886C21.2678 8.80887 21.2044 9.19247 20.935 9.81661C20.68 10.4074 20.2861 11.112 19.7869 11.8744C18.7892 13.398 17.4143 15.0865 16.0207 16.4592L17.0733 17.5278C18.5427 16.0805 19.9855 14.3093 21.0418 12.6961C21.5696 11.89 22.0118 11.1069 22.3122 10.411C22.5981 9.74845 22.8093 9.04638 22.7347 8.45205L21.2464 8.63886ZM12 4.75C14.2046 4.75 16.5227 5.25914 18.3082 6.04946C19.201 6.44463 19.9313 6.89719 20.4441 7.366C20.9632 7.84063 21.2009 8.27648 21.2464 8.63886L22.7347 8.45205C22.6281 7.6023 22.1178 6.86392 21.4563 6.25899C20.7883 5.64827 19.9053 5.11598 18.9153 4.67781C16.9354 3.80147 14.4103 3.25 12 3.25V4.75Z"
        fill={color}
      />
      <path
        d="M9.90124 4C9.20416 4.95352 9.62626 12.7374 12 19.8586C7.15152 16.2727 5.18182 7.63636 5.76851 5.65612"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.0988 4C14.7958 4.95352 14.3737 12.7374 12 19.8586C16.8485 16.2727 18.8182 7.63636 18.2315 5.65612"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default InactiveMenuIcon;
