import Header from "./header";

export default function CorpsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-5 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header />
      {children}
    </div>
  );
}
