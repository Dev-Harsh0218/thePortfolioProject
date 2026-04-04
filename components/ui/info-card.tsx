type InfoCardProps = {
  label: string;
  value: string;
};

export function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="rounded-[16px] border border-black/[0.07] bg-white/[0.72] p-[18px]">
      <p
        className="mb-[10px] text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {label}
      </p>
      <p className="text-lg font-semibold text-[#121417]">{value}</p>
    </div>
  );
}
