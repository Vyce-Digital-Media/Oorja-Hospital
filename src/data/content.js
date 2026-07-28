// Structured export of content.txt
// All copy is identical to content.txt verbatim

export const globalData = {
  brandName: "Oorja Gastro-Liver and Fetal Medicine Centre",
  shortName: "Oorja Centre",
  tagline: "Integrating Science, Energy and Life",
  contact: {
    address: "Plot No-1, M.J.Park Society, Nr. DRB College, New City Light Rd, Surat, Gujarat 395007",
    phone: "+91 87807 61808",
    email: "oorjagfmc@gmail.com",
    mapUrl: "https://maps.app.goo.gl/Q9qjTD8tYFkaVp2E7",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.590124119934!2d72.78854467605912!3d21.16870028292857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec74c86bfd%3A0x6b306fc6e2327702!2sOorja%20Gastro-Liver%20and%20Fetal%20Medicine%20Centre!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin",
    whatsappUrl: "https://wa.me/918780761808",
  },
  social: {
    facebook: "https://www.facebook.com/oorjagfmc/",
    instagram: "https://www.instagram.com/oorjagfmc/",
    linkedin: "https://www.linkedin.com/company/oorja-gastro-liver-and-fetal-medicine-centre/",
  },
  ctaText: "Book Appointment",
  images: {
    logo: "/logo.svg",
    hero: "/carousel-1.jpg",
    about: "/hospital-exterior.jpg",
    doctor1: "/dr-harsh-jain.jpg",
    doctor2: "/dr-ishita-agarwal.jpg",
  }
};

export const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "Services", 
    path: "/services",
    dropdown: [
      { name: "Gastroenterology", path: "/services/gastroenterology" },
      { name: "Fetal Medicine", path: "/services/fetal-medicine" },
    ]
  },
  { name: "About", path: "/about" },
  { name: "Our Team", path: "/team" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/testimonials" },
];

export const homeData = {
  hero: {
    eyebrow: "What We Do",
    heading: "Advanced Centre of Gastroenterology, Hepatology & Maternal-Fetal Medicine",
    subtext: "Expert care for your digestive, liver and pregnancy needs delivered with precision, compassion and modern medical excellence.",
    cta: "Book Appointment",
  },
  stats: [
    { value: 10, suffix: "+", label: "Years Combined Experience" },
    { value: 2, suffix: "", label: "Dedicated Specialities" },
    { value: 12, suffix: "+", label: "Advanced Care Treatments" },
    { value: 24, suffix: "x7", label: "Emergency Support" },
  ]
};

export const gastroServicesData = {
  title: "Gastroenterology Services",
  speciality: "gastro",
  services: [
    {
      id: 1,
      title: "Digestive issues",
      description: "Diagnosis and management of acidity, gas, bloating, constipation, Irritable Bowel Syndrome and other digestive problems.",
      image: "/service-1.jpg",
      iconName: "Activity",
    },
    {
      id: 2,
      title: "Liver diseases",
      description: "Comprehensive evaluation and treatment of fatty liver, hepatitis, jaundice, cirrhosis and other liver disorders.",
      image: "/service-2.jpg",
      iconName: "ShieldAlert",
    },
    {
      id: 3,
      title: "Obesity solutions",
      description: "Personalized weight management planning including diet, lifestyle, medical and endoscopic support for best long-term results.",
      image: "/service-3.jpg",
      iconName: "Scale",
    },
    {
      id: 4,
      title: "Pancreatobiliary Disorders",
      description: "Expert diagnosis and treatment of bile duct and gallstones, acute and chronic pancreatitis and their complications.",
      image: "/service-4.jpg",
      iconName: "Stethoscope",
    },
    {
      id: 5,
      title: "GI Oncology",
      description: "Specialized screening and surveillance for early diagnosis and management of gastric and colorectal cancers.",
      image: "/service-5.jpg",
      iconName: "Microscope",
    },
    {
      id: 6,
      title: "Advanced Endoscopy / ERCP / EUS",
      description: "Minimally invasive diagnosis and treatment of problems in GI tract, pancreas, liver and gall bladder with precision and care.",
      image: "/service-6.jpg",
      iconName: "Radio",
    },
  ]
};

export const fetalServicesData = {
  title: "Fetal Medicine Services",
  speciality: "fetal",
  services: [
    {
      id: 7,
      title: "3D/4D Ultrasonography",
      description: "Advanced imaging that shows real-life movements and expressions of your baby in the womb.",
      image: "/service-7.jpg",
      iconName: "Scan",
    },
    {
      id: 8,
      title: "Multiple Pregnancy Management",
      description: "Detailed monitoring of twin and triplet pregnancies as to ensure a safer journey for the mother as well the babies.",
      image: "/service-8.jpg",
      iconName: "Users",
    },
    {
      id: 9,
      title: "High Risk Pregnancy Counselling",
      description: "Counselling for women requiring special care due to maternal health conditions, previous pregnancy complications or fetal concerns.",
      image: "/service-9.jpg",
      iconName: "HeartHandshake",
    },
    {
      id: 10,
      title: "Invasive Fetal Testing Procedures",
      description: "Specialized procedure for early diagnosis of genetic and chromosomal conditions.",
      image: "/service-10.jpg",
      iconName: "Syringe",
    },
    {
      id: 11,
      title: "Fetal Echocardiography",
      description: "Detailed structural and functional evaluation of the baby's heart.",
      image: "/service-11.jpg",
      iconName: "HeartPulse",
    },
    {
      id: 12,
      title: "Fetal Neurosonography",
      description: "Specialized scan of the baby's brain for monitoring neurological development.",
      image: "/service-12.jpg",
      iconName: "Brain",
    },
  ]
};

export const aboutData = {
  eyebrow: "About Us",
  heading: "A dedicated super-speciality centre for digestive health and fetal medicine services.",
  bodyCopy: "Led by Dr Harsh Jain and Dr Ishita Agarwal, the centre focuses on creating a trusted healthcare environment where patients can receive personalised attention, evidence based treatment and ethical medical care. From managing digestive and liver disorders to specialized fetal imaging and high risk pregnancy evaluation, our goal is to provide modern, reliable and accessible healthcare under one roof.",
  highlights: [
    "AIIMS-trained doctors with experience from premiere institutes like Medanta and Apollo.",
    "State-of-the-art Ultrasound Machine for high definition pregnancy sonography.",
    "Endoscopy suite equipped with image enhancement for accurate diagnosis & management.",
    "Daycare facility for endoscopic procedures and treatments requiring minimal hospital stay.",
    "Admission facility for patients requiring hospitalization and advanced medical support.",
    "24x7 on-call emergency services for patients in need.",
  ]
};

export const whyOorjaData = {
  eyebrow: "Why Choose Us",
  heading: "Why Oorja Is Your Top Choice?",
  subtext: "Advanced, ethical, and patient-centred care with expertise in Gastroenterology, Liver Diseases, GI Endoscopy and Fetal Medicine — all under one roof.",
  reasons: [
    {
      id: 1,
      title: "Expert-led care",
      description: "Specialized consultation and treatment guided by experienced AIIMS-trained doctors.",
      iconName: "Award",
      featured: true, // bento 2x1 tile
      accent: "teal",
    },
    {
      id: 2,
      title: "Advanced Technology",
      description: "State-of-the-art 3D/4D Ultrasonography Machine and a fully equipped Endoscopy Suite.",
      iconName: "Cpu",
      featured: true, // bento 2x1 tile
      accent: "rose",
    },
    {
      id: 3,
      title: "Comprehensive Care",
      description: "Holistic care for digestive & liver disorders and advanced fetal sonography.",
      iconName: "ShieldCheck",
      featured: true, // bento 2x1 tile
      accent: "teal",
    },
    {
      id: 4,
      title: "Personalized patient care",
      description: "Individualized treatment plans focused on patient comfort, safety and long term well-being.",
      iconName: "UserCheck",
      featured: true, // bento 2x1 tile
      accent: "rose",
    },
    {
      id: 5,
      title: "Evidence based treatment",
      description: "Ethical and scientific medical care following current clinical standards.",
      iconName: "FileText",
      featured: false,
      accent: "teal",
    },
    {
      id: 6,
      title: "Preventive Healthcare",
      description: "Emphasis on patient education, early diagnosis, lifestyle guidance and disease prevention.",
      iconName: "HeartPulse",
      featured: false,
      accent: "rose",
    },
  ]
};

export const teamData = {
  heading: "Meet Our Team",
  doctors: [
    {
      id: "dr-harsh-jain",
      name: "Dr. Jain Harsh Prakash",
      specialty: "Gastroenterology, Hepatology & Interventional Endoscopy",
      accent: "teal",
      image: "/dr-harsh-jain.jpg",
      qualifications: [
        "MBBS (MAMC)",
        "MD Medicine (MAMC)",
        "DM Gastroenterology (AIIMS)",
        "Fellowship in Interventional Gastroenterology (Medanta)",
        "Ex-Consultant (Medanta)",
      ],
      bioText: "Dr. Jain Harsh Prakash brings extensive expertise from India's premier institutes including MAMC, AIIMS, and Medanta. Specializing in advanced gastroenterology, liver diseases, and therapeutic GI endoscopy, he is dedicated to delivering evidence-based, patient-centric care with precision and compassion.",
    },
    {
      id: "dr-ishita-agarwal",
      name: "Dr. Ishita Agarwal",
      specialty: "Maternal-Fetal Medicine & High-Risk Pregnancy",
      accent: "rose",
      image: "/dr-ishita-agarwal.jpg",
      qualifications: [
        "MBBS (Gold Medallist) (MAMC)",
        "MS Obstetrics and Gynecology (MAMC), DNB, MNAMS",
        "Ex-Senior Resident (AIIMS)",
        "Fetal Medicine Fellowship (Apollo, Delhi)",
        "FMF-UK Certified",
      ],
      bioText: "Dr. Ishita Agarwal is an AIIMS-trained and FMF-UK certified specialist in maternal-fetal medicine. As a Gold Medallist from MAMC with specialized fellowship training from Apollo Hospital, Delhi, she is renowned for her calm, compassionate demeanor and thorough expertise in high-definition prenatal imaging and high-risk pregnancy management.",
    }
  ]
};

export const testimonialsData = {
  heading: "What Our Patients Say",
  reviews: [
    {
      id: 1,
      quote: "Dr. Harsh Jain is a well-experienced doctor with more than 10 years of experience. The consultation was excellent, and the hospital environment was calm, clean, and welcoming.",
      author: "Harshdip Patil",
      service: "Gastroenterology Care",
      rating: 5,
    },
    {
      id: 2,
      quote: "Had a very good experience with Dr. Ishita Agarwal at Oorja Gastro Liver and Fetal Medicine Center. She is professional, knowledgeable, and explains every detail calmly during fetal scans and pregnancy consultations. The staff is supportive and the clinic is well-maintained. Highly recommended for fetal medicine, anomaly scans, and prenatal care.",
      author: "Payal Goyal",
      service: "Fetal Medicine & Scan",
      rating: 5,
    },
    {
      id: 3,
      quote: "Dr. Ishita Agarwal is a great doctor in addition to being compassionate and honest. We received the best fetal medicine care. Thank you so much!",
      author: "Dr. Renu Agarwal",
      service: "Fetal Medicine Care",
      rating: 5,
    },
    {
      id: 4,
      quote: "Dr. Harsh is one of the most humble and generous doctors I have ever met. He listens patiently, understands patients thoroughly, and provides excellent care. My 72-year-old mother recovered successfully under his supervision, and we are always grateful for his support and expertise.",
      author: "Prakash Kumar",
      service: "Gastroenterology & Liver Care",
      rating: 5,
    },
    {
      id: 5,
      quote: "Excellent gastro doctor with accurate diagnosis and outstanding patient care. Very knowledgeable, humble, and highly recommended.",
      author: "Hitesh Mishra",
      service: "Gastroenterology Diagnosis",
      rating: 5,
    },
  ]
};

export const footerData = {
  tagline: "Integrating Science, Energy and Life",
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
  ],
  gastroList: [
    "Digestive issues",
    "Liver diseases",
    "Obesity solutions",
    "Pancreatobiliary Disorders",
    "GI Oncology",
    "Advanced Endoscopy / ERCP / EUS",
  ],
  fetalList: [
    "3D/4D Ultrasonography",
    "Multiple Pregnancy Management",
    "High Risk Pregnancy Counselling",
    "Invasive Fetal Testing Procedures",
    "Fetal Echocardiography",
    "Fetal Neurosonography",
  ],
  copyright: "© Oorja Gastro-Liver and Fetal Medicine Centre, All right reserved.",
  credit: "Designed By EchoZest Solutions",
};
