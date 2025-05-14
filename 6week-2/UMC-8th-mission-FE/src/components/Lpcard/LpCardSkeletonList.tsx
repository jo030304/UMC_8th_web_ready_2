import LpCardSkeleton from "./LpCardSkeleton.tsx";

interface LpCardSkeletonListProps {
  count: number;
}

const LpCardSkeletonList = ({ count }: LpCardSkeletonListProps) => {
  return (
    <>
      {new Array(count).fill({ value: 0 }).map((_, idx: number) => (
        <LpCardSkeleton key={idx} />
      ))}
    </>
  );
};

export default LpCardSkeletonList;