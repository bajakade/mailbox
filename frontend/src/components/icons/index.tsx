import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  numCount: number;
};
export const IconWithBadge = ({ icon: Icon, numCount }: Props) => {
  return (
    <div className="relative inline-block">
      <Icon className="text-2xl" />
      {numCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {numCount}
        </span>
      )}
    </div>
  );
};
