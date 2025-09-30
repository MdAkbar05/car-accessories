import Copyright from "./Copyright";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <SocialMedia />
      <hr className="border border-border" />
      <Copyright />
    </footer>
  );
}
