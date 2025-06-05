const MainContent = () => {
  return <div className="container mx-auto">Cheyenne Ling</div>;
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <MainContent />
      </main>
    </div>
  );
}
