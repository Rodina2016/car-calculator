export const Header = () => {
  return (
    <div className="flex">
      <button
        onClick={() => window.history.back()}
        className="cursor-pointer flex justify-center items-center text-accent-200 w-15 h-15 ml-7.5"
      >
        <ArrowIcon className="rotate-180 " />
      </button>
      <div className="flex items-center justify-center w-full">
        <Logo />
      </div>
    </div>
  );
};
