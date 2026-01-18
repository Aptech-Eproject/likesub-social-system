"use client"

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const features = [
    {
      title: "SMM panels - what are they?",
      description:
        "Panels are platforms to manage your social media growth and engagement efficiently.",
    },
    {
      title: "What SMM services can I find on this panel?",
      description:
        "You can find services for Instagram, Twitter, Facebook, YouTube, TikTok and more.",
    },
    {
      title: "Are SMM services on your panel safe to buy?",
      description:
        "Yes, all our services are safe and verified by our quality team.",
    },
    {
      title: "How does a mass order work?",
      description:
        "Mass orders allow you to boost multiple accounts simultaneously with our bulk system.",
    },
    {
      title: "What does Drip-feed mean?",
      description:
        "Drip-feed spreads your engagement gradually to look more natural and organic.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 px-2 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-center text-gray-700 mb-4">
          Các câu hỏi thường gặp
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto text-sm">
          Chúng tôi đã trả lời một số câu hỏi thường gặp nhất trong hội thảo của
          mình.
        </p>

        <div className="grid md:grid-cols-2 py-6 items-center justify-between gap-8">
          {/* Left: FAQ List */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg p-3 hover:border-cyan-400 transition-900 cursor-pointer group shadow-sm ${openIndex === index ? "border-cyan-400" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium text-gray-800 group-hover:text-cyan-500 text-base ${openIndex === index ? "text-cyan-500" : ""}`}
                  >
                    {feature.title}
                  </span>
                  <ChevronRight
                    size={18}
                    className={`text-gray-400 group-hover:text-cyan-400 transition shrink-0 ${openIndex === index ? "rotate-90 text-cyan-400" : ""}`}
                  />
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 text-sm animate-fade-in">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Illustration */}
          <div className="flex items-center justify-end h-full">
            <Image
              src="/images/faq.png"
              alt="FAQ illustration"
              className="w-full max-w-full h-auto object-contain"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
