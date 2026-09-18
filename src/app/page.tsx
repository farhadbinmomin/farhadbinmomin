import Header from "@/components/Header";
import BackgroundMusic from "@/components/BgMusic";
import { colors } from "@/assets/lib/colors";

export default function HomeScreen() {
  return (
    <main className="flex flex-col my-auto w-full overflow-hidden pl-8">
      <BackgroundMusic />

      {/* Full space child container without scrollbars */}
      <div className="flex-1 h-full w-full flex flex-col justify-center py-6 select-none overflow-hidden">
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
