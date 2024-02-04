export default function Header() {
  return (
    <>
    <div className="flex flex-row justify-center">
      <header
        className="px-0 my-5 mb-10 relative [text-wrap:balance] w-[400px] text-3xl text-[30px] font-extrabold tracking-wider font-[Minecraftia] text-center bg-gradient-to-b from-yellow-300 to-red-300 
       bg-clip-text text-transparent"
      >
        <p>Sorting Algorithm Visualiser 3000</p>
        <div
          className="absolute bottom-0 right-0 text-yellow-300 text-sm font-normal tracking-wide font-[Minecraftia] [text-shadow:_3px_3px_#3F3F00] -rotate-[25deg] "
        >
          <div className="animate-pop">
            <strong className="">NOW WITH SOUND!</strong>
          </div>
        </div>
      </header>
      </div>
    </>
  );
}
