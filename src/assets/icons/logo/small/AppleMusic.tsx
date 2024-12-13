interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

function AppleMusicSmallLogo({ width = '1em', height = '1em', color }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.6851 13.2613C38.6851 12.8313 38.6851 12.4012 38.6831 11.9712C38.6811 11.6092 38.6771 11.2472 38.6671 10.8852C38.6461 10.0962 38.5991 9.30117 38.4591 8.52115C38.3171 7.72913 38.0841 6.99212 37.7181 6.2721C36.9927 4.84894 35.8354 3.69196 34.4121 2.96702C33.6931 2.60101 32.9561 2.36901 32.1651 2.22601C31.3851 2.086 30.5891 2.039 29.8001 2.018C29.4381 2.008 29.0761 2.004 28.7141 2.002C28.2841 2 27.8541 2 27.4241 2H13.9461C13.5161 2 13.0861 2 12.6561 2.002C12.2941 2.004 11.9321 2.008 11.5701 2.018C10.7811 2.04 9.98506 2.086 9.20506 2.22701C8.41306 2.36901 7.67706 2.60201 6.95806 2.96802C5.53471 3.69296 4.37741 4.84994 3.65206 6.2731C3.28606 6.99312 3.05306 7.73013 2.91106 8.52215C2.77106 9.30217 2.72406 10.0982 2.70306 10.8862C2.69306 11.2482 2.68906 11.6102 2.68706 11.9722C2.68506 12.4012 2.68506 12.8313 2.68506 13.2613V26.7386C2.68506 27.1686 2.68506 27.5986 2.68706 28.0286C2.68906 28.3906 2.69306 28.7526 2.70306 29.1146C2.72406 29.9037 2.77106 30.6987 2.91106 31.4787C3.05306 32.2707 3.28606 33.0077 3.65206 33.7277C4.37741 35.1509 5.53471 36.3079 6.95806 37.0328C7.67706 37.3988 8.41406 37.6308 9.20506 37.7738C9.98506 37.9138 10.7811 37.9608 11.5701 37.9818C11.9321 37.9918 12.2941 37.9958 12.6561 37.9978C13.0861 38.0008 13.5161 37.9998 13.9461 37.9998H27.4231C27.8531 37.9998 28.2831 37.9998 28.7131 37.9978C29.0751 37.9958 29.4371 37.9918 29.7991 37.9818C30.5881 37.9608 31.3841 37.9138 32.1641 37.7738C32.9561 37.6318 33.6921 37.3988 34.4111 37.0328C35.8344 36.3079 36.9917 35.1509 37.7171 33.7277C38.0831 33.0077 38.3161 32.2707 38.4581 31.4787C38.5981 30.6987 38.6451 29.9027 38.6661 29.1146C38.6761 28.7526 38.6801 28.3906 38.6821 28.0286C38.6851 27.5986 38.6841 27.1686 38.6841 26.7386V13.2613H38.6851Z"
        fill={color || 'url(#paint0_linear_561_3241)'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.1351 7.50013C28.0481 7.50813 27.2751 7.64513 27.1821 7.66413L16.4821 9.82318L16.4781 9.82418C16.1991 9.88318 15.9801 9.98218 15.8111 10.1242C15.6071 10.2952 15.4941 10.5372 15.4511 10.8192C15.4421 10.8792 15.4271 11.0012 15.4271 11.1812V24.5735C15.4271 24.8865 15.4021 25.1905 15.1901 25.4495C14.9781 25.7086 14.7161 25.7866 14.4091 25.8486L13.7101 25.9896C12.8261 26.1676 12.2511 26.2886 11.7301 26.4906C11.2321 26.6836 10.8591 26.9296 10.5621 27.2416C9.97307 27.8586 9.73407 28.6956 9.81607 29.4796C9.88607 30.1487 10.1871 30.7887 10.7041 31.2617C11.0531 31.5817 11.4891 31.8247 12.0031 31.9277C12.5361 32.0347 13.1041 31.9977 13.9341 31.8297C14.3761 31.7407 14.7901 31.6017 15.1841 31.3687C15.5741 31.1387 15.9081 30.8317 16.1691 30.4577C16.4311 30.0827 16.6001 29.6656 16.6931 29.2226C16.7891 28.7656 16.8121 28.3526 16.8121 27.8966V16.2813C16.8121 15.6593 16.9881 15.4953 17.4901 15.3733C17.4901 15.3733 26.3841 13.5793 26.7991 13.4983C27.3781 13.3873 27.6511 13.5523 27.6511 14.1593V22.0885C27.6511 22.4025 27.6481 22.7205 27.4341 22.9805C27.2221 23.2395 26.9601 23.3175 26.6531 23.3795L25.9541 23.5205C25.0701 23.6985 24.4951 23.8195 23.9741 24.0215C23.4761 24.2145 23.1031 24.4605 22.8061 24.7725C22.2171 25.3895 21.9571 26.2266 22.0391 27.0106C22.1091 27.6796 22.4311 28.3196 22.9481 28.7926C23.2971 29.1126 23.7331 29.3486 24.2471 29.4526C24.7801 29.5596 25.3481 29.5216 26.1781 29.3546C26.6201 29.2656 27.0341 29.1326 27.4281 28.8996C27.8181 28.6696 28.1521 28.3626 28.4131 27.9886C28.6751 27.6136 28.8441 27.1966 28.9371 26.7536C29.0331 26.2966 29.0371 25.8836 29.0371 25.4275V8.44615C29.0391 7.83013 28.7141 7.45013 28.1351 7.50013Z"
        fill={color || 'white'}
      />
      <defs>
        <linearGradient
          id="paint0_linear_561_3241"
          x1="20.6851"
          y1="37.8613"
          x2="20.6851"
          y2="2.77588"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color || '#FA233B'} />
          <stop offset="1" stop-color={color || '#FB5C74'} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default AppleMusicSmallLogo;