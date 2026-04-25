export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo_new.svg" alt="Paytm Logo" className="h-10 mb-6" />
            <p className="text-gray-500 text-sm">
              Paytm is India's leading financial services company that offers
              full-stack payments & financial solutions to consumers, offline
              merchants and online platforms.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">CSR</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Recharge & Pay Bills</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Mobile Recharge</li>
              <li className="hover:text-blue-600 cursor-pointer">Mobile Bill Payment</li>
              <li className="hover:text-blue-600 cursor-pointer">Datacard Recharge</li>
              <li className="hover:text-blue-600 cursor-pointer">DTH Recharge</li>
              <li className="hover:text-blue-600 cursor-pointer">Electricity Bill Payment</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Paytm services</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Paytm Money</li>
              <li className="hover:text-blue-600 cursor-pointer">Paytm SmartStore</li>
              <li className="hover:text-blue-600 cursor-pointer">Paytm Payments Bank</li>
              <li className="hover:text-blue-600 cursor-pointer">Paytm First Games</li>
              <li className="hover:text-blue-600 cursor-pointer">Paytm First</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 One97 Communications Limited. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-gray-600">Twitter</span>
            <span className="cursor-pointer hover:text-gray-600">Instagram</span>
            <span className="cursor-pointer hover:text-gray-600">Facebook</span>
            <span className="cursor-pointer hover:text-gray-600">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
