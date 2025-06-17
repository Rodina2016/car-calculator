type PropsType = {
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const OptionItem = ({ isActive, onClick, children }: PropsType) => {
  const modelStyles = '';
  const activeModelStyles = 'rounded-full bg-accent-200';

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div
        className={`w-15 h-15 flex items-center justify-center ${
          isActive ? activeModelStyles : modelStyles
        }`}
      >
        <div
          className={`w-12 h-12 bg-white rounded-full border overflow-hidden flex items-center justify-center ${
            isActive ? 'border-white' : 'border-gray-medium'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
