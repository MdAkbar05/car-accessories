export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="w-12 h-12 animate-spin"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            className="text-primary"
            d="M4 10a 8 8 0 0116 0v1a8 8 0 0110 0v-1zM8 9.887l1.839 3.152a9 9 0 0118.83 0l5.072 2.312a8.998 8.998 0 01-7.95 0l-3.996-.838V7.95z"
          />
        </svg>
        <p className="text-lg font-bold">Loading...</p>
      </div>
    </div>
  );
}
