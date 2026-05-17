
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-pure-black pt-[88px]">
        {children}
      </div>
    </>
  );
}
