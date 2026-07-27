export const blogCategories = [
  "All",
  "Gastroenterology",
  "Fetal Medicine",
  "Liver Care",
  "Diet & Lifestyle"
];

export const blogArticles = [
  {
    id: 1,
    slug: "understanding-fatty-liver-disease-causes-prevention",
    title: "Understanding Non-Alcoholic Fatty Liver Disease: Early Signs & Prevention",
    subtitle: "Why fatty liver is becoming a silent epidemic and how simple lifestyle adjustments can reverse early-stage liver fat accumulation.",
    category: "Liver Care",
    date: "July 24, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Harsh Jain",
      role: "Lead Gastroenterologist & Hepatologist (AIIMS Trained)",
      avatar: "/dr-harsh-jain.jpg"
    },
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    featured: true,
    summary: "Fatty liver disease often presents with zero symptoms in its initial stages. Discover the metabolic triggers, modern fibroscan diagnostics, and dietary protocols that protect liver function.",
    content: `
      <h3>The Silent Epidemic of Our Decade</h3>
      <p>Non-Alcoholic Fatty Liver Disease (NAFLD) is rapidly becoming one of the most common chronic liver conditions worldwide. Unlike alcohol-induced liver damage, NAFLD is closely linked to metabolic syndrome, insulin resistance, sedentary routines, and diets high in refined carbohydrates and fructose.</p>
      
      <h3>Key Early Indicators You Shouldn't Ignore</h3>
      <p>In most patients, fatty liver develops silently without causing sharp pain. However, subtle warning signs may include:</p>
      <ul>
        <li><strong>Persistent lethargy:</strong> Unexplained fatigue that doesn't improve with sleep.</li>
        <li><strong>Right upper abdominal discomfort:</strong> A mild, dull ache or feeling of fullness below the right ribcage.</li>
        <li><strong>Elevated liver enzymes:</strong> Noticeable jumps in SGPT/ALT and SGOT/AST levels during routine blood tests.</li>
      </ul>

      <h3>How We Diagnose at Oorja Centre</h3>
      <p>We utilize advanced non-invasive diagnostic tools, including high-definition Ultrasonography and transient elastography (FibroScan), to accurately quantify liver fat content and detect any early tissue stiffness or fibrosis without needing painful biopsies.</p>

      <h3>Actionable Steps for Reversal</h3>
      <p>The encouraging news is that early-stage fatty liver is completely reversible. We recommend a structured 3-pillar protocol:</p>
      <ol>
        <li><strong>Targeted Weight Reduction:</strong> Losing just 7% to 10% of total body weight significantly depletes intrahepatic fat.</li>
        <li><strong>Mediterranean-Style Dietary Shift:</strong> Prioritize extra virgin olive oil, leafy greens, walnuts, and complex legumes while eliminating sugary sodas and bakery items.</li>
        <li><strong>Daily Aerobic & Resistance Movement:</strong> 45 minutes of moderate brisk walking combined with light strength training improves muscular glucose uptake, relieving metabolic pressure on the liver.</li>
      </ol>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-xl">
        <p className="text-sm font-semibold text-teal-900 m-0">💡 Specialist Tip: Never self-medicate with over-the-counter herbal detox teas, as unregulated supplements can trigger acute drug-induced liver injury (DILI). Always consult a certified hepatologist.</p>
      </div>
    `
  },
  {
    id: 2,
    slug: "3d-4d-ultrasound-what-expect-during-pregnancy",
    title: "3D & 4D Fetal Scans: A Comprehensive Guide for Expectant Mothers",
    subtitle: "From anomaly scans to real-time 4D bonding, discover how advanced fetal sonography safeguards maternal and baby health.",
    category: "Fetal Medicine",
    date: "July 18, 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Ishita Agarwal",
      role: "Senior Fetal Medicine Specialist (FMF-UK Certified)",
      avatar: "/dr-ishita-agarwal.jpg"
    },
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    featured: false,
    summary: "Understand the vital medical differences between routine 2D ultrasounds and advanced 3D/4D volumetric fetal imaging during your pregnancy trimesters.",
    content: `
      <h3>Why Fetal Imaging Has Transformed Prenatal Care</h3>
      <p>Pregnancy is a miraculous journey, and modern fetal sonography offers an unprecedented window into the womb. While standard 2D scans provide flat cross-sectional images essential for measuring growth, high-resolution 3D and 4D ultrasound technologies create lifelike volumetric renderings of your developing baby.</p>
      
      <h3>The Difference Between 3D and 4D Scans</h3>
      <p>Many parents wonder which scan is right for them. Here is a simple breakdown:</p>
      <ul>
        <li><strong>3D Ultrasound:</strong> Compiles multiple two-dimensional sound waves to generate a three-dimensional static photograph of the baby's facial features, limbs, and anatomical structures.</li>
        <li><strong>4D Ultrasound:</strong> Adds the dimension of time, showing live video streaming of your baby yawning, blinking, stretching, or sucking their thumb in real time.</li>
      </ul>

      <h3>Medical Precision Beyond Psychological Bonding</h3>
      <p>While seeing your baby's smile is an unforgettable bonding moment, these scans serve critical clinical purposes at our Fetal Medicine department:</p>
      <ol>
        <li><strong>Cleft Lip and Palate Evaluation:</strong> Surface rendering allows us to inspect facial symmetry and oral structures with sub-millimeter clarity.</li>
        <li><strong>Spinal & Neural Tube Verification:</strong> We thoroughly examine the vertebral column to rule out spina bifida or skeletal dysplasias.</li>
        <li><strong>Placental & Umbilical Cord Mapping:</strong> Color Doppler integration assesses blood flow dynamics between mother and fetus, ensuring optimal nutrient delivery.</li>
      </ol>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-xl">
        <p className="text-sm font-semibold text-teal-900 m-0">💡 Timing Recommendation: For the clearest 3D/4D facial portraits and structural assessments, we recommend scheduling your scan between gestational weeks 26 and 30 when amniotic fluid volume is optimal.</p>
      </div>
    `
  },
  {
    id: 3,
    slug: "gut-brain-connection-managing-ibs-and-stress",
    title: "The Gut-Brain Axis: Why Stress Directly Triggers IBS & Digestive Distress",
    subtitle: "Unraveling the bidirectional communication between your enteric nervous system and brain in irritable bowel syndrome.",
    category: "Gastroenterology",
    date: "July 12, 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Harsh Jain",
      role: "Lead Gastroenterologist & Hepatologist (AIIMS Trained)",
      avatar: "/dr-harsh-jain.jpg"
    },
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80",
    featured: false,
    summary: "Your digestive tract contains over 100 million neurons. Explore how psychological stress alters gut motility and learn clinical strategies for lasting relief.",
    content: `
      <h3>Your Body's 'Second Brain'</h3>
      <p>Have you ever experienced 'butterflies' in your stomach before a public speech, or sudden cramps during emotional distress? This is not just imagination—it is the direct physical manifestation of the <strong>Gut-Brain Axis</strong>. The gastrointestinal tract is governed by the Enteric Nervous System (ENS), embedded with over 100 million neurons that communicate continuously with the central nervous system via the vagus nerve.</p>

      <h3>How Chronic Stress Disrupts Gut Motility</h3>
      <p>When the brain perceives chronic stress or anxiety, it releases cortisol and adrenaline. In the gastrointestinal system, these stress hormones trigger three major disruptions:</p>
      <ul>
        <li><strong>Altered Peristalsis:</strong> Intestinal muscle contractions become irregular, leading to alternating episodes of painful diarrhea and stubborn constipation (classic IBS symptoms).</li>
        <li><strong>Visceral Hypersensitivity:</strong> The nerve endings in the gut become hyper-reactive, causing normal digestion or gas bubbles to feel intensely painful.</li>
        <li><strong>Microbiome Imbalance (Dysbiosis):</strong> Stress hormones alter the pH and mucous lining of the intestines, suppressing beneficial bacteria and allowing inflammatory strains to proliferate.</li>
      </ul>

      <h3>Holistic & Clinical Management Strategy</h3>
      <p>Effective IBS treatment requires looking beyond antispasmodic pills. At Oorja, our therapeutic gastroenterology approach combines:</p>
      <ol>
        <li><strong>Low-FODMAP Nutritional Guidance:</strong> Temporarily eliminating short-chain fermentable carbohydrates to starve gas-producing bacteria and soothe intestinal inflammation.</li>
        <li><strong>Gut-Directed Hypnotherapy & Mindfulness:</strong> Clinical relaxation protocols that down-regulate vagal nerve hyper-excitability.</li>
        <li><strong>Targeted Probiotic Therapy:</strong> Prescribing specific, clinically validated bacterial strains like Bifidobacterium infantis to restore epithelial barrier integrity.</li>
      </ol>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-xl">
        <p className="text-sm font-semibold text-teal-900 m-0">💡 Clinical Note: If your digestive symptoms are accompanied by 'red flag' signs like unexplained weight loss, bleeding, or nocturnal awakening, immediate endoscopy or colonoscopy is essential to rule out inflammatory bowel disease (IBD).</p>
      </div>
    `
  },
  {
    id: 4,
    slug: "acid-reflux-gerd-when-to-seek-endoscopy",
    title: "Chronic Heartburn & GERD: When Is Upper GI Endoscopy Necessary?",
    subtitle: "Don't ignore frequent acid reflux. Learn how painless therapeutic endoscopy protects esophageal lining from complications.",
    category: "Gastroenterology",
    date: "July 05, 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Harsh Jain",
      role: "Lead Gastroenterologist & Hepatologist (AIIMS Trained)",
      avatar: "/dr-harsh-jain.jpg"
    },
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    featured: false,
    summary: "Discover why long-term reliance on antacids can mask underlying mucosal erosion, and what happens during a high-definition diagnostic endoscopy.",
    content: `
      <h3>Beyond Occasional Indigestion</h3>
      <p>Gastroesophageal Reflux Disease (GERD) occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus). While occasional heartburn after a heavy, spicy meal is normal, chronic reflux occurring more than twice a week requires professional medical evaluation.</p>

      <h3>Why You Shouldn't Rely on Daily Antacids Forever</h3>
      <p>Proton Pump Inhibitors (PPIs) and antacids provide temporary symptom relief by neutralizing or suppressing gastric acid production. However, unmonitored long-term usage can mask progressive cellular damage in the lower esophagus, potentially leading to:</p>
      <ul>
        <li><strong>Erosive Esophagitis:</strong> Painful ulcers and bleeding along the delicate esophageal mucosa.</li>
        <li><strong>Esophageal Strictures:</strong> Scar tissue formation that narrows the swallowing passage, causing food to get stuck (dysphagia).</li>
        <li><strong>Barrett's Esophagus:</strong> A precancerous cellular change where normal squamous cells transform into intestinal-type cells due to chronic acid irritation.</li>
      </ul>

      <h3>When to Schedule an Upper GI Endoscopy</h3>
      <p>We strongly recommend a high-definition Upper Gastrointestinal Endoscopy (OGD) if you experience any of the following:</p>
      <ol>
        <li>Heartburn persisting for over 5 years despite lifestyle changes.</li>
        <li>Difficulty or painful swallowing (dysphagia / odynophagia).</li>
        <li>Unexplained iron-deficiency anemia or dark tarry stools.</li>
        <li>Reflux symptoms starting after age 50 with family history of GI malignancies.</li>
      </ol>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-xl">
        <p className="text-sm font-semibold text-teal-900 m-0">💡 Patient Comfort Guarantee: Modern endoscopy at Oorja Centre is performed under conscious sedation in our dedicated daycare suite—taking only 10 to 15 minutes with zero pain or discomfort.</p>
      </div>
    `
  },
  {
    id: 5,
    slug: "dietary-habits-for-optimal-digestive-health",
    title: "5 Evidence-Based Dietary Principles for Optimal Digestive & Maternal Health",
    subtitle: "Simple, scientifically verified nutrition principles to boost gut microbiome diversity and support maternal wellness.",
    category: "Diet & Lifestyle",
    date: "June 28, 2026",
    readTime: "4 min read",
    author: {
      name: "Oorja Medical Team",
      role: "Clinical Nutrition & Wellness Advisory",
      avatar: "/dr-ishita-agarwal.jpg"
    },
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    featured: false,
    summary: "Learn how integrating prebiotic fibers, proper hydration timing, and anti-inflammatory spices can transform your daily digestive comfort.",
    content: `
      <h3>Nutrition as Preventive Medicine</h3>
      <p>What you put on your plate daily dictates the diversity of your gut microbiome, your systemic immune response, and even maternal nutrient absorption during fetal development. Here are 5 clinical principles recommended by our specialists:</p>

      <h3>1. Diversify Your Plant Fiber Intake</h3>
      <p>Aim for at least 30 different plant foods per week (including seeds, nuts, vegetables, fruits, and whole grains). Different bacterial species thrive on different prebiotic fibers, creating a robust, resilient intestinal ecosystem that prevents bloating and constipation.</p>

      <h3>2. Master Hydration Timing</h3>
      <p>Drink 500ml of warm water immediately upon waking to stimulate gastrocolic reflexes and bowel motility. Avoid drinking large volumes of ice-cold water directly during meals, as this can dilute gastric juices and slow down enzymatic protein breakdown.</p>

      <h3>3. Embrace Traditional Anti-Inflammatory Spices</h3>
      <ul>
        <li><strong>Turmeric with Black Pepper:</strong> Curcumin combined with piperine offers potent anti-inflammatory protection for liver cells and intestinal walls.</li>
        <li><strong>Fennel & Cumin Seeds (Saunf/Jeera):</strong> Natural carminatives that relax digestive smooth muscle and dispel trapped intestinal gas.</li>
        <li><strong>Fresh Ginger:</strong> Accelerates gastric emptying and alleviates pregnancy-related morning sickness naturally.</li>
      </ul>

      <h3>4. Prioritize Fermented Foods Daily</h3>
      <p>Incorporate traditional homemade curd (dahi), buttermilk (chaas), or fermented dosa/idli batter. These natural probiotics supply live beneficial lactobacillus strains directly to your digestive tract without artificial sugars.</p>

      <h3>5. Mindful Eating & Mastication</h3>
      <p>Digestion begins in the mouth. Chewing each bite 20 to 30 times mixes food thoroughly with salivary amylase, reducing the mechanical workload on your stomach and pancreas while signaling satiety hormones to prevent overeating.</p>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-xl">
        <p className="text-sm font-semibold text-teal-900 m-0">💡 Takeaway: Small, consistent nutritional habits yield profound long-term results for both digestive vitality and maternal-fetal well-being.</p>
      </div>
    `
  }
];
