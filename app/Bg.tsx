"use client";

export default function Bg({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber = getRandomNumber(1, 11);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between md:p-12 lg:p-24 ${
        randomNumber === 1
          ? "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
          : randomNumber === 2
          ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
          : randomNumber === 3
          ? "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
          : randomNumber === 4
          ? "bg-gradient-to-r from-rose-700 to-pink-600"
          : randomNumber === 5
          ? "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400"
          : randomNumber === 6
          ? "bg-gradient-to-r from-emerald-500 to-lime-600"
          : randomNumber === 7
          ? "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
          : randomNumber === 8
          ? "bg-gradient-to-r from-gray-700 via-gray-900 to-black"
          : randomNumber === 9
          ? "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500"
          : randomNumber === 10
          ? "bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900"
          : randomNumber === 11
          ? "bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500"
          : ""
      }`}
    >
      {children}
    </main>
  );
}
