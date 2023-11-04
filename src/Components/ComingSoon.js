import React, { useState, useEffect } from "react";

function TimerBox({ value, label }) {
  return (
    <div className="countdown-box">
      <span>{value < 10 ? `${value}` : value} </span>
      {label}
    </div>
  );
}

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calculateCountdown = () => {
    const targetDate = new Date("2023-11-31T23:59:59");
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Countdown has ended
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  // console.log(String(days).split("")[0]);

  // days split
  const initialNum = String(days).padStart(2, "0").split("")[0];
  const lastNum = String(days).padStart(2, "0").split("")[1];

  // hours split
  const initialHour = String(hours).padStart(2, "0").split("")[0];
  const lastHour = String(hours).padStart(2, "0").split("")[1];

  // minutes split
  const initialMinute = String(minutes).padStart(2, "0").split("")[0];
  const lastMinute = String(minutes).padStart(2, "0").split("")[1];

  // seconds split
  const initialSecond = String(seconds).padStart(2, "0").split("")[0];
  const lastSecond = String(seconds).padStart(2, "0").split("")[1];
  // console.log(seconds);
  return (
    <>
      <div className="w-full  bg-fixed min-h-screen bg-no-repeat object-cover bg-center bg-cover bg-[url('./Components/Resource.png')]">
        <div className="pt-10 ml-5 ">
          <svg width="90" height="35" viewBox="0 0 130 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M88.95 3.35C90.074 5.193 90.994 7.439 90.996 8.342C90.999 9.748 92.65 10.037 102.47 10.348C116.62 10.797 116.988 11.065 117.198 21.048C117.416 31.37 116.951 31.7 102.17 31.7C92.025 31.7 90.023 31.426 87.574 29.7C86.013 28.6 83.782 27.144 82.618 26.465C81.045 25.547 80.91 25.226 82.095 25.215C88.493 25.156 89.829 6.995 83.749 2.737C81.935 1.466 77.701 1.2 59.314 1.2H37.072L36.786 10.95L36.5 20.7L24.197 20.981L11.893 21.262L12.197 15.981L12.5 10.7H23H33.5L33.805 5.95L34.11 1.2H17.055H0V21.2V41.2H5.945H11.89L12.195 36.45L12.5 31.7L27.5 31.2C36.629 30.896 43.34 30.219 44.645 29.471C47.424 27.879 49 23.228 49 16.617C49 10.383 48.652 10.511 64.302 11.018C73.29 11.309 74.188 11.519 75.112 13.546C75.793 15.04 75.784 16.639 75.084 18.478L74.05 21.2H63.025C52.219 21.2 52 21.245 52 23.477C52 28.21 47.47 32.723 41.5 33.938C37.928 34.665 37.466 35.097 37.187 37.976L36.873 41.2H42.937H49V36.169V31.138L61.185 31.419L73.37 31.7L75.441 35.7C78.405 41.423 82.845 42.38 104.566 41.984C128.516 41.546 129.243 40.933 129.243 21.2C129.243 1.428 128.539 0.839998 104.25 0.349998L86.908 0L88.95 3.35Z"
              fill="#F4F4F4"
            />
            <path
              d="M8.25651 64.1695C8.72518 64.1695 9.13368 64.1125 9.48201 63.9985C9.83035 63.8782 10.1185 63.7103 10.3465 63.495C10.5808 63.2733 10.755 63.0073 10.869 62.697C10.983 62.3803 11.04 62.0288 11.04 61.6425C11.04 61.2752 10.983 60.9427 10.869 60.645C10.755 60.3473 10.584 60.094 10.356 59.885C10.128 59.676 9.83985 59.5177 9.49151 59.41C9.14318 59.296 8.73151 59.239 8.25651 59.239H6.34701V64.1695H8.25651ZM8.25651 57.263C9.17485 57.263 9.96968 57.3707 10.641 57.586C11.3123 57.8013 11.8665 58.1022 12.3035 58.4885C12.7405 58.8748 13.0635 59.3372 13.2725 59.8755C13.4878 60.4138 13.5955 61.0028 13.5955 61.6425C13.5955 62.3075 13.4847 62.9187 13.263 63.476C13.0413 64.027 12.7088 64.502 12.2655 64.901C11.8222 65.3 11.2648 65.6103 10.5935 65.832C9.92851 66.0537 9.14951 66.1645 8.25651 66.1645H6.34701V71H3.79151V57.263H8.25651ZM23.5067 63.799C23.988 63.799 24.406 63.7388 24.7607 63.6185C25.1217 63.4982 25.4162 63.3335 25.6442 63.1245C25.8785 62.9092 26.0527 62.6558 26.1667 62.3645C26.2807 62.0732 26.3377 61.7533 26.3377 61.405C26.3377 60.7083 26.1065 60.1732 25.6442 59.7995C25.1882 59.4258 24.4884 59.239 23.5447 59.239H21.9107V63.799H23.5067ZM30.0807 71H27.7722C27.3352 71 27.0185 70.829 26.8222 70.487L23.9342 66.0885C23.8265 65.9238 23.7062 65.8067 23.5732 65.737C23.4465 65.6673 23.2565 65.6325 23.0032 65.6325H21.9107V71H19.3552V57.263H23.5447C24.4757 57.263 25.2737 57.3612 25.9387 57.5575C26.61 57.7475 27.1579 58.0167 27.5822 58.365C28.0129 58.7133 28.3295 59.1313 28.5322 59.619C28.7349 60.1003 28.8362 60.6323 28.8362 61.215C28.8362 61.6773 28.7665 62.1143 28.6272 62.526C28.4942 62.9377 28.2979 63.3113 28.0382 63.647C27.7849 63.9827 27.4682 64.2772 27.0882 64.5305C26.7145 64.7838 26.287 64.9833 25.8057 65.129C25.9704 65.224 26.1224 65.338 26.2617 65.471C26.401 65.5977 26.5277 65.7497 26.6417 65.927L30.0807 71ZM48.2791 64.1315C48.2791 65.1385 48.1113 66.0727 47.7756 66.934C47.4463 67.789 46.9776 68.53 46.3696 69.157C45.7616 69.784 45.0301 70.2748 44.1751 70.6295C43.3201 70.9778 42.3701 71.152 41.3251 71.152C40.2865 71.152 39.3396 70.9778 38.4846 70.6295C37.6296 70.2748 36.895 69.784 36.2806 69.157C35.6726 68.53 35.2008 67.789 34.8651 66.934C34.5295 66.0727 34.3616 65.1385 34.3616 64.1315C34.3616 63.1245 34.5295 62.1935 34.8651 61.3385C35.2008 60.4772 35.6726 59.733 36.2806 59.106C36.895 58.479 37.6296 57.9913 38.4846 57.643C39.3396 57.2883 40.2865 57.111 41.3251 57.111C42.0218 57.111 42.6773 57.1933 43.2916 57.358C43.906 57.5163 44.4696 57.7443 44.9826 58.042C45.4956 58.3333 45.9548 58.6912 46.3601 59.1155C46.7718 59.5335 47.1201 60.0022 47.4051 60.5215C47.6901 61.0408 47.9055 61.6045 48.0511 62.2125C48.2031 62.8205 48.2791 63.4602 48.2791 64.1315ZM45.6666 64.1315C45.6666 63.3778 45.5653 62.7033 45.3626 62.108C45.16 61.5063 44.8718 60.9965 44.4981 60.5785C44.1245 60.1605 43.6685 59.8407 43.1301 59.619C42.5981 59.3973 41.9965 59.2865 41.3251 59.2865C40.6538 59.2865 40.049 59.3973 39.5106 59.619C38.9786 59.8407 38.5226 60.1605 38.1426 60.5785C37.769 60.9965 37.4808 61.5063 37.2781 62.108C37.0755 62.7033 36.9741 63.3778 36.9741 64.1315C36.9741 64.8852 37.0755 65.5628 37.2781 66.1645C37.4808 66.7598 37.769 67.2665 38.1426 67.6845C38.5226 68.0962 38.9786 68.4128 39.5106 68.6345C40.049 68.8562 40.6538 68.967 41.3251 68.967C41.9965 68.967 42.5981 68.8562 43.1301 68.6345C43.6685 68.4128 44.1245 68.0962 44.4981 67.6845C44.8718 67.2665 45.16 66.7598 45.3626 66.1645C45.5653 65.5628 45.6666 64.8852 45.6666 64.1315ZM63.7569 67.7605C63.8962 67.7605 64.0197 67.8143 64.1274 67.922L65.1344 69.0145C64.577 69.7048 63.8899 70.2337 63.0729 70.601C62.2622 70.9683 61.2869 71.152 60.1469 71.152C59.1272 71.152 58.2089 70.9778 57.3919 70.6295C56.5812 70.2812 55.8877 69.7967 55.3114 69.176C54.735 68.5553 54.2917 67.8143 53.9813 66.953C53.6773 66.0917 53.5254 65.1512 53.5254 64.1315C53.5254 63.0992 53.69 62.1555 54.0194 61.3005C54.3487 60.4392 54.811 59.6982 55.4064 59.0775C56.008 58.4568 56.7237 57.9755 57.5534 57.6335C58.383 57.2852 59.3014 57.111 60.3084 57.111C61.309 57.111 62.1957 57.2757 62.9684 57.605C63.7474 57.9343 64.4092 58.365 64.9539 58.897L64.0989 60.0845C64.0482 60.1605 63.9817 60.227 63.8994 60.284C63.8234 60.341 63.7157 60.3695 63.5764 60.3695C63.4814 60.3695 63.3832 60.3442 63.2819 60.2935C63.1805 60.2365 63.0697 60.17 62.9493 60.094C62.829 60.0117 62.6897 59.923 62.5314 59.828C62.373 59.733 62.1894 59.6475 61.9804 59.5715C61.7714 59.4892 61.5275 59.4227 61.2489 59.372C60.9765 59.315 60.6599 59.2865 60.2989 59.2865C59.6845 59.2865 59.1209 59.3973 58.6079 59.619C58.1012 59.8343 57.6642 60.151 57.2969 60.569C56.9295 60.9807 56.6445 61.4873 56.4418 62.089C56.2392 62.6843 56.1379 63.3652 56.1379 64.1315C56.1379 64.9042 56.2455 65.5913 56.4609 66.193C56.6825 66.7947 56.9802 67.3013 57.3539 67.713C57.7275 68.1247 58.1677 68.4413 58.6744 68.663C59.181 68.8783 59.7257 68.986 60.3084 68.986C60.6567 68.986 60.9702 68.967 61.2489 68.929C61.5339 68.891 61.7935 68.8308 62.0279 68.7485C62.2685 68.6662 62.4934 68.5617 62.7024 68.435C62.9177 68.302 63.1299 68.1405 63.3389 67.9505C63.4022 67.8935 63.4687 67.8492 63.5384 67.8175C63.608 67.7795 63.6809 67.7605 63.7569 67.7605ZM78.7314 68.891V71H70.6849V57.263H73.2404V68.891H78.7314ZM86.921 59.296V63.1055H91.728V65.072H86.921V68.9575H93.02V71H84.356V57.263H93.02V59.296H86.921ZM111.283 64.1315C111.283 65.1385 111.115 66.0632 110.779 66.9055C110.444 67.7478 109.972 68.473 109.364 69.081C108.756 69.689 108.024 70.1608 107.169 70.4965C106.314 70.8322 105.364 71 104.319 71H99.0847V57.263H104.319C105.364 57.263 106.314 57.434 107.169 57.776C108.024 58.1117 108.756 58.5835 109.364 59.1915C109.972 59.7932 110.444 60.5152 110.779 61.3575C111.115 62.1998 111.283 63.1245 111.283 64.1315ZM108.661 64.1315C108.661 63.3778 108.559 62.7033 108.357 62.108C108.16 61.5063 107.872 60.9997 107.492 60.588C107.119 60.17 106.663 59.8502 106.124 59.6285C105.592 59.4068 104.991 59.296 104.319 59.296H101.65V68.967H104.319C104.991 68.967 105.592 68.8562 106.124 68.6345C106.663 68.4128 107.119 68.0962 107.492 67.6845C107.872 67.2665 108.16 66.7598 108.357 66.1645C108.559 65.5628 108.661 64.8852 108.661 64.1315ZM119.904 59.296V63.1055H124.711V65.072H119.904V68.9575H126.003V71H117.339V57.263H126.003V59.296H119.904Z"
              fill="white"
            />
          </svg>
        </div>
        <div className=" mt-[100px] flex justify-center items-center">
          <div className=" items-center justify-center  flex flex-col ">
            <h1 className="font-normal text-white text-6xl sm:text-7xl md:text-8xl">Launching Soon</h1>
            <div className=" w-[700px] mt-[30px] md:flex phone:grid phone:items-center  phone:justify-center flex md:justify-between items-center text-[#fff] ">
              {" "}
              <div className="w-full mt-8 sm:mt-10 md:mt-12 md:flex-col flex flex-col sm:flex-row justify-center items-center text-white">
                <div className=" flex w-[135px] justify-between text-center ">
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    <TimerBox value={initialNum} />
                  </span>
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    <TimerBox value={lastNum} />
                  </span>
                </div>
                <span className=" font-[poppins] text-[26px]  mt-[15px] ">DAYS</span>
              </div>
              <div className="w-full mt-8 sm:mt-10 md:mt-12 md:flex-col flex flex-col sm:flex-row justify-center items-center text-white">
                <div className=" flex w-[135px] justify-between text-center ">
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    {/* {timeLeft.hours} */}
                    <TimerBox value={initialHour} />
                  </span>
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    {/* {timeLeft.hours} */}
                    <TimerBox value={lastHour} />
                  </span>
                </div>
                <span className=" font-[poppins] text-[26px]  mt-[15px] ">HOURS</span>
              </div>
              <div className="w-full mt-8 sm:mt-10 md:mt-12 md:flex-col flex flex-col sm:flex-row justify-center items-center text-white">
                <div className=" flex w-[135px] justify-between text-center ">
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    <TimerBox value={initialMinute} />
                  </span>
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    <TimerBox value={lastMinute} />
                  </span>
                </div>
                <span className=" font-[poppins] text-[26px]  mt-[15px] ">MINUTES</span>
              </div>
              <div className="w-full mt-8 sm:mt-10 md:mt-12 md:flex-col flex flex-col sm:flex-row justify-center items-center text-white">
                <div className=" flex w-[135px] justify-between text-center ">
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    <TimerBox value={initialSecond} />
                  </span>
                  <span className="  span  text-[#fff] bg-white flex justify-center items-center text-center rounded-[5px]  bg-opacity-[0.2] font-[mono] text-[96px] w-[62.5px] h-[120px]">
                    <TimerBox value={lastSecond} />
                  </span>
                </div>
                <span className=" font-[poppins] text-[26px]  mt-[15px] ">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center  mt-[60px] items-center font-[poppins] ">
          <p className=" font-[300] text-[20px] text-[#f6f6f6]">We’ll let you know when we are Launching</p>
          <div className=" phone:pb-[50px] mt-[12px] rounded-[10px] flex items-center justify-between w-[350px] ">
            <input className="h-[55px] outline-none text-[16px] rounded-l-[10px] pl-[15px] w-[80%] bg-[#f6f6f6] placeholder:text-[#000] placeholder:text-opacity-50 " placeholder="Email Address" type="email" />
            <button className="bg-[#31B8D6] text-[18px] w-[120px] h-[55px] text-center text-[#f4f4f4] rounded-r-[10px] " type="submit">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
