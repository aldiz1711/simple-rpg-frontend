const ExpBar = ({
  currentExp,
  maxExp,
}: {
  currentExp: number;
  maxExp: number;
}) => {
  const expPercentage = (currentExp / maxExp) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-4 bg-green-500 rounded-full"
        style={{ width: `${expPercentage}%` }}
      ></div>
    </div>
  );
};

export default ExpBar;
