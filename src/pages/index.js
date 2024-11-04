// Use API - [GET] https://dummyapi.online/api/movies

export default function Home() {
  return (
    <div className="w-full max-w-screen-sm mx-auto block py-12 space-y-3">
      <div className="border border-gray-500 rounded-md p-4 w-full space-y-4">
        <p className="text-lg font-bold">Movie Title</p>
        <div className="flex items-center gap-3">
          <p className="text-sm">Rating &mdash;</p>
          <p className="text-6xl font-black">6.1</p>
        </div>
      </div>
    </div>
  );
}
