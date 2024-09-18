//this is home page associated with the route '/'
"use client"

import TypeIt from "typeit-react";
import Background from "./assets/background";
import { useTheme } from 'next-themes';
export default function Home() {

  const {theme} = useTheme();

    // 테마에 따른 색상 설정
  const color = theme === "light" ? "#FFD5D9" : "#E44636";

  return (
    <main className="w-full h-[calc(100vh-70px)] mt-[70px] flex flex-col items-center justify-center text-center">
      <div className="md:h-1/2 h-2/3">
        <div className="md:h-24 h-32">
          <TypeIt
            options={{
              strings: ["안녕하세요 : ) <br/> 사용자 경험을 중시하는 Frontend 개발자 이은지입니다."],
              speed: 100,
                loop: true,
                loopDelay: [2500],
                waitUntilVisible: true,
            }}
            className='mb-6 font-Pretendard font-semibold md:text-[28px]  text-gray-600 dark:text-dark-gray-600 text-[22px]'
          />
        </div>
        <p className=" font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px] ">저는 코딩을 처음 접했을 때, 사용자와 직접 상호작용할 수 있는 점에 매료되어 </p>
        <p className="font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px]">프론트엔드 개발자의 길을 선택하게 되었습니다.</p> 
        <p className="font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px]">이후 다양한 IT 서비스 프로젝트에 참여하며, 하나의 프로덕트를 완성하는 개발자로 성장해왔습니다. </p>
        <p className="font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px]">  저는 항상 최상의 UX를 제공하기 위해 다양한 기술 스택을 습득하고, </p>
        <p className="font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px]">  각 프로젝트에 맞는 기술을 선택해 적용하고 있습니다.</p>
        <p className="font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px]">앞으로도 사용자 친화적이고, 성능이 뛰어난 웹 서비스를 제공하기 위해 끊임없이 노력하며, </p>
        <p className="font-Pretendard font-light md:text-[18px] text-gray-500 dark:text-dark-gray-500 text-[16px]">프론트엔드 개발자로서 더 성장해 나가고자 합니다.</p>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden -z-10">
          <Background color={color}  />
        </div>
      </main>


  );
}
