import sound from "/click.mp4"

interface SliderProps {
  handleSpeedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  speed: number;
}

function play(){
  new Audio(sound).play();
}

const Slider = (props: SliderProps) => {
  return (
    <div className="flex sm:flex-row justify-center sm:min-w-[250px] min-w-[155px]">
      <input
        type="range"
        id="slider"
        min={0}
        max={100}
        onChange={props.handleSpeedChange}
        onMouseUp={play}
        className="absolute h-[40px] sm:min-w-64 w-[12rem] disabled:cursor-not-allowed disabled:text-gray-400"
      />
      <div className="relative bottom-[-8px] select-none">
        <label
          htmlFor="slider"
          className="font-[Minecraftia] text-white text-xs sm:text-sm"
        >
          SPEED:{" "}
          {(props.speed - 100) * -1 === 100
            ? "ULTRA FAST"
            : (props.speed - 100) * -1}
        </label>
      </div>
    </div>
  );
};

export default Slider;
