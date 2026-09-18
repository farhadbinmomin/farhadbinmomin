import Header from "@/components/Header";
import BackgroundMusic from "@/components/BgMusic";
import { colors } from "@/assets/lib/colors";

export default function HomeScreen() {
  return (
    <main className=" flex flex-col justify-between max-h-dvh my-auto w-full overflow-hidden ">
      {/* Center Screen: Main Name Display */}
      <BackgroundMusic />
      <div className="my-auto flex flex-col justify-center py-6 select-none">
        <h1
          className="text-[12vw] md:text-[8rem] font-extrabold tracking-tight leading-none break-words"
          style={{ color: colors.fontcolor1 }}
        >
          Farhad
        </h1>
        <h1
          className="text-[12vw] md:text-[8rem] font-extrabold tracking-tight leading-none mt-2 break-words"
          style={{ color: colors.fontcolor2 }}
        >
          Bin Momin
        </h1>
      </div>
    </main>
  );
}
