export default function Sheet({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-surface rounded-xl p-4 font-souvenir text-primary">
      {children}
    </div>
  );
}
