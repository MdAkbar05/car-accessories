import paymentsImage from "@/public/assets/icons/payments.jpg";
export default function Copyright() {
  return (
    <div>
      <div className="flex items-center justify-between sm:flex-col md:flex-row py-8">
        <p className="text-lg text-gray-400">
          Copyright &copy; 2023, All Rights Reserved
        </p>
        <div className="flex gap-2">
          <img src={paymentsImage.src} alt="payment" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
