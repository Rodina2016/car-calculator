type PropsType = {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export const OptionItem = ({ isActive = false, onClick, children, className }: PropsType) => {
  const modelStyles = '';
  const activeModelStyles = 'rounded-full bg-accent-200';

  return (
    <div className={`${className} cursor-pointer`} onClick={onClick}>
      <div
        className={`w-15 h-15 flex items-center justify-center ${
          isActive ? activeModelStyles : modelStyles
        }`}
      >
        <div
          className={`w-13.5 h-13.5 lg:w-12 lg:h-12 bg-white rounded-full border overflow-hidden flex items-center justify-center ${
            isActive ? 'border-white' : 'border-gray-medium'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
