import {
  AirPlay,
  ChromeCast,
  Copy,
  FileDownload,
  Forward,
  Headphone,
  Pause,
  Play,
  Rewind,
  Shuffle,
  SkipBack,
  VolumeOff,
  VolumneMax,
  VolumneMin,
  VolumneMinus,
  VolumnePlus,
} from "../utils";

export const Icons = [
  {
    id: 1,
    name: "airplay",
    icon: AirPlay,
    description: `<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.24957 17H6.19691C5.07858 17 4.5192 17 4.0918 16.7822C3.71547 16.5905 3.40973 16.2837 
        3.21799 15.9074C3 15.4796 3 14.9203 3 13.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V13.8031C21 14.921 21 15.48 20.7822 15.9074C20.5905 16.2837 20.2841 16.5905 19.9077 16.7822C19.4803 17 18.921 17 17.8031 17H17.7529M16 20H8L12 15L16 20Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>`,
  },
  {
    id: 2,
    name: "volumne-max",
    icon: VolumneMax,
    description: `<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.82 4.68652C19.8191 5.61821 20.6167 6.74472 21.1636 7.99657C21.7105 9.24842 21.9952 10.5991 21.9999 11.9652C22.0047 13.3313 21.7295 14.6838 21.1914 15.9395C20.6532 17.1951 19.8635 18.3272 18.8709 19.2658M16.092 7.61194C16.6915 8.17095 17.17 8.84686 17.4982 9.59797C17.8263 10.3491 17.9971 11.1595 18 11.9791C18.0028 12.7988 17.8377 13.6103 17.5148 14.3637C17.1919 15.1171 16.7181 15.7963 16.1225 16.3595M7.4803 15.4069L9.15553 17.48C10.0288 18.5607 10.4655 19.1011 10.848 19.1599C11.1792 19.2108 11.5138 19.0925 11.7394 18.8448C12 18.5586 12 17.8638 12 16.4744V7.52572C12 6.13627 12 5.44155 11.7394 5.15536C11.5138 4.90761 11.1792 4.78929 10.848 4.84021C10.4655 4.89904 10.0288 5.43939 9.15553 6.52009L7.4803 8.59319C7.30388 8.81151 7.21567 8.92067 7.10652 8.99922C7.00982 9.06881 6.90147 9.12056 6.78656 9.15204C6.65687 9.18756 6.51652 9.18756 6.23583 9.18756H4.8125C4.0563 9.18756 3.6782 9.18756 3.37264 9.2885C2.77131 9.48716 2.2996 9.95887 2.10094 10.5602C2 10.8658 2 11.2439 2 12.0001C2 12.7563 2 13.1344 2.10094 13.4399C2.2996 14.0413 2.77131 14.513 3.37264 14.7116C3.6782 14.8126 4.0563 14.8126 4.8125 14.8126H6.23583C6.51652 14.8126 6.65687 14.8126 6.78656 14.8481C6.90147 14.8796 7.00982 14.9313 7.10652 15.0009C7.21567 15.0794 7.30388 15.1886 7.4803 15.4069Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>`,
  },
  {
    id: 3,
    name: "volume-min",
    icon: VolumneMin,
    description: `<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.41 8.34283C16.9095 8.80867 17.3084 9.37193 17.5818 9.99785C17.8553 10.6238 17.9976 11.2991 18 11.9821C18.0024 12.6652 17.8648 13.3415 17.5957 13.9693C17.3266 14.5971 16.9317 15.1632 16.4354 15.6325M7.4803 15.4065L9.15553 17.4796C10.0288 18.5603 10.4655 19.1006 10.848 19.1594C11.1792 19.2104 11.5138 19.092 11.7394 18.8443C12 18.5581 12 17.8634 12 16.4739V7.52526C12 6.13581 12 5.44109 11.7394 5.1549C11.5138 4.90715 11.1792 4.78884 10.848 4.83975C10.4655 4.89858 10.0288 5.43893 9.15553 6.51963L7.4803 8.59273C7.30388 8.81105 7.21567 8.92021 7.10652 8.99876C7.00982 9.06835 6.90147 9.1201 6.78656 9.15158C6.65687 9.1871 6.51652 9.1871 6.23583 9.1871H4.8125C4.0563 9.1871 3.6782 9.1871 3.37264 9.28804C2.77131 9.4867 2.2996 9.95841 2.10094 10.5597C2 10.8653 2 11.2434 2 11.9996C2 12.7558 2 13.1339 2.10094 13.4395C2.2996 14.0408 2.77131 14.5125 3.37264 14.7112C3.6782 14.8121 4.0563 14.8121 4.8125 14.8121H6.23583C6.51652 14.8121 6.65687 14.8121 6.78656 14.8476C6.90147 14.8791 7.00982 14.9308 7.10652 15.0004C7.21567 15.079 7.30388 15.1881 7.4803 15.4065Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>`,
  },
  {
    id: 4,
    name: "volumne-minus",
    icon: VolumneMinus,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 11.9996H22M7.4803 15.4065L9.15553 17.4796C10.0288 18.5603 10.4655 19.1006 10.848 19.1594C11.1792 19.2104 11.5138 19.092 11.7394 18.8443C12 18.5581 12 17.8634 12 16.4739V7.52526C12 6.13581 12 5.44109 11.7394 5.1549C11.5138 4.90715 11.1792 4.78884 10.848 4.83975C10.4655 4.89858 10.0288 5.43893 9.15553 6.51963L7.4803 8.59273C7.30388 8.81105 7.21567 8.92021 7.10652 8.99876C7.00982 9.06835 6.90147 9.1201 6.78656 9.15158C6.65687 9.1871 6.51652 9.1871 6.23583 9.1871H4.8125C4.0563 9.1871 3.6782 9.1871 3.37264 9.28804C2.77131 9.4867 2.2996 9.95841 2.10094 10.5597C2 10.8653 2 11.2434 2 11.9996C2 12.7558 2 13.1339 2.10094 13.4395C2.2996 14.0408 2.77131 14.5125 3.37264 14.7112C3.6782 14.8121 4.0563 14.8121 4.8125 14.8121H6.23583C6.51652 14.8121 6.65687 14.8121 6.78656 14.8476C6.90147 14.8791 7.00982 14.9308 7.10652 15.0004C7.21567 15.079 7.30388 15.1881 7.4803 15.4065Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 5,
    name: "volumne-off",
    icon: VolumeOff,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 9.18725H8.8125C8.0563 9.18725 7.6782 9.18725 7.37264 9.28819C6.77131 9.48684 6.2996 9.95855 6.10094 10.5599C6 10.8654 6 11.2435 6 11.9997C6 12.7559 6 13.134 6.10094 13.4396C6.2996 14.0409 6.77131 14.5127 7.37264 14.7113C7.6782 14.8122 8.0563 14.8122 8.8125 14.8122H10.2358C10.5165 14.8122 10.6569 14.8122 10.7866 14.8478C10.9015 14.8792 11.0098 14.931 11.1065 15.0006C11.2157 15.0791 11.3039 15.1883 11.4803 15.4066L13.1555 17.4797C14.0288 18.5604 14.4655 19.1008 14.848 19.1596C15.1792 19.2105 15.5138 19.0922 15.7394 18.8444C16 18.5583 16 17.8635 16 16.4741V14.9997M16 10.4997V6.97735C16 6.04105 16 5.57291 15.8776 5.3488C15.6329 4.90109 15.0905 4.70931 14.6188 4.90379C14.3827 5.00113 14.0885 5.36526 13.5 6.0935L12.875 6.86693M6 4.99975L20 18.9997"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 6,
    name: "volumne-plus",
    icon: VolumnePlus,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 11.9996H22M19 14.9996V8.9996M7.4803 15.4065L9.15553 17.4796C10.0288 18.5603 10.4655 19.1006 10.848 19.1594C11.1792 19.2104 11.5138 19.092 11.7394 18.8443C12 18.5581 12 17.8634 12 16.4739V7.52526C12 6.13581 12 5.44109 11.7394 5.1549C11.5138 4.90715 11.1792 4.78884 10.848 4.83975C10.4655 4.89858 10.0288 5.43893 9.15553 6.51963L7.4803 8.59273C7.30388 8.81105 7.21567 8.92021 7.10652 8.99876C7.00982 9.06835 6.90147 9.1201 6.78656 9.15158C6.65687 9.1871 6.51652 9.1871 6.23583 9.1871H4.8125C4.0563 9.1871 3.6782 9.1871 3.37264 9.28804C2.77131 9.4867 2.2996 9.95841 2.10094 10.5597C2 10.8653 2 11.2434 2 11.9996C2 12.7558 2 13.1339 2.10094 13.4395C2.2996 14.0408 2.77131 14.5125 3.37264 14.7112C3.6782 14.8121 4.0563 14.8121 4.8125 14.8121H6.23583C6.51652 14.8121 6.65687 14.8121 6.78656 14.8476C6.90147 14.8791 7.00982 14.9308 7.10652 15.0004C7.21567 15.079 7.30388 15.1881 7.4803 15.4065Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 7,
    name: "chrome-cast",
    icon: ChromeCast,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.2502V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8031C21 16.921 21 17.48 20.7822 17.9074C20.5905 18.2837 20.2839 18.5905 19.9076 18.7822C19.4802 19 18.921 19 17.8031 19H14M5 19C5 17.8954 4.10457 17 3 17M8 19C8 16.2386 5.76142 14 3 14M11 19C11 14.5817 7.41828 11 3 11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 8,
    name: "forward",
    icon: Forward,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.2502V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8031C21 16.921 21 17.48 20.7822 17.9074C20.5905 18.2837 20.2839 18.5905 19.9076 18.7822C19.4802 19 18.921 19 17.8031 19H14M5 19C5 17.8954 4.10457 17 3 17M8 19C8 16.2386 5.76142 14 3 14M11 19C11 14.5817 7.41828 11 3 11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 9,
    name: "headphone",
    icon: Headphone,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.2502V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8031C21 16.921 21 17.48 20.7822 17.9074C20.5905 18.2837 20.2839 18.5905 19.9076 18.7822C19.4802 19 18.921 19 17.8031 19H14M5 19C5 17.8954 4.10457 17 3 17M8 19C8 16.2386 5.76142 14 3 14M11 19C11 14.5817 7.41828 11 3 11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 10,
    name: "pause",
    icon: Pause,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5.5V18.5C15 18.9647 15 19.197 15.0384 19.3902C15.1962 20.1836 15.816 20.8041 16.6094 20.9619C16.8026 21.0003 17.0349 21.0003 17.4996 21.0003C17.9642 21.0003 18.1974 21.0003 18.3906 20.9619C19.184 20.8041 19.8041 20.1836 19.9619 19.3902C20 19.1987 20 18.9687 20 18.5122V5.48777C20 5.03125 20 4.80087 19.9619 4.60938C19.8041 3.81599 19.1836 3.19624 18.3902 3.03843C18.197 3 17.9647 3 17.5 3C17.0353 3 16.8026 3 16.6094 3.03843C15.816 3.19624 15.1962 3.81599 15.0384 4.60938C15 4.80257 15 5.03534 15 5.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 5.5V18.5C4 18.9647 4 19.197 4.03843 19.3902C4.19624 20.1836 4.81599 20.8041 5.60938 20.9619C5.80257 21.0003 6.0349 21.0003 6.49956 21.0003C6.96421 21.0003 7.19743 21.0003 7.39062 20.9619C8.18401 20.8041 8.8041 20.1836 8.96191 19.3902C9 19.1987 9 18.9687 9 18.5122V5.48777C9 5.03125 9 4.80087 8.96191 4.60938C8.8041 3.81599 8.18356 3.19624 7.39018 3.03843C7.19698 3 6.96465 3 6.5 3C6.03535 3 5.80257 3 5.60938 3.03843C4.81599 3.19624 4.19624 3.81599 4.03843 4.60938C4 4.80257 4 5.03534 4 5.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 11,
    name: "play",
    icon: Play,
    description: `
        <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 17.3336V6.66698C5 5.78742 5 5.34715 5.18509 5.08691C5.34664 4.85977 5.59564 4.71064 5.87207 4.67499C6.18868 4.63415 6.57701 4.84126 7.35254 5.25487L17.3525 10.5882L17.3562 10.5898C18.2132 11.0469 18.642 11.2756 18.7826 11.5803C18.9053 11.8462 18.9053 12.1531 18.7826 12.4189C18.6418 12.7241 18.212 12.9537 17.3525 13.4121L7.35254 18.7454C6.57645 19.1593 6.1888 19.3657 5.87207 19.3248C5.59564 19.2891 5.34664 19.1401 5.18509 18.9129C5 18.6527 5 18.2132 5 17.3336Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 12,
    name: "rewind",
    icon: Rewind,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12L21 17V7L12 12ZM12 12V7L3 12L12 17V12Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 13,
    name: "shuffle",
    icon: Shuffle,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 20L21 17M21 17L18 14M21 17H17C14.2386 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7H3M18 4L21 7M21 7L18 10M21 7L17 7C15.8744 7 14.8357 7.37194 14 7.99963M3 17H7C8.12561 17 9.16434 16.6277 10 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>`,
  },
  {
    id: 14,
    name: "skip-back",
    icon: SkipBack,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 5V19M18 10.5713V13.4287C18 15.2557 17.9998 16.1693 17.6162 16.6958C17.2817 17.1549 16.7679 17.4496 16.2028 17.5073C15.5548 17.5733 14.7656 17.113 13.1875 16.1924L10.7305 14.7592C9.17859 13.8539 8.40224 13.401 8.14062 12.8105C7.91202 12.2946 7.91202 11.7062 8.14062 11.1902C8.40267 10.5988 9.18117 10.1446 10.7383 9.2363L13.1875 7.80762L13.1895 7.80644C14.7663 6.88663 15.5551 6.42653 16.2028 6.49256C16.7679 6.55017 17.2817 6.84556 17.6162 7.30469C17.9998 7.83111 18 8.74424 18 10.5713Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 15,
    name: "file-download",
    icon: FileDownload,
    description: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12V18M12 18L15 16M12 18L9 16M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.5192 21 7.07899 21 8.19691 21H15.8031C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    `,
  },
  {
    id: 16,
    name: "copy",
    icon: Copy,
    description: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `,
  },
];
