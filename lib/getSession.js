import baseUrl from "@/lib/baseUrl";

export default async function getSession() {
  const res = await fetch(`${baseUrl}/api/auth/session`);
  const session = await res.json();
  return session;
}
