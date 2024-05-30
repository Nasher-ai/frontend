type Props = {
    children: React.ReactNode
}

export default function Section({children}: Props) {
  return (
    <div className="self-stretch px-1 py-1 bg-neutral-800 rounded-2xl shadow justify-center items-center flex-row gap-1 flex">
      {children}
    </div>
  );
}