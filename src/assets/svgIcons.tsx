type SiteLogoProps = {
  className: string;
  altText: string;
}

export const HamburgerIcon = () => {
  return (
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
    </svg>
  )
}

export const ErrorPageIcon = () => {
  return (
    <svg className="relative animate-bounce" enableBackground="new 0 0 226 249.135" height="249.135" id="Layer_1" overflow="visible" version="1.1" viewBox="0 0 226 249.135" width="226" xmlSpace="preserve" >
      <circle cx="113" cy="113" fill="#FFE585" r="109"/>
      <line enableBackground="new" fill="none" opacity="0.29" stroke="#6E6E96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="88.866" x2="136.866" y1="245.135" y2="245.135"/>
      <line enableBackground="new" fill="none" opacity="0.17" stroke="#6E6E96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="154.732" x2="168.732" y1="245.135" y2="245.135"/>
      <line enableBackground="new" fill="none" opacity="0.17" stroke="#6E6E96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="69.732" x2="58.732" y1="245.135" y2="245.135"/>
      <circle cx="68.732" cy="93" fill="#6E6E96" r="9"/>
      <path d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z" enableBackground="new" fill="#FF9900" opacity="0.24"/>
      <circle cx="156.398" cy="93" fill="#6E6E96" r="9"/>
      <ellipse cx="67.732" cy="140.894" enableBackground="new" fill="#FF0000" opacity="0.18" rx="17.372" ry="8.106"/>
      <ellipse cx="154.88" cy="140.894" enableBackground="new" fill="#FF0000" opacity="0.18" rx="17.371" ry="8.106"/>
      <path d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z" fill="#FFEFB5"/>
      <circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" strokeWidth="8"/>
    </svg>
  )
}

export const Spinner = () => {
  return (
    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
  )
}

export const MagnifyGlass = () => {
  return (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  )
}

export const ReadMoreArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  )
}

export const SiteLogo = ({className, altText}: SiteLogoProps) => {
  return (
    <svg role="img" aria-labelledby="siteLogo" className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <title id="siteLogo">{altText}</title>
      <path d="M24.5194 13.4429C24.4453 13.9533 24.1087 14.6468 23.7226 15.2497C23.2354 16.0105 22.4622 16.5433 21.5774 16.7283L17.6797 17.5434C17.0533 17.6744 16.4852 18.0022 16.0587 18.479L13.503 21.3357C13.0227 21.8725 12.687 21.7445 12.687 21.0244C12.6812 21.0511 11.4186 24.3072 14.7646 26.2371C16.0502 26.9787 17.9009 26.7122 19.1865 25.9707L25.9983 22.0416C28.5458 20.5722 30.3445 18.0863 30.9424 15.2089C30.966 15.095 30.9843 14.9808 31.004 14.8667L24.5194 13.4429Z" fill="url(#paint0_linear_2484_3243)"/>
      <path d="M22.7528 9.51774C24.0384 10.2593 24.5637 11.3633 24.5637 12.8464C24.5637 13.0477 24.5479 13.2466 24.5194 13.4425L27.2641 14.6215L31.004 14.8663C31.4829 12.0948 30.5444 9.24202 28.862 6.97445C27.5959 5.268 25.9667 3.78714 24.0081 2.65738C22.417 1.73966 20.7636 1.13501 19.1025 0.803223L17.2361 3.22023L16.6465 5.99559L22.7528 9.51774Z" fill="url(#paint1_linear_2484_3243)"/>
      <path d="M0.783597 11.5518C0.782899 11.554 0.784832 11.5546 0.78556 11.5524C0.929583 11.1205 1.11018 10.6385 1.33564 10.1237C2.51334 7.4343 4.78286 5.64062 7.57492 4.72608C10.367 3.81156 13.4155 4.13212 15.9601 5.59988L16.6465 5.99578L19.1025 0.803412C11.291 -0.756765 3.30728 3.83253 0.793528 11.5217C0.792327 11.5254 0.787957 11.5382 0.783597 11.5518Z" fill="url(#paint2_linear_2484_3243)"/>
      <path d="M18.9199 25.9704C17.6343 26.712 16.0503 26.712 14.7647 25.9704C14.5902 25.8697 14.4257 25.7566 14.2701 25.634L12.0091 27.1885L10.0603 30.3376C12.2233 32.1377 15.0321 32.7164 17.839 32.3945C19.9513 32.1523 22.0495 31.4832 24.0082 30.3534C25.5992 29.4357 26.9501 28.3075 28.0682 27.0361L26.9063 24.2128L25.0262 22.4482L18.9199 25.9704Z" fill="url(#paint3_linear_2484_3243)"/>
      <path d="M14.2701 25.6341C13.2796 24.8539 12.6872 23.6572 12.6872 22.3754V22.2476V11.5724C12.6872 10.9687 12.865 10.8661 13.3884 11.168C12.5823 10.703 10.7203 9.10701 8.42118 10.4331C7.13557 11.1747 6.0769 12.8116 6.0769 14.2946V22.1529C6.0769 25.0917 7.59906 28.1573 9.79448 30.1133C9.88132 30.1906 9.97122 30.2636 10.0603 30.3377L14.2701 25.6341Z" fill="url(#paint4_linear_2484_3243)"/>
      <path d="M27.9105 5.8123C27.909 5.8106 27.9075 5.81197 27.909 5.81368C28.2114 6.15428 28.5389 6.5515 28.8725 7.00399C30.6149 9.36765 31.2659 12.3613 30.6627 15.2343C30.0594 18.1072 28.2573 20.5846 25.7126 22.0523L25.0262 22.4482L28.0683 27.0361C33.3265 21.0576 33.3401 11.8554 27.9316 5.83594C27.9291 5.83306 27.9201 5.82287 27.9105 5.8123Z" fill="url(#paint5_linear_2484_3243)"/>
      <path d="M6.34355 14.2944C6.34354 12.8113 7.13552 11.4408 8.42113 10.6993C8.59565 10.5986 8.77601 10.5129 8.96002 10.4395L8.74304 7.70603L7.21862 4.57861C4.57671 5.55005 2.4397 7.55766 1.31528 10.1471C0.469097 12.0957 9.792e-06 14.2458 0 16.5052C0 18.3407 0.302549 20.0735 0.845533 21.6767L3.87391 22.083L6.34355 21.3387V14.2944V14.2944Z" fill="url(#paint6_linear_2484_3243)"/>
      <path d="M8.96003 10.4395C10.1316 9.97264 11.4652 10.0584 12.5763 10.6993L12.6871 10.7632L21.5825 15.8941C22.2065 16.254 22.1498 16.6082 21.4445 16.7557L21.9577 16.6484C22.6329 16.5072 23.2498 16.1621 23.7216 15.6592C24.5327 14.7946 24.8305 13.7515 24.8305 12.8463C24.8304 11.3632 24.0385 9.99274 22.7529 9.2512L15.941 5.32209C13.3935 3.85267 10.3394 3.53934 7.5461 4.46083C7.4356 4.49727 7.32744 4.5386 7.21863 4.57861L8.96003 10.4395Z" fill="url(#paint7_linear_2484_3243)"/>
      <path d="M19.3222 32.1523C19.3245 32.1518 19.3241 32.1498 19.3218 32.1503C18.8753 32.2417 18.3673 32.3264 17.8083 32.3888C14.8881 32.7145 11.9676 31.781 9.77876 29.8225C7.58999 27.8641 6.3436 25.0662 6.3436 22.1307L6.34359 21.3389L0.845581 21.6769C3.39893 29.2156 11.369 33.8285 19.2912 32.1588C19.295 32.158 19.3083 32.1553 19.3222 32.1523Z" fill="url(#paint8_linear_2484_3243)"/>
      <defs>
        <linearGradient id="paint0_linear_2484_3243" x1="20.0599" y1="24.2701" x2="23.2075" y2="13.307" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1724C9"/>
          <stop offset="1" stop-color="#1C64F2"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2484_3243" x1="27.3093" y1="10.9001" x2="19.0297" y2="2.64962" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1C64F2"/>
          <stop offset="1" stop-color="#0092FF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_2484_3243" x1="16.1645" y1="5.52115" x2="3.67432" y2="6.3104" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0092FF"/>
          <stop offset="1" stop-color="#45B2FF"/>
        </linearGradient>
        <linearGradient id="paint3_linear_2484_3243" x1="15.3198" y1="29.1626" x2="26.5366" y2="26.1359" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1C64F2"/>
          <stop offset="1" stop-color="#0092FF"/>
        </linearGradient>
        <linearGradient id="paint4_linear_2484_3243" x1="7.26881" y1="16.1827" x2="15.2325" y2="24.4347" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1724C9"/>
          <stop offset="1" stop-color="#1C64F2"/>
        </linearGradient>
        <linearGradient id="paint5_linear_2484_3243" x1="25.4505" y1="22.1356" x2="31.007" y2="10.9345" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0092FF"/>
          <stop offset="1" stop-color="#45B2FF"/>
        </linearGradient>
        <linearGradient id="paint6_linear_2484_3243" x1="5.36387" y1="9.63067" x2="2.39054" y2="20.8063" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1C64F2"/>
          <stop offset="1" stop-color="#0092FF"/>
        </linearGradient>
        <linearGradient id="paint7_linear_2484_3243" x1="20.5431" y1="9.09912" x2="9.67768" y2="11.8044" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1724C9"/>
          <stop offset="1" stop-color="#1C64F2"/>
        </linearGradient>
        <linearGradient id="paint8_linear_2484_3243" x1="6.40679" y1="21.8566" x2="13.3326" y2="32.2745" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0092FF"/>
          <stop offset="1" stop-color="#45B2FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}