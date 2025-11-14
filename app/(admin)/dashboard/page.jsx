export default async function DashboardHome() {
  return (
    <>
      {/* Footer Message */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Best Parts Dashboard — All rights reserved.
      </div>
    </>
  );
}
