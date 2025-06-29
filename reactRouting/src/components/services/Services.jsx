import { Link } from "react-router-dom";
import { Briefcase, FileText, Banknote, Building2, BookText, MessageSquare } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Income Tax Return (ITR)",
      description:
        "Fast and accurate ITR filing for individuals, freelancers, and businesses. Maximize deductions and stay compliant.",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "GST Registration & Filing",
      description:
        "Seamless GST registration and return filing to keep your business tax compliant and penalty-free.",
      icon: <Banknote className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Business Registration",
      description:
        "Choose the right business structure and register your startup smoothly with our legal guidance.",
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Accounting & Bookkeeping",
      description:
        "Get professional bookkeeping and financial reporting support to manage your business efficiently.",
      icon: <BookText className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "TDS Returns & Compliance",
      description:
        "End-to-end management of TDS deductions, deposits, and return filings as per the latest tax norms.",
      icon: <Briefcase className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Financial & Tax Advisory",
      description:
        "Personalized advice for tax planning, investments, and compliance to boost savings and growth.",
      icon: <MessageSquare className="w-8 h-8 text-orange-600" />,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We offer comprehensive financial, tax, and compliance services tailored for individuals, businesses, and startups.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition border border-gray-100"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full shadow hover:bg-orange-700 transition"
        >
          Contact Us for a Free Consultation
        </Link>
      </div>
    </div>
  );
}
