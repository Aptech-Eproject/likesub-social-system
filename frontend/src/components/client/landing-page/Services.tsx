import {
  Building2,
  CreditCard,
  Layers,
  Package,
  Shield,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    { icon: Package, label: "Đại lý" },
    {
      icon: Layers,
      label: "Dịch vụ chất lượng cao",
    },
    { icon: Building2, label: "Hỗ trợ" },
    { icon: Zap, label: "Cấp nhật" },
    { icon: CreditCard, label: "Hỗ trợ API" },
    {
      icon: Shield,
      label: "Thanh toán an toàn",
    },
  ];

  return (
    <section className="mt-16 pt-20 pb-16 py-26 px-52 bg-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <service.icon className="text-green-400" size={50} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {service.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
