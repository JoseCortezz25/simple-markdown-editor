import React from 'react'

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
    <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12V20M12 20L9.5 17.5M12 20L14.5 17.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)


const GithubIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 20 20" version="1.1">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
            </path>
          </g>
        </g>
      </g>
    </svg>
  )
}


interface HeaderProps {
  onDownloadFile: () => void
}

const Header: React.FC<HeaderProps> = ({ onDownloadFile }) => {
  return (
    <header className='absolute h-[60px] bottom-7 mx-auto w-[45%] md:w-[20%] lg:w-[15%] rounded-full backdrop-blur-md text-white bg-gray-900 right-0 left-0'>
      <nav className='h-full flex items-center justify-around'>
        <div className='w-[30px] h-[30px]'>
          <a href="https://github.com/JoseCortezz25" target="_blank" rel="noopener noreferrer" className='block cursor-pointer bg-tranparent transition-all duration-200 hover:scale-110 active:scale-100'>
            <GithubIcon />
          </a>
        </div>
        <div className='w-[30px] h-[30px]'>
          <button onClick={() => onDownloadFile()} className='cursor-pointer bg-tranparent transition-all duration-200 hover:scale-110 active:scale-100'>
            <DownloadIcon />
          </button >
        </div>
      </nav>
    </header>
  );
};


export { Header }