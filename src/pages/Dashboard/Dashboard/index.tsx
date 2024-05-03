import Page from "../../../components/static components/sidebar_page";
import SectionContainer from "../../../components/dashboard/section_container";
import HujraCard from "../../../components/dashboard/hujra_card";
import NewsCard from "../../../components/dashboard/news_card";
import BotCard from "../../../components/dashboard/bot_card";
import ScrapedSumCard from "../../../components/dashboard/scraped_sum_card";
import { Gauge, gaugeClasses } from "@mui/x-charts";


function DashboardPage() {
  return (
    <Page className="p-7 inline-flex overflow-y-auto w-screen flex-col gap-7">
      {/* TODO BUG FIX: children clipping in NavigationBar in mobile mode */}

      {/* Hujraat Container */}
      <SectionContainer className=" flex gap-6 px-8 py-6 flex-col justify-between">
        <span className="px-5 h-min w-min py-2 px- bg-sky-600 rounded-[10px] shadow-inner backdrop-blur-[20px] ">
          <p className=" text-center text-white text-nowrap text-xs font-semibold font-['IBM Plex Sans Arabic'] ">
            انشئ حجرة جديدة
          </p>
        </span>
        <div className="flex flex-row gap-6 ">
          <HujraCard></HujraCard>
          <HujraCard></HujraCard>
          <HujraCard></HujraCard>
          <HujraCard></HujraCard>
        </div>
      </SectionContainer>
      <div className="flex-1 flex flex-row gap-7">
        {/* Last Updates */}
        <SectionContainer className="flex-1 flex-col px-[1.125rem] py-6">
          <p className="text-white text-xl ms-4 mb-6 font-bold font-['IBM Plex Sans Arabic']">
            اخر التحديثات
          </p>
          <div className="flex flex-col gap-3">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          </div>
        </SectionContainer>
        <div className="flex-[3] flex flex-col gap-7">
          <div className="flex-1 flex gap-7">
            {/* Bots Diagram */}
            <SectionContainer className="flex-[8] p-7 flex-row justify-around items-end">
              <div className="gap-2 flex flex-1 flex-col items-center">
                <span className="w-[63px] h-16 bg-zinc-500 rounded-[5px]"></span>
                <p>bot 1</p>
              </div>
              <div className="gap-2 flex flex-1 flex-col items-center">
                <span className="w-[63px] h-8 bg-zinc-500 rounded-[5px]"></span>
                <p>bot 2</p>
              </div>
              <div className="gap-2 flex flex-1 flex-col items-center">
                <span className="w-[63px] h-24 bg-[#E8E8E8] rounded-[5px]"></span>
                <p>bot 3</p>
              </div>
              <div className="gap-2 flex flex-1 flex-col items-center">
                <span className="w-[63px] h-9 bg-zinc-500 rounded-[5px]"></span>
                <p>bot 4</p>
              </div>
              <div className="gap-2 flex flex-1 flex-col items-center">
                <span className="w-[63px] h-[4.5rem] bg-zinc-500 rounded-[5px]"></span>
                <p>bot 5</p>
              </div>
            </SectionContainer>
            {/* Total Data Chart */}
            <SectionContainer className="flex-[3] items-center justify-between flex-col py-5">
              <Gauge
                value={70}
                // height={}
                startAngle={90}
                endAngle={450}
                // outerRadius={58}
                text={({ value }) => `${value}%`}
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    color: "#FFF ",
                    textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                    fontFamily: '"IBM Plex Sans Arabic", sans-serif',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "175.7%",
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#fff",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: "transparent",
                  },
                })}
              />
              <p className=" text-white text-opacity-80 mt-3 text-sm font-semibold font-['IBM Plex Sans Arabic'] leading-[17.57px]">
                مجموع البيانات
              </p>
            </SectionContainer>
          </div>
          <div className="flex-[2] flex gap-7">
            {/* Bots Status */}
            <SectionContainer className="flex-1 flex-col p-8 pl-6">
              <div className="text-right mb-4 text-white text-2xl font-bold font-['IBM Plex Sans Arabic'] leading-[42.17px]">
                البوتات
              </div>
              <div className="flex gap-3 flex-col">
                <BotCard></BotCard>
                <BotCard></BotCard>
                <BotCard></BotCard>
              </div>
            </SectionContainer>
            {/* Scraping Summary */}
            <SectionContainer className="flex-1 flex-col py-8 px-12">
              <div className="text-right mb-4 text-gray-200 text-2xl font-bold font-['IBM Plex Sans Arabic'] leading-[42.17px]">
                ملخص السحب
              </div>
              <div className="flex flex-col gap-3">
                <ScrapedSumCard></ScrapedSumCard>
                <ScrapedSumCard></ScrapedSumCard>
                <ScrapedSumCard></ScrapedSumCard>
              </div>
            </SectionContainer>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default DashboardPage;
