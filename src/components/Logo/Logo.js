// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={} alt="Mantis" width="100" />
     *
     */
     <img width="63" height="60" src="https://s3-alpha-sig.figma.com/img/f984/2187/cd6c096929e59af4f3c0a47636a60ade?Expires=1701648000&Signature=dVTjGOPzm6qPMm6~Pltt5sf89VWdJwwhMbFDCYIF6Dghedn8voPeKG81vaGrMLSRr3cC21xEczFtTHG4Me-uF4cyQUV6yK4WwFowswNZo1Dgp0fSz9i3BgsNQ6uUwKuU7MJWs6kZwvfjHRs3mxC6QCbI0olFRDzx8ujHL8EhGCfb4rVH7oA2M1SWARnAj~QK9pkjjHryhYOqjHuRW2XFdWqGEW3D~oO6VRR~DfXAASPSwAvJIstBtpLbY21VJjgdQZcPENhXLdzAakjtzgutMnkttNgQuuCQfx36D7s0ATPfhvN3HidgnOplOOLfd7lAP9At5dBdONkwKDnHFsIiOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Material-UI" />
    

     
//     <>
//     <svg width="148" height="60" viewBox="0 0 148 60" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="148" height="60" fill="#C5CED0"/>
// <g clipPath="url(#clip0_0_1)">
// <rect width="1280" height="832" transform="translate(-130 -5)" fill="white"/>
// <g filter="url(#filter0_d_0_1)">
// <path d="M-130 -1H1150V60H-130V-1Z" fill="white"/>
// <path d="M1150 59.75H-130V60.25H1150V59.75Z" fill="#666666"/>
// <rect width="147.761" height="60" fill="url(#pattern0)"/>
// </g>
// </g>
// <defs>
// <filter id="filter0_d_0_1" x="-134" y="-1" width="1288" height="69.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
// <feFlood floodOpacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="2"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlinkHref="#image0_0_1" transform="matrix(0.00179673 0 0 0.00442478 0.299665 0)"/>
// </pattern>
// <clipPath id="clip0_0_1">
// <rect width="1280" height="832" fill="white" transform="translate(-130 -5)"/>
// </clipPath>
// <image id="image0_0_1" width="223" height="226" xlinkHref="data:image/png;base64,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"/>
// </defs>
// </svg>

//     </>


    // <>
    //   <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path
    //       d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
    //       fill={theme.palette.primary.dark}
    //     />
    //     <path
    //       d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
    //       fill="url(#paint0_linear)"
    //     />
    //     <path
    //       d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
    //       fill="url(#paint1_linear)"
    //     />
    //     <path
    //       d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
    //       fill={theme.palette.primary.main}
    //     />
    //     <path
    //       d="M46.5781 10V26H49.3594V14.9844H49.5078L53.9297 25.9531H56.0078L60.4297 15.0078H60.5781V26H63.3594V10H59.8125L55.0625 21.5937H54.875L50.125 10H46.5781ZM69.8438 26.2422C71.7266 26.2422 72.8516 25.3594 73.3672 24.3516H73.4609V26H76.1797V17.9687C76.1797 14.7969 73.5937 13.8438 71.3047 13.8438C68.7813 13.8438 66.8437 14.9687 66.2188 17.1562L68.8594 17.5312C69.1406 16.7109 69.9375 16.0078 71.3203 16.0078C72.6328 16.0078 73.3516 16.6797 73.3516 17.8594V17.9062C73.3516 18.7188 72.5 18.7578 70.3828 18.9844C68.0547 19.2344 65.8281 19.9297 65.8281 22.6328C65.8281 24.9922 67.5547 26.2422 69.8438 26.2422ZM70.5781 24.1641C69.3984 24.1641 68.5547 23.625 68.5547 22.5859C68.5547 21.5 69.5 21.0469 70.7656 20.8672C71.5078 20.7656 72.9922 20.5781 73.3594 20.2812V21.6953C73.3594 23.0312 72.2813 24.1641 70.5781 24.1641ZM81.8516 18.9687C81.8516 17.2344 82.8984 16.2344 84.3906 16.2344C85.8516 16.2344 86.7266 17.1953 86.7266 18.7969V26H89.5547V18.3594C89.5625 15.4844 87.9219 13.8438 85.4453 13.8438C83.6484 13.8438 82.4141 14.7031 81.8672 16.0391H81.7266V14H79.0234V26H81.8516V18.9687ZM98.4219 14H96.0547V11.125H93.2266V14H91.5234V16.1875H93.2266V22.8594C93.2109 25.1172 94.8516 26.2266 96.9766 26.1641C97.7813 26.1406 98.3359 25.9844 98.6406 25.8828L98.1641 23.6719C98.0078 23.7109 97.6875 23.7812 97.3359 23.7812C96.625 23.7812 96.0547 23.5312 96.0547 22.3906V16.1875H98.4219V14ZM100.787 26H103.615V14H100.787V26ZM102.209 12.2969C103.107 12.2969 103.842 11.6094 103.842 10.7656C103.842 9.91406 103.107 9.22656 102.209 9.22656C101.303 9.22656 100.568 9.91406 100.568 10.7656C100.568 11.6094 101.303 12.2969 102.209 12.2969ZM116.008 17.1719C115.617 15.1406 113.992 13.8438 111.18 13.8438C108.289 13.8438 106.32 15.2656 106.328 17.4844C106.32 19.2344 107.398 20.3906 109.703 20.8672L111.75 21.2969C112.852 21.5391 113.367 21.9844 113.367 22.6641C113.367 23.4844 112.477 24.1016 111.133 24.1016C109.836 24.1016 108.992 23.5391 108.75 22.4609L105.992 22.7266C106.344 24.9297 108.195 26.2344 111.141 26.2344C114.141 26.2344 116.258 24.6797 116.266 22.4062C116.258 20.6953 115.156 19.6484 112.891 19.1562L110.844 18.7188C109.625 18.4453 109.141 18.0234 109.148 17.3281C109.141 16.5156 110.039 15.9531 111.219 15.9531C112.523 15.9531 113.211 16.6641 113.43 17.4531L116.008 17.1719Z"
    //       fill={theme.palette.common.black}
    //       fillOpacity="0.85"
    //     />
    //     <defs>
    //       <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
    //         <stop stopColor={theme.palette.primary.darker} />
    //         <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
    //       </linearGradient>
    //       <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
    //         <stop stopColor={theme.palette.primary.darker} />
    //         <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
    //       </linearGradient>
    //     </defs>
    //   </svg>
    // </>
  );
};

export default Logo;
