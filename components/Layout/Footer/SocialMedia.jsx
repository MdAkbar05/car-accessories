import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <section className="py-20 flex sm:justify-center md:justify-between gap-32 sm:flex-col md:flex-row">
      <div className="space-y-4 flex-5/12 ">
        <p>
          At our store, you’ll find an impressive selection of batteries from
          renowned brands, ensuring reliable power solutions for all types of
          vehicles.
        </p>
        <div className="flex gap-4 text-tertiary">
          <div className="w-11 h-11 rounded-full bg-gray-300 flexCenter">
            <FaFacebookF size={32} />
          </div>
          <div className="w-11 h-11 rounded-full bg-gray-300 flexCenter">
            <FaLinkedinIn size={32} />
          </div>
          <div className="w-11 h-11 rounded-full bg-gray-300 flexCenter">
            <FaYoutube size={32} />
          </div>
        </div>
      </div>
      <div className="sm:hidden md:block space-y-4 flex-2/12">
        <b>Company</b>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="sm:hidden md:block space-y-4  flex-2/12">
        <b>Help</b>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Orders</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="sm:hidden md:block space-y-4 flex-2/12">
        <b>Help</b>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Orders</li>
          <li>FAQ</li>
        </ul>
      </div>
    </section>
  );
}
