
import { 
  Dumbbell, 
  Activity, 
  Syringe, 
  Bone, 
  UserCheck, 
  HeartPulse, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { ServiceItem, Testimonial, FaqItem, ConditionCard, EducationItem } from './types';

export const CONTACT_INFO = {
  address: "100 Jarrett St, Leichhardt, NSW, 2040",
  locationNote: "(located inside Olympian Frontiers Gym)",
  phone: "0434 766 414",
  email: "yuhanharrisrmt@gmail.com", // Updated from footer email
  altEmail: "info@ninjamo.com.au", // From contact page
  bookingUrl: "https://ninja-motion-therapies.au4.cliniko.com/bookings?embedded=true",
  instagram: "https://www.instagram.com/ninjamotiontherapies_/"
};

export const OPENING_HOURS = [
  { day: "Consultations", hours: "By Schedule" }
];

export const SERVICES_SUMMARY: ServiceItem[] = [
  {
    id: 'sports',
    title: "Sports Massage",
    description: "Enhance performance and prevent injuries with targeted sports massage therapy.",
    icon: Dumbbell
  },
  {
    id: 'remedial',
    title: "Remedial Massage",
    description: "Treat musculoskeletal issues with therapeutic remedial massage techniques.",
    icon: Activity
  },
  {
    id: 'needling',
    title: "Dry Needling",
    description: "Instant muscle stiffness relief and accelerated healing using sterile needles.",
    icon: Syringe
  },
  {
    id: 'mobilisation',
    title: "Joint Mobilisations",
    description: "Decompress joints to ensure long lasting mobility improvements.",
    icon: Bone
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "As an athlete, I’ve always been on the hunt for someone who could take my recovery to the next level. Over my years of training, I’ve dealt with niggles, recurring pains, and lingering issues. I’ve spent thousands of dollars trying different chiropractors, physios, and massage therapists. Sure, some helped temporarily, but the problems always came back. That was until I came across Yuhan. The depth of his knowledge and the way he explains what’s actually happening with my body and muscles is unmatched. He works hands-on to release and fix my issues, and he even creates personalised rehab exercises, filming himself to show exactly how to do them. The level of care and expertise he has shown from my very first visit to now has been remarkable. You can truly see the passion he has for what he does. Yuhan has given me more relief in 20 minutes than anyone else has managed in an hour. I would recommend him in a heartbeat to anyone.",
    author: "Hayley Sprod",
    role: "Athlete"
  },
  {
    id: 2,
    text: "I have been seeing Yuhan for just 18 months and he is a very passionate knowledgeable therapist that goes over and beyond to help his clients. Highly recommended to those seeking support for training and normal daily activities. He has done a lot for me regarding posture and mobility around my training",
    author: "Alex Mijalkovic",
    role: "Client"
  },
  {
    id: 3,
    text: "Yuhan is amazing! I went in after seeing several physios for my shoulder, hip and neck. It was all a temporary fix with them. However when I had gone to Yuhan from the first session he was super attentive and walked me through what he was doing and why. Thank you 🙏🏽",
    author: "Rose Marco",
    role: "Client"
  }
];

export const CONDITIONS_DATA: Record<string, { title: string; description: string; items: ConditionCard[] }> = {
  upper: {
    title: "Upper Body Conditions",
    description: "Shoulder, neck, and upper back issues",
    items: [
      {
        title: "Shoulder Pain & Impingement",
        symptoms: ["Pain when reaching overhead", "Difficulty sleeping on affected side", "Weakness in shoulder movements", "Clicking or popping sensations"],
        treatment: "Targeted release of rotator cuff muscles, reduction of inflammation, restoration of proper shoulder mechanics, and improvement of range of motion through manual therapy techniques."
      },
      {
        title: "Neck Tension & Headaches",
        symptoms: ["Tension headaches", "Stiffness and reduced neck mobility", "Pain radiating to shoulders", "Difficulty turning head"],
        treatment: "Release of tight neck muscles, reduction of trigger points, improvement of posture, and relief from tension-type headaches through targeted manual therapy."
      },
      {
        title: "Upper Back Stiffness",
        symptoms: ["Tightness between shoulder blades", "Difficulty with deep breathing", "Pain with prolonged sitting", "Reduced thoracic mobility"],
        treatment: "Deep tissue work on thoracic muscles, myofascial release, postural correction strategies, and mobility enhancement for improved upper back function."
      },
      {
        title: "Tennis/Golfer's Elbow",
        symptoms: ["Pain on outside (tennis) or inside (golfer's) of elbow", "Weakness in grip strength", "Pain with wrist movements", "Difficulty with daily activities"],
        treatment: "Treatment of forearm muscles, reduction of tendon inflammation, breaking down scar tissue, and restoration of normal muscle function."
      }
    ]
  },
  lower: {
    title: "Lower Body Conditions",
    description: "Hip, knee, and ankle issues",
    items: [
      {
        title: "Hip Mobility Restrictions",
        symptoms: ["Limited hip flexion or extension", "Difficulty with squatting", "Tightness in hip flexors or glutes", "Compensatory lower back pain"],
        treatment: "Release of hip flexors, glutes, and surrounding muscles, improvement of hip range of motion, correction of movement patterns, and reduction of compensatory stress."
      },
      {
        title: "Knee Pain & Tracking Issues",
        symptoms: ["Pain around or behind kneecap", "Clicking or grinding sensations", "Pain with stairs or squatting", "Swelling after activity"],
        treatment: "Treatment of quadriceps, hamstrings, and calf muscles, improvement of patellar tracking, reduction of muscle imbalances, and support for proper knee mechanics."
      },
      {
        title: "ITB Syndrome",
        symptoms: ["Pain on outside of knee", "Worse with running or cycling", "Tightness along outer thigh", "Pain increases with distance"],
        treatment: "Release of IT band and associated muscles, treatment of hip abductors, correction of running mechanics, and progressive return to activity protocols."
      },
      {
        title: "Plantar Fasciitis",
        symptoms: ["Heel pain, especially in morning", "Pain after prolonged standing", "Tenderness in arch of foot", "Difficulty walking barefoot"],
        treatment: "Treatment of calf muscles and plantar fascia, reduction of inflammation, improvement of foot mechanics, and integration with stretching protocols."
      }
    ]
  },
  core: {
    title: "Core & Spine Conditions",
    description: "Back pain and postural issues",
    items: [
      {
        title: "Lower Back Pain",
        symptoms: ["Dull ache or sharp pain in lower back", "Stiffness in morning", "Pain with bending or lifting", "Difficulty standing for long periods"],
        treatment: "Release of paraspinal muscles, treatment of hip flexors and glutes, improvement of core stability, and reduction of muscle spasms through targeted manual therapy."
      },
      {
        title: "Sciatica",
        symptoms: ["Pain radiating down leg", "Numbness or tingling", "Weakness in leg or foot", "Pain worse with sitting"],
        treatment: "Treatment of piriformis and deep hip rotators, reduction of nerve compression, improvement of lower back mobility, and coordination with other healthcare providers."
      },
      {
        title: "Postural Dysfunction",
        symptoms: ["Forward head posture", "Rounded shoulders", "Chronic muscle tension", "Fatigue from poor alignment"],
        treatment: "Corrective massage for overactive muscles, activation of underactive muscles, postural education, and progressive improvement of alignment."
      }
    ]
  },
  sports: {
    title: "Sports-Specific Conditions",
    description: "Athletic injuries and performance issues",
    items: [
      {
        title: "Running Injuries",
        symptoms: ["Runner's knee", "Shin splints", "Achilles tendinopathy", "Calf strains"],
        treatment: "Treatment of overused muscles, improvement of running mechanics, reduction of training-related soreness, and progressive return to running protocols."
      },
      {
        title: "CrossFit Recovery",
        symptoms: ["Multiple muscle group fatigue", "Overuse injuries", "Reduced mobility affecting performance", "Difficulty recovering between WODs"],
        treatment: "Comprehensive recovery protocols, treatment of multiple areas, mobility enhancement for complex movements, and performance optimization strategies."
      }
    ]
  }
};

export const EDUCATION_CONTENT: EducationItem[] = [
  {
    title: "Sports Massage",
    summary: "Specialized therapy to help athletes prevent injuries and enhance performance.",
    details: {
      what: "Sports massage combines various techniques including deep tissue massage, stretching, and joint mobilization to address the specific needs of athletes and physically active individuals.",
      techniques: [
        "Deep Tissue Massage: Targets deep muscle layers",
        "Effleurage: Long, gliding strokes",
        "Petrissage: Kneading techniques",
        "Friction: Breaking down adhesions",
        "Stretching: Active and passive techniques"
      ],
      benefits: [
        { title: "Performance Enhancement", desc: "Improved flexibility and muscle efficiency" },
        { title: "Injury Prevention", desc: "Early detection of muscle imbalances" },
        { title: "Faster Recovery", desc: "Reduced muscle soreness" }
      ],
      when: [
        "Pre-Event: 15-60 minutes before competition",
        "Post-Event: Within 2 hours after activity",
        "Restorative: Between training sessions"
      ],
      highlight: "Studies show that regular sports massage can improve athletic performance and reduce injury risk when combined with proper training."
    }
  },
  {
    title: "Remedial Massage",
    summary: "Systematic assessment and treatment of the muscles, tendons, ligaments to assist in rehabilitation.",
    details: {
      what: "Remedial massage is a therapeutic treatment that assesses and treats the body's musculoskeletal system to address specific injuries, chronic pain, and functional problems.",
      benefits: [
        { title: "Pain Relief", desc: "Reduces chronic and acute pain naturally" },
        { title: "Improved Mobility", desc: "Restores range of motion" },
        { title: "Better Circulation", desc: "Enhances blood flow and oxygen delivery" }
      ],
      process: [
        "Assessment: Thorough evaluation of condition",
        "Treatment Planning: Customized approach",
        "Hands-On Treatment: Targeted techniques",
        "Home Care Advice: Exercises for self-management"
      ],
      highlight: "Remedial massage can reduce pain levels significantly and improve functional movement patterns."
    }
  },
  {
    title: "Dry Needling",
    summary: "Modern therapeutic technique using fine needles to treat muscle trigger points.",
    details: {
      what: "Dry needling involves inserting thin, sterile needles into specific trigger points within muscle tissue to deactivate painful muscle knots and alter pain signals.",
      benefits: [
        { title: "Trigger Point Release", desc: "Deactivates painful muscle knots" },
        { title: "Neuromodulation", desc: "Alters pain signals" },
        { title: "Muscle Relaxation", desc: "Reduces tension and spasms" }
      ],
      safety: [
        "Safe When: Performed by trained professionals",
        "Single-Use: Sterile, disposable needles only",
        "Avoid If: Pregnancy, bleeding disorders, needle phobia"
      ],
      highlight: "You may feel a small twitch when the needle enters the trigger point, followed by muscle relaxation. Some soreness is normal for 24-48 hours."
    }
  },
  {
    title: "Joint Mobilisation",
    summary: "Manual therapy to restore optimal joint function and range of motion.",
    details: {
      what: "Joint mobilisation involves passive movement of specific joints using graded oscillatory or sustained techniques to restore normal joint mechanics.",
      benefits: [
        { title: "Reduced Joint Stiffness", desc: "Improves movement fluidity" },
        { title: "Improved Range of Motion", desc: "Increases functional reach" },
        { title: "Decreased Pain", desc: "Modulates pain receptors" }
      ],
      highlight: "Targets spinal joints, shoulder complex, and lower extremity joints to improve overall biomechanics."
    }
  },
  {
    title: "Rehabilitation",
    summary: "Comprehensive programs combining therapy with targeted exercises.",
    details: {
      what: "Comprehensive rehabilitation programs combine massage therapy with targeted exercises and movement strategies to restore function, prevent re-injury, and optimize performance.",
      process: [
        "Phase 1: Acute (Pain control)",
        "Phase 2: Subacute (Strengthening begins)",
        "Phase 3: Remodeling (Advanced strengthening)",
        "Phase 4: Return to Activity"
      ],
      highlight: "Success factors include consistent attendance and home exercise compliance."
    }
  }
];

export const FAQS: Record<string, FaqItem[]> = {
  booking: [
    { question: "How do I book an appointment?", answer: "You can book an appointment online through our booking system, call us at 0434 766 414, or email us. We'll confirm your appointment and send necessary info." },
    { question: "What's your cancellation policy?", answer: "We require 24 hours notice for cancellations or rescheduling. Please contact us ASAP for emergencies." },
    { question: "Do you offer same-day appointments?", answer: "Yes, when availability permits. Call us in the morning to check. We recommend booking 3-5 days in advance." }
  ],
  visit: [
    { question: "What should I expect at my first session?", answer: "Your first session includes a comprehensive assessment of health history and movement patterns, followed by treatment. We recommend 60 minutes for the first visit." },
    { question: "What should I wear?", answer: "Wear comfortable, loose-fitting clothing. Shorts for lower body work; tank top for upper body. You will be appropriately draped during treatment." },
    { question: "Should I arrive early?", answer: "Please arrive 5-10 minutes early for your first visit to complete intake forms." }
  ],
  treatment: [
    { question: "Will the massage hurt?", answer: "Some discomfort ('good pain') is normal during deep tissue work, but it should never be unbearable. We always work within your tolerance." },
    { question: "How often should I get treatment?", answer: "Acute injuries may need weekly sessions. Maintenance is often monthly. We will recommend a frequency based on your assessment." },
    { question: "Do you work with other healthcare providers?", answer: "Yes! We collaborate with sports chiros, physios, and trainers to ensure coordinated care." }
  ],
  payment: [
    { question: "What payment methods do you accept?", answer: "We accept cash, credit cards (Visa, Mastercard), EFTPOS, and bank transfer. HiCAPS is available for on-the-spot claims." },
    { question: "Are gift certificates available?", answer: "Yes! Gift certificates are available for specific session lengths or dollar amounts." }
  ]
};
