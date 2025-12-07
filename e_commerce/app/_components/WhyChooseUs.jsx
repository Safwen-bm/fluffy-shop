// app/_components/WhyChooseUs.jsx
import { CheckCircle2, Truck, Shield, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: Shield, title: "Health Guarantee", desc: "Full vet check + 30-day warranty" },
    { icon: Truck, title: "Free Delivery", desc: "Discreet & climate-controlled transport" },
    { icon: Heart, title: "Lifetime Support", desc: "We're here for you and your pet forever" },
    { icon: CheckCircle2, title: "Ethical Breeding", desc: "Only from licensed, loving breeders" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-16">Why Families Choose FluffyShop</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-8 bg-white rounded-3xl shadow-xl">
              <reason.icon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}