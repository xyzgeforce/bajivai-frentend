"use client";

import { useAppSelector } from "@/app/redux-arch/store";
import React, { useState } from "react";
import themeChange from "@/theme";
import { useRouter } from "next/navigation";
import Withdrawal from "./subcomponent/Withdrawal";
import PamentModel from "./PamentModel";
import BetSlipModal from "./BetSlipModal";
const BottomNavbar = () => {
  const [active, setActive] = useState(1);
  const { showSideBar1, theme } = useAppSelector(
    (store) => store.combineR.NavStateReducer
  );
  const router = useRouter();
  const bottom = [
    {
      id: 1,
      title: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
        >
          <path
            d="M25.0501 9.02501L17.85 3.98751C15.8875 2.61251 12.875 2.68751 10.9875 4.15001L4.72505 9.03751C3.47505 10.0125 2.48755 12.0125 2.48755 13.5875V22.2125C2.48755 25.4 5.07505 28 8.26255 28H21.7375C24.925 28 27.5126 25.4125 27.5126 22.225V13.75C27.5126 12.0625 26.4251 9.98751 25.0501 9.02501ZM15.9375 23C15.9375 23.5125 15.5125 23.9375 15 23.9375C14.4875 23.9375 14.0625 23.5125 14.0625 23V19.25C14.0625 18.7375 14.4875 18.3125 15 18.3125C15.5125 18.3125 15.9375 18.7375 15.9375 19.25V23Z"
            fill={active ===1? "#CC9900" : theme ? "black" : "white"}
          />
        </svg>
      ),
      route: "/home",
    },
    {
      id: 2,
      title: "Sport",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <path
            d="M29.7816 15.4962C29.7914 15.162 29.8795 10.385 27.0525 7.27531C26.9269 6.99734 26.3311 5.87703 24.4083 4.50781C23.1366 3.50703 21.81 2.80062 21.7013 2.74391C21.7003 2.74344 21.6984 2.7425 21.6975 2.74203C21.5775 2.67781 19.2328 1.4375 16.387 1.4375C16.1709 1.4375 15.9572 1.45016 15.7458 1.46469V1.46094C13.5759 1.41359 11.4206 1.97187 10.1217 2.55828C8.96954 3.07859 7.69032 3.95094 7.59798 4.01844C6.00235 4.91094 2.97657 8.49266 2.73704 10.3906C1.77001 11.6267 0.961882 17.1791 2.73891 20.5611C3.98485 25.2612 8.67516 27.6134 9.04829 27.7939C9.27516 27.9387 11.8313 29.5189 14.9714 29.5189C15.1031 29.5189 15.8995 29.563 16.1836 29.563C19.5778 29.563 24.6075 27.1705 25.6603 25.2964C28.553 23.1805 30.0525 17.7275 29.7816 15.4962ZM9.07407 22.557C7.72922 20.3816 6.96282 17.5391 6.79876 16.8861C7.22438 16.2481 9.32391 13.1525 10.5202 12.2211C11.1975 12.3458 14.0259 12.8652 16.6936 13.348C17.0288 14.2166 18.4992 18.0491 18.9202 19.5284C18.4561 20.0787 16.6331 22.2012 14.8383 23.8634C12.9328 23.8723 9.69188 22.7731 9.07407 22.557ZM25.98 7.33437C25.9744 7.54531 25.9242 8.29531 25.5652 9.15641C24.8522 8.79219 23.0602 8.01219 20.6039 7.88047C20.2322 7.33156 18.8334 5.41766 16.6242 4.09016C16.9266 3.49859 17.3475 2.77719 17.5936 2.55734C17.6733 2.53484 17.797 2.51422 17.9855 2.51422C19.17 2.51422 21.2166 3.29 21.3947 3.35891C21.5836 3.45875 25.2623 5.43969 25.98 7.33437ZM6.2686 16.4431C4.66407 16.1694 3.71016 15.6706 3.42516 15.5019C2.82844 13.3377 3.30891 10.9986 3.38298 10.6634C3.97173 9.61062 5.64797 6.92703 6.75376 6.4175C7.89985 6.18359 9.32907 6.47422 9.91126 6.61625C9.85641 7.37328 9.75094 9.48828 10.0641 11.7078C8.79563 12.7287 6.78797 15.6673 6.2686 16.4431ZM15.6023 2.15469C15.9623 2.18141 16.4906 2.26016 16.8525 2.3675C16.4916 2.8475 16.1217 3.55906 15.9469 3.91062C15.2109 4.03109 12.4158 4.56547 10.223 5.98719C9.78094 5.87 8.44594 5.55734 7.18173 5.66516C7.49485 5.05906 7.96266 4.61094 8.01282 4.565C8.18673 4.44031 11.5345 2.09797 15.6023 2.14859V2.15469ZM24.5536 20.0108C24.0052 19.9883 21.892 19.8678 19.575 19.3236C19.1311 17.7758 17.6653 13.9592 17.3302 13.0911C18.7673 11.037 20.1839 9.10203 20.5777 8.56578C23.2439 8.71203 25.1161 9.68469 25.4784 9.88766C27.023 12.3716 27.3619 14.9084 27.4083 15.3322C26.588 17.885 24.9656 19.6039 24.5536 20.0108ZM2.46329 13.8683C2.50266 14.4617 2.59782 15.0866 2.76985 15.7044C2.61141 16.1089 2.50876 16.5289 2.45016 16.947C2.34516 15.8872 2.36438 14.817 2.46329 13.8683ZM6.98391 24.8178C7.69079 24.1367 8.56219 23.4739 8.90016 23.2236C9.66422 23.4927 12.802 24.5534 14.8022 24.5534C15.143 25.0105 16.2572 26.4416 17.6231 27.5356C16.7728 28.3677 15.5447 28.7605 15.3277 28.8256C11.5181 28.9278 7.80797 26.7866 6.98391 24.8178ZM17.0447 28.82C17.4769 28.5683 17.9273 28.2369 18.3 27.8173C18.908 27.7334 21.517 27.2844 23.8748 25.5523C24.0305 25.5692 24.2869 25.5898 24.5733 25.5819C23.1586 26.968 19.7067 28.5162 17.0447 28.82ZM24.2747 24.8937C25.1217 22.6869 25.0856 21.0228 25.0439 20.4912C25.5089 20.0356 27.1045 18.3355 27.99 15.7508C28.4672 15.8305 28.7775 15.9519 28.9247 16.0198C28.9758 16.2073 29.0611 16.6405 29.0128 17.2972C28.6519 19.6611 27.4059 23.2034 25.2234 24.7695C25.0041 24.8816 24.6178 24.9059 24.2747 24.8937Z"
            fill={active === 2? "#CC9900" : theme ? "black" : "white"}
          />
        </svg>
      ),
      route: "/sports",
    },
    {
      id: 3,
      title: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M17.9088 3.31768L14.2938 11.7327H10.6788C10.0788 11.7327 9.49383 11.7777 8.92383 11.8977L10.4238 8.29768L10.4838 8.16268L10.5738 7.92268C10.6188 7.81768 10.6488 7.72768 10.6938 7.65268C12.4338 3.61768 14.3838 2.35768 17.9088 3.31768Z"
            fill="white"
          />
          <path
            d="M28.0966 12.1343L28.0666 12.1193C27.1666 11.8643 26.2516 11.7293 25.3216 11.7293H15.9316L19.3066 3.8843L19.3516 3.7793C19.5616 3.8543 19.7866 3.9593 20.0116 4.0343L23.3266 5.4293C25.1716 6.1943 26.4616 6.9893 27.2566 7.9493C27.3916 8.1293 27.5116 8.2943 27.6316 8.4893C27.7666 8.6993 27.8716 8.9093 27.9316 9.1343C27.9916 9.2693 28.0366 9.3893 28.0666 9.5243C28.2916 10.2893 28.3066 11.1593 28.0966 12.1343Z"
            fill="white"
          />
          <path
            d="M27.4325 14.2805C26.7575 14.0855 26.0525 13.9805 25.3175 13.9805H10.6774C9.65742 13.9805 8.69742 14.1755 7.79742 14.5655C5.18742 15.6905 3.35742 18.2855 3.35742 21.3005V24.2255C3.35742 24.5855 3.38742 24.9305 3.43242 25.2905C3.76242 30.0605 6.31242 32.6105 11.0824 32.9255C11.4274 32.9705 11.7724 33.0005 12.1474 33.0005H23.8475C29.3975 33.0005 32.3225 30.3605 32.6075 25.1105C32.6225 24.8255 32.6375 24.5255 32.6375 24.2255V21.3005C32.6375 17.9855 30.4325 15.1955 27.4325 14.2805ZM21.7475 24.2855H19.1225V27.0005C19.1225 27.6155 18.6125 28.1255 17.9975 28.1255C17.3825 28.1255 16.8725 27.6155 16.8725 27.0005V24.2855H14.2474C13.6324 24.2855 13.1224 23.7905 13.1224 23.1605C13.1224 22.5455 13.6324 22.0355 14.2474 22.0355H16.8725V19.5005C16.8725 18.8855 17.3825 18.3755 17.9975 18.3755C18.6125 18.3755 19.1225 18.8855 19.1225 19.5005V22.0355H21.7475C22.3625 22.0355 22.8725 22.5455 22.8725 23.1605C22.8725 23.7905 22.3625 24.2855 21.7475 24.2855Z"
            fill="white"
          />
        </svg>
      ),
      route: "",
    },
    {
      id: 4,
      title: "Casino",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <g clip-path="url(#clip0_204_379)">
            <path
              d="M6.56891 29.6748C5.79828 29.6748 5.13711 29.0912 5.06281 28.3147L2.6968 3.63501C2.6586 3.23775 2.77813 2.84892 3.03313 2.54048C3.29117 2.2283 3.6561 2.03541 4.06133 1.9972L5.24141 1.85095L5.35649 2.78142L4.16281 2.92908C3.99383 2.94525 3.85414 3.01861 3.75594 3.13767C3.66055 3.25298 3.61602 3.39783 3.63008 3.54548L5.9961 28.2254C6.02586 28.5357 6.30828 28.7652 6.62516 28.7345L20.0244 27.4944L20.1109 28.4277L6.71211 29.6677C6.66406 29.6724 6.61625 29.6748 6.56891 29.6748Z"
              fill={active === 4 ? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M20.016 28.2931H8.13786C7.30325 28.2931 6.62427 27.6198 6.62427 26.7922V2.00141C6.62474 1.17336 7.30372 0.5 8.13786 0.5H24.1633C24.9983 0.5 25.6775 1.17359 25.6775 2.00141V18.458H24.74V2.00141C24.74 1.69039 24.4813 1.4375 24.1633 1.4375H8.13786C7.82052 1.4375 7.562 1.69063 7.56177 2.00164V26.7922C7.56177 27.103 7.82028 27.3556 8.13786 27.3556H20.016V28.2931Z"
              fill={active === 4 ? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M9.95557 6.78711H13.1698V7.72461H9.95557V6.78711Z"
              fill={active === 4? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M9.94137 8.77015L9.06738 8.43101L11.1259 3.12711H11.9999L14.0584 8.43101L13.1844 8.77015L11.563 4.59172L9.94137 8.77015Z"
              fill={active === 4 ? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M23.807 25.1047C23.7276 25.1047 23.6479 25.0845 23.5766 25.0438L18.8774 22.3897C18.7304 22.3067 18.6395 22.1516 18.639 21.9828C18.6386 21.8143 18.729 21.6582 18.8755 21.5745L23.6047 18.8759C23.7477 18.7944 23.924 18.7939 24.0676 18.875L28.7676 21.5295C28.9145 21.6125 29.0054 21.7681 29.0059 21.9364C29.0064 22.1054 28.9159 22.261 28.7694 22.3447L24.0395 25.0428C23.9671 25.0843 23.8872 25.1047 23.807 25.1047ZM20.0572 21.9795L23.8058 24.0967L27.5872 21.9397L23.8382 19.8221L20.0572 21.9795Z"
              fill={active === 4? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M23.8613 30.5C23.7807 30.5 23.7 30.4789 23.6281 30.4377C23.4839 30.3547 23.3942 30.2019 23.3925 30.0357L23.3382 24.6406C23.3365 24.4707 23.427 24.313 23.5746 24.2286L28.3046 21.5305C28.4492 21.448 28.6261 21.4485 28.7703 21.531C28.9142 21.6139 29.0039 21.7667 29.0056 21.9329L29.0602 27.3263C29.0618 27.4967 28.9714 27.654 28.8237 27.7384L24.0935 30.4384C24.0218 30.4794 23.9414 30.5 23.8613 30.5ZM24.2782 24.9067L24.3221 29.2283L28.1199 27.0608L28.0758 22.7399L24.2782 24.9067Z"
              fill={active === 4 ? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M23.866 30.5C23.8648 30.5 23.8629 30.5 23.8613 30.5C23.7818 30.5 23.7024 30.4799 23.6309 30.4391L18.9312 27.785C18.7854 27.7025 18.6945 27.5488 18.6928 27.3817L18.6389 21.9863C18.6373 21.8188 18.7252 21.6631 18.8693 21.5781C19.0135 21.493 19.1921 21.4911 19.3381 21.5734L24.0373 24.2274C24.1831 24.3099 24.274 24.4637 24.2757 24.6308L24.3293 29.9595C24.3328 29.983 24.3345 30.0067 24.3345 30.031C24.3347 30.29 24.125 30.5 23.866 30.5ZM19.6278 27.1016L23.3843 29.2234L23.3407 24.9113L19.5844 22.7895L19.6278 27.1016Z"
              fill={active === 4? "#CC9900" : theme ? "black" : "white"}
            />
            <path
              d="M16.1515 18.8769L12.8775 15.6416C12.4254 15.1941 12.1768 14.6 12.177 13.9677C12.177 13.3356 12.4257 12.7416 12.8768 12.2954L12.9085 12.2647C13.3561 11.8224 13.9543 11.5773 14.5904 11.5773C15.1697 11.5773 15.7177 11.7807 16.1513 12.1534C16.5849 11.7807 17.1329 11.5773 17.7122 11.5773C18.3483 11.5773 18.9467 11.8222 19.3969 12.2673L19.4279 12.2984C19.8762 12.7416 20.1251 13.3356 20.1254 13.9679C20.1254 14.6002 19.8765 15.1944 19.4248 15.6411L16.1515 18.8769ZM14.5904 12.5148C14.2027 12.5148 13.8385 12.6636 13.5647 12.9341L13.5333 12.9648C13.2645 13.2308 13.1145 13.5882 13.1145 13.9679C13.1145 14.3478 13.2643 14.7052 13.5361 14.9745L16.1515 17.5585L18.7655 14.9738C19.0376 14.705 19.1876 14.3476 19.1876 13.9679C19.1874 13.588 19.0376 13.2308 18.7653 12.962L18.7343 12.9308C18.4641 12.6636 18.0999 12.5148 17.7122 12.5148C17.3243 12.5148 16.9601 12.6636 16.6866 12.9341L16.152 13.464L15.6158 12.9338C15.3422 12.6636 14.978 12.5148 14.5904 12.5148Z"
              fill={active === 4? "#CC9900" : theme ? "black" : "white"}
            />
          </g>
          <defs>
            <clipPath id="clip0_204_379">
              <rect
                width="30"
                height="30"
                fill={active === 4 ? "#CC9900" : theme ? "black" : "white"}
                transform="translate(0.875 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      route: "/casino",
    },
  
  ];
  const handleRoute = (id: any, route: any) => {
    setActive(id);
    router.push(route);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-[1px] rounded-tl-[20px] rounded-tr-[20px]  fixed bottom-0 left-0 right-0">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        className={` w-[100%] rounded-tl-[20px] rounded-tr-[20px]  ${
          theme ? "bg-gray-300" : `bg-[${themeChange.dark.bg1}]`
        } p-2 flex justify-around items-center shadow-2xl`}
      >
        {bottom.map((item) => {
          const isMiddleIcon = item.id === 3;

          return (
            <div
              key={item.id}
              onClick={() => handleRoute(item.id, item.route)}
              className={`flex ${
                active === item.id
                  ? "text-#CC9900-500"
                  : theme
                  ? "text-black"
                  : "text-white"
              } ${
                isMiddleIcon ? "relative" : ""
              }  justify-center items-center flex-col gap-1`}
              style={{
                color: active == item.id ? "#CC9900" : theme ? "black" : "white",
              }}
            >
              {isMiddleIcon ? (
                <div className="bg-[#EAAB0F] h-[60px] w-[60px] flex justify-center items-center relative top-[-20px] rounded-[50%]">
                  <PamentModel heading="withdraw" code="0" />
                </div>
              ) : (
                item.icon
              )}
              {isMiddleIcon && <div className="curve-design"></div>}
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          );
        })}
        <BetSlipModal />
      </div>
    </div>
  );
};

export default BottomNavbar;
