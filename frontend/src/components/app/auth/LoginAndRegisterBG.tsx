export default function LoginAndRegisterBG({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="bg-[url('@/assets/bgAuthViews.png')] h-screen bg-no-repeat bg-cover flex items-center justify-center ">
      <div className="bg-white p-5 rounded-2xl shadow-xl w-9/12 md:w-lg xl:w-2xl animate__animated animate__fadeInBottomRight">
        <h2 className="text-5xl font-Main font-bold mb-4 text-center text-mainColor">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
