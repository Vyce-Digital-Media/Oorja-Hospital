import React, { useState } from 'react';

// Curated high-quality Unsplash medical/clinical photos as seamless fallbacks
const fallbackMap = {
  "/carousel-1.jpg": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80", // Modern clean hospital lobby/consultation
  "/about-1.jpg": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80", // Medical team / facility
  "/doctor-1.jpg": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80", // Male doctor
  "/doctor-2.jpg": "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80", // Female doctor
  "/service-1.jpg": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", // Digestive care / medical test
  "/digestive-ibs.jpg": "/digestive-ibs.jpg", // Person with IBS / digestive discomfort
  "/liver-fibroscan.jpg": "/liver-fibroscan.jpg", // Doctor performing FibroScan on patient
  "/obesity-consultation.jpg": "/obesity-consultation.jpg", // Overweight patient in obesity consultation
  "/pancreatobiliary-ercp.jpg": "/pancreatobiliary-ercp.jpg", // Bile duct stone / pancreatitis ERCP monitor
  "/service-2.jpg": "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80", // Liver care / anatomy diagnosis
  "/service-3.jpg": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80", // Diet / wellness / obesity consultation
  "/service-4.jpg": "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=800&q=80", // Pancreas / gall bladder diagnosis
  "/service-5.jpg": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", // Oncology screening / lab
  "/service-6.jpg": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", // Endoscopy suite / operating theater
  "/service-7.jpg": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", // Ultrasound machine / fetal scan
  "/service-8.jpg": "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=80", // Multiple pregnancy / maternal care
  "/service-9.jpg": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80", // Doctor counselling expectant mother
  "/service-10.jpg": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80", // Advanced testing / genetic procedure
  "/service-11.jpg": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", // Echocardiography / heart monitor
  "/service-12.jpg": "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80", // Neurosonography / brain monitor
};

export default function MedicalImage({ src, alt, className = "", ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackMap[src]) {
      setImgSrc(fallbackMap[src]);
      setHasError(true);
    } else if (!hasError) {
      // Default general medical fallback if not in map
      setImgSrc("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80");
      setHasError(true);
    }
  };

  const defaultFit = className.includes("object-") ? "" : "object-cover";

  return (
    <img
      src={imgSrc}
      alt={alt || "Medical facility or procedure"}
      onError={handleError}
      className={`${defaultFit} ${className}`.trim()}
      loading={src === "/carousel-1.jpg" ? "eager" : "lazy"}
      {...props}
    />
  );
}
