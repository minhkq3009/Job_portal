// Unified Data Store - All application data in one place
// Import avatar images
import avatar1 from "../assets/images/Image-1.png";
import avatar2 from "../assets/images/Image-2.png";
import avatar3 from "../assets/images/Image-3.png";
import avatar4 from "../assets/images/Image-4.png";
import avatar5 from "../assets/images/Image-5.png";
import avatar6 from "../assets/images/Image.png";

// Import company logos
import upworkLogo from "../assets/icons/upwork.svg";
import appleLogo from "../assets/icons/apple.svg";
import figmaLogo from "../assets/icons/figma.svg";
import udemyLogo from "../assets/icons/udemy.svg";
import facebookLogo from "../assets/icons/facebook.svg";
import googleLogo from "../assets/icons/google.svg";

// Import icons for stats and categories
import { 
  Briefcase, 
  Building2, 
  Users, 
  Sparkles,
  Palette,
  Code,
  TrendingUp,
  Smartphone,
  HardHat,
  Settings,
  Home,
  PenTool
} from "lucide-react";

// =============================================================================
// CANDIDATES DATA
// =============================================================================
export const candidatesData = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior UX Designer",
    location: "San Francisco, CA",
    experience: "5+ years",
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
    avatar: avatar1,
    rating: 4.9,
    hourlyRate: "$85/hour",
    availability: "Available",
    topLabel: "Featured",
    topVariant: "danger",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    education: "Master's Degree",
    gender: "Female",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Developer",
    location: "New York, NY",
    experience: "7+ years",
    skills: ["React", "Node.js", "Python", "AWS"],
    avatar: avatar2,
    rating: 4.8,
    hourlyRate: "$95/hour",
    availability: "Available",
    topLabel: "Top Rated",
    topVariant: "success",
    typeLabel: "Contract",
    typeVariant: "info",
    email: "michael.chen@email.com",
    phone: "+1 (555) 234-5678",
    education: "Bachelor's Degree",
    gender: "Male",
    joinDate: "2022-11-20",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Digital Marketing Specialist",
    location: "Los Angeles, CA",
    experience: "4+ years",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    avatar: avatar3,
    rating: 4.7,
    hourlyRate: "$65/hour",
    availability: "Available",
    typeLabel: "Part-Time",
    typeVariant: "warning",
    email: "emily.rodriguez@email.com",
    phone: "+1 (555) 345-6789",
    education: "Bachelor's Degree",
    gender: "Female",
    joinDate: "2023-03-10",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Data Scientist",
    location: "Seattle, WA",
    experience: "6+ years",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    avatar: avatar4,
    rating: 4.9,
    hourlyRate: "$110/hour",
    availability: "Busy",
    topLabel: "Expert",
    topVariant: "primary",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    email: "david.kim@email.com",
    phone: "+1 (555) 456-7890",
    education: "PhD",
    gender: "Male",
    joinDate: "2022-08-05",
  },
  {
    id: 5,
    name: "Jessica Wang",
    title: "Product Manager",
    location: "Austin, TX",
    experience: "8+ years",
    skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    avatar: avatar5,
    rating: 4.8,
    hourlyRate: "$120/hour",
    availability: "Available",
    topLabel: "Rising Talent",
    topVariant: "info",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    email: "jessica.wang@email.com",
    phone: "+1 (555) 567-8901",
    education: "Master's Degree",
    gender: "Female",
    joinDate: "2022-12-01",
  },
  {
    id: 6,
    name: "Alex Thompson",
    title: "Mobile App Developer",
    location: "Chicago, IL",
    experience: "5+ years",
    skills: ["React Native", "iOS", "Android", "Firebase"],
    avatar: avatar6,
    rating: 4.6,
    hourlyRate: "$80/hour",
    availability: "Available",
    typeLabel: "Contract",
    typeVariant: "success",
    email: "alex.thompson@email.com",
    phone: "+1 (555) 678-9012",
    education: "Bachelor's Degree",
    gender: "Other",
    joinDate: "2023-02-14",
  },
  {
    id: 7,
    name: "Maria Garcia",
    title: "Graphic Designer",
    location: "Miami, FL",
    experience: "3+ years",
    skills: ["Adobe Creative Suite", "Branding", "Print Design", "Web Design"],
    avatar: avatar1,
    rating: 4.5,
    hourlyRate: "$55/hour",
    availability: "Available",
    typeLabel: "Freelance",
    typeVariant: "secondary",
    email: "maria.garcia@email.com",
    phone: "+1 (555) 789-0123",
    education: "Associate Degree",
    gender: "Female",
    joinDate: "2023-04-20",
  },
  {
    id: 8,
    name: "James Wilson",
    title: "DevOps Engineer",
    location: "Denver, CO",
    experience: "6+ years",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    avatar: avatar2,
    rating: 4.9,
    hourlyRate: "$105/hour",
    availability: "Available",
    topLabel: "Verified",
    topVariant: "success",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    email: "james.wilson@email.com",
    phone: "+1 (555) 890-1234",
    education: "Bachelor's Degree",
    gender: "Male",
    joinDate: "2022-09-15",
  },
  {
    id: 9,
    name: "Lisa Brown",
    title: "Content Writer",
    location: "Portland, OR",
    experience: "4+ years",
    skills: ["Content Strategy", "SEO Writing", "Copywriting", "Blogging"],
    avatar: avatar3,
    rating: 4.7,
    hourlyRate: "$45/hour",
    availability: "Available",
    typeLabel: "Part-Time",
    typeVariant: "warning",
    email: "lisa.brown@email.com",
    phone: "+1 (555) 901-2345",
    education: "Bachelor's Degree",
    gender: "Female",
    joinDate: "2023-01-30",
  },
  {
    id: 10,
    name: "Robert Lee",
    title: "Cybersecurity Analyst",
    location: "Washington, DC",
    experience: "7+ years",
    skills: ["Network Security", "Penetration Testing", "Risk Assessment", "Compliance"],
    avatar: avatar4,
    rating: 4.8,
    hourlyRate: "$115/hour",
    availability: "Available",
    topLabel: "Expert",
    topVariant: "primary",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    email: "robert.lee@email.com",
    phone: "+1 (555) 012-3456",
    education: "Master's Degree",
    gender: "Male",
    joinDate: "2022-10-12",
  },
  {
    id: 11,
    name: "Amanda Davis",
    title: "Business Analyst",
    location: "Boston, MA",
    experience: "5+ years",
    skills: ["Requirements Analysis", "Process Improvement", "SQL", "Tableau"],
    avatar: avatar5,
    rating: 4.6,
    hourlyRate: "$75/hour",
    availability: "Available",
    typeLabel: "Contract",
    typeVariant: "info",
    email: "amanda.davis@email.com",
    phone: "+1 (555) 123-4567",
    education: "Bachelor's Degree",
    gender: "Female",
    joinDate: "2023-05-08",
  },
  {
    id: 12,
    name: "Kevin Martinez",
    title: "Video Editor",
    location: "Nashville, TN",
    experience: "4+ years",
    skills: ["Adobe Premiere", "After Effects", "Color Grading", "Motion Graphics"],
    avatar: avatar6,
    rating: 4.5,
    hourlyRate: "$60/hour",
    availability: "Available",
    typeLabel: "Freelance",
    typeVariant: "secondary",
    email: "kevin.martinez@email.com",
    phone: "+1 (555) 234-5678",
    education: "High School",
    gender: "Male",
    joinDate: "2023-03-25",
  }
];

// =============================================================================
// COMPANIES DATA
// =============================================================================
export const topCompanies = [
  {
    logoText: "D",
    company: "Dribbble",
    location: "United States",
    description: "Dribbble is the world's leading community for creatives to share, grow, and get hired.",
    benefits: [
      "Flexible working hours and remote work options",
      "Comprehensive health and dental insurance",
      "Professional development budget for courses and conferences", 
      "Creative workspace with latest design tools",
      "Annual company retreats and team building events"
    ],
    vision: "To empower the creative community by providing the best platform for showcasing work, finding inspiration, and connecting with opportunities worldwide.",
    jobCount: 8,
    founded: "2009",
    size: "51-200 employees"
  },
  {
    logoText: "Up",
    company: "Upwork", 
    location: "United States",
    jobCount: 12,
    founded: "2015",
    size: "1001-5000 employees"
  },
  {
    logoText: "S",
    company: "Slack",
    location: "China",
    jobCount: 6,
    founded: "2013",
    size: "1001-5000 employees"
  },
  {
    logoText: "Fr",
    company: "Freepik",
    location: "United States",
    jobCount: 4,
    founded: "2010",
    size: "201-500 employees"
  },
  {
    logoText: "G",
    company: "Google",
    location: "United States",
    jobCount: 25,
    founded: "1998",
    size: "10000+ employees"
  },
  {
    logoText: "Fb",
    company: "Facebook",
    location: "United States",
    jobCount: 18,
    founded: "2004",
    size: "10000+ employees"
  },
  {
    logoText: "Mi",
    company: "Microsoft",
    location: "United States",
    jobCount: 32,
    founded: "1975",
    size: "10000+ employees"
  },
  {
    logoText: "Am",
    company: "Amazon",
    location: "United States",
    jobCount: 45,
    founded: "1994",
    size: "10000+ employees"
  },
  {
    logoText: "Ne",
    company: "Netflix",
    location: "United States",
    jobCount: 15,
    founded: "1997",
    size: "5001-10000 employees"
  },
  {
    logoText: "Sp",
    company: "Spotify",
    location: "Sweden",
    jobCount: 22,
    founded: "2006",
    size: "1001-5000 employees"
  },
  {
    logoText: "Ai",
    company: "Airbnb",
    location: "United States",
    jobCount: 28,
    founded: "2008",
    size: "1001-5000 employees"
  },
  {
    logoText: "Ub",
    company: "Uber",
    location: "United States",
    jobCount: 35,
    founded: "2009",
    size: "10000+ employees"
  },
  {
    logoText: "Tw",
    company: "Twitter",
    location: "United States",
    jobCount: 19,
    founded: "2006",
    size: "1001-5000 employees"
  },
  {
    logoText: "Li",
    company: "LinkedIn",
    location: "United States",
    jobCount: 41,
    founded: "2003",
    size: "10000+ employees"
  },
  {
    logoText: "Ad",
    company: "Adobe",
    location: "United States",
    jobCount: 26,
    founded: "1982",
    size: "10000+ employees"
  },
  {
    logoText: "Sa",
    company: "Salesforce",
    location: "United States",
    jobCount: 38,
    founded: "1999",
    size: "10000+ employees"
  },
  {
    logoText: "Sh",
    company: "Shopify",
    location: "Canada",
    jobCount: 24,
    founded: "2006",
    size: "5001-10000 employees"
  },
  {
    logoText: "Dr",
    company: "Dropbox",
    location: "United States",
    jobCount: 16,
    founded: "2007",
    size: "1001-5000 employees"
  },
  {
    logoText: "Zn",
    company: "Zendesk",
    location: "United States",
    jobCount: 21,
    founded: "2007",
    size: "1001-5000 employees"
  }
];

export const companiesData = [
  {
    id: 1,
    logoText: "D",
    company: "Dribbble",
    location: "United States",
    description: "Dribbble is the world's leading community for creatives to share, grow, and get hired.",
    benefits: [
      "Flexible working hours and remote work options",
      "Comprehensive health and dental insurance",
      "Professional development budget for courses and conferences", 
      "Creative workspace with latest design tools",
      "Annual company retreats and team building events"
    ],
    vision: "To empower the creative community by providing the best platform for showcasing work, finding inspiration, and connecting with opportunities worldwide.",
    jobCount: 8,
    founded: "2009",
    size: "51-200 employees"
  },
  {
    id: 2,
    logoText: "Up",
    company: "Upwork", 
    location: "United States",
    jobCount: 12,
    founded: "2015",
    size: "1001-5000 employees"
  },
  {
    id: 3,
    logoText: "S",
    company: "Slack",
    location: "China",
    jobCount: 6,
    founded: "2013",
    size: "1001-5000 employees"
  },
  {
    id: 4,
    logoText: "Fr",
    company: "Freepik",
    location: "United States",
    jobCount: 4,
    founded: "2010",
    size: "201-500 employees"
  },
  {
    id: 5,
    logoText: "G",
    company: "Google",
    location: "United States",
    jobCount: 25,
    founded: "1998",
    size: "10000+ employees"
  },
  {
    id: 6,
    logoText: "Fb",
    company: "Facebook",
    location: "United States",
    jobCount: 18,
    founded: "2004",
    size: "10000+ employees"
  }
];

// =============================================================================
// JOBS DATA
// =============================================================================
export const featuredJobs = [
  {
    logo: upworkLogo,
    logoText: "Up",
    title: "Senior UX Designer",
    location: "Australia",
    salary: "$30K-$35K",
    time: "4 Days Remaining",
    topLabel: "Contract Base",
    topVariant: "success",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Upwork",
    description: "We are looking for a Senior UX Designer to join our team...",
    requirements: ["5+ years experience", "Figma proficiency", "Portfolio required"],
    benefits: ["Health insurance", "Remote work", "Flexible hours"],
    postedDate: "2024-01-15",
    category: "Design"
  },
  {
    logo: appleLogo,
    logoText: "Ap",
    title: "Software Engineer",
    location: "China",
    salary: "$50K-$60K",
    time: "4 Days Remaining",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Apple",
    description: "Join our engineering team to build innovative products...",
    requirements: ["Computer Science degree", "3+ years experience", "iOS development"],
    benefits: ["Stock options", "Health insurance", "Learning budget"],
    postedDate: "2024-01-10",
    category: "Technology"
  },
  {
    logo: figmaLogo,
    logoText: "Fi",
    title: "Product Designer",
    location: "United States",
    salary: "$40K-$50K",
    time: "2 Days Remaining",
    typeLabel: "Part-Time",
    typeVariant: "warning",
    company: "Figma",
    description: "Design the future of collaborative design tools...",
    requirements: ["Design portfolio", "Figma expertise", "User research skills"],
    benefits: ["Flexible schedule", "Design tools", "Remote work"],
    postedDate: "2024-01-12",
    category: "Design"
  },
  {
    logo: udemyLogo,
    logoText: "Ud",
    title: "Content Creator",
    location: "Remote",
    salary: "$25K-$35K",
    time: "1 Week Remaining",
    typeLabel: "Contract",
    typeVariant: "info",
    company: "Udemy",
    description: "Create engaging educational content for online courses...",
    requirements: ["Content creation experience", "Video editing", "Subject expertise"],
    benefits: ["Flexible hours", "Creative freedom", "Revenue sharing"],
    postedDate: "2024-01-08",
    category: "Education"
  },
  {
    logo: facebookLogo,
    logoText: "Fb",
    title: "Data Scientist",
    location: "California",
    salary: "$70K-$90K",
    time: "3 Days Remaining",
    topLabel: "Hot",
    topVariant: "danger",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Facebook",
    description: "Analyze user data to drive product decisions...",
    requirements: ["PhD in relevant field", "Python/R proficiency", "ML experience"],
    benefits: ["Stock options", "Health insurance", "Learning budget"],
    postedDate: "2024-01-14",
    category: "Data Science"
  },
  {
    logo: googleLogo,
    logoText: "Go",
    title: "DevOps Engineer",
    location: "New York",
    salary: "$60K-$80K",
    time: "5 Days Remaining",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Google",
    description: "Build and maintain scalable infrastructure...",
    requirements: ["Cloud platforms", "Docker/Kubernetes", "CI/CD experience"],
    benefits: ["Stock options", "Health insurance", "Learning budget"],
    postedDate: "2024-01-11",
    category: "DevOps"
  }
];

export const allJobs = [
  ...featuredJobs,
  {
    logo: upworkLogo,
    logoText: "Up",
    title: "Frontend Developer",
    location: "Remote",
    salary: "$45K-$55K",
    time: "1 Week Remaining",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Upwork",
    description: "Build responsive web applications...",
    requirements: ["React experience", "JavaScript proficiency", "CSS skills"],
    benefits: ["Remote work", "Flexible hours", "Health insurance"],
    postedDate: "2024-01-09",
    category: "Development"
  },
  {
    logo: appleLogo,
    logoText: "Ap",
    title: "iOS Developer",
    location: "California",
    salary: "$65K-$85K",
    time: "2 Weeks Remaining",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Apple",
    description: "Develop cutting-edge iOS applications...",
    requirements: ["Swift proficiency", "iOS SDK", "App Store experience"],
    benefits: ["Stock options", "Health insurance", "Employee discounts"],
    postedDate: "2024-01-07",
    category: "Mobile Development"
  }
];

export const jobsData = [
  {
    id: 1,
    logo: upworkLogo,
    logoText: "Up",
    title: "Senior UX Designer",
    location: "Australia",
    salary: "$30K-$35K",
    time: "4 Days Remaining",
    topLabel: "Contract Base",
    topVariant: "success",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Upwork",
    description: "We are looking for a Senior UX Designer to join our team...",
    requirements: ["5+ years experience", "Figma proficiency", "Portfolio required"],
    benefits: ["Health insurance", "Remote work", "Flexible hours"],
    postedDate: "2024-01-15",
    category: "Design"
  },
  {
    id: 2,
    logo: appleLogo,
    logoText: "Ap",
    title: "Software Engineer",
    location: "China",
    salary: "$50K-$60K",
    time: "4 Days Remaining",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    company: "Apple",
    description: "Join our engineering team to build innovative products...",
    requirements: ["Computer Science degree", "3+ years experience", "iOS development"],
    benefits: ["Stock options", "Health insurance", "Learning budget"],
    postedDate: "2024-01-10",
    category: "Technology"
  }
];

// =============================================================================
// FILTER OPTIONS
// =============================================================================
export const filterOptions = {
  experienceOptions: [
    { label: "Freshers (0-1 years)", value: "freshers" },
    { label: "Junior (1-3 years)", value: "junior" },
    { label: "Mid Level (3-5 years)", value: "mid" },
    { label: "Senior (5-8 years)", value: "senior" },
    { label: "Expert (8+ years)", value: "expert" },
  ],
  
  salaryOptions: [
    { label: "$0 - $30k", value: "0-30k" },
    { label: "$30k - $60k", value: "30k-60k" },
    { label: "$60k - $100k", value: "60k-100k" },
    { label: "$100k - $150k", value: "100k-150k" },
    { label: "$150k+", value: "150k+" },
  ],
  
  jobTypes: [
    { label: "Full Time", value: "full-time" },
    { label: "Part Time", value: "part-time" },
    { label: "Contract", value: "contract" },
    { label: "Freelance", value: "freelance" },
    { label: "Internship", value: "internship" },
  ],
  
  educations: [
    { label: "High School", value: "high-school" },
    { label: "Associate Degree", value: "associate" },
    { label: "Bachelor's Degree", value: "bachelor" },
    { label: "Master's Degree", value: "master" },
    { label: "PhD", value: "phd" },
    { label: "Professional Certificate", value: "certificate" },
  ],
  
  jobLevels: [
    { label: "Entry Level", value: "entry" },
    { label: "Mid Level", value: "mid" },
    { label: "Senior Level", value: "senior" },
    { label: "Executive", value: "executive" },
  ],

  genderOptions: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
    { label: "Prefer not to say", value: "prefer-not-to-say" },
  ]
};

// =============================================================================
// VACANCIES DATA
// =============================================================================
export const popularVacancies = [
  { title: "Anesthesiologists", count: "45,904" },
  { title: "Maxillofacial Surgeons", count: "74,875" },
  { title: "Financial Manager", count: "61,391" },
  { title: "Surgeons", count: "50,364" },
  { title: "Software Developer", count: "43,359" },
  { title: "Management Analysis", count: "93,046" },
  { title: "Obstetricians-Gynecologists", count: "4,339" },
  { title: "Psychiatrists", count: "18,599" },
  { title: "IT Manager", count: "50,963" },
  { title: "Orthodontists", count: "20,079" },
  { title: "Data Scientist", count: "28,200", isLink: true },
  { title: "Operations Research Analysis", count: "16,827" },
];

// =============================================================================
// CATEGORIES DATA
// =============================================================================
export const categoriesData = [
  { name: "Design & Creative", title: "Design & Creative", subtitle: "653 Open positions", count: 653, icon: Palette },
  { name: "Development & IT", title: "Development & IT", subtitle: "658 Open positions", count: 658, icon: Code },
  { name: "Sales & Marketing", title: "Sales & Marketing", subtitle: "297 Open positions", count: 297, icon: TrendingUp },
  { name: "Mobile Application", title: "Mobile Application", subtitle: "204 Open positions", count: 204, icon: Smartphone },
  { name: "Construction", title: "Construction", subtitle: "125 Open positions", count: 125, icon: HardHat },
  { name: "Information Technology", title: "Information Technology", subtitle: "658 Open positions", count: 658, icon: Settings },
  { name: "Real Estate", title: "Real Estate", subtitle: "125 Open positions", count: 125, icon: Home },
  { name: "Content Writer", title: "Content Writer", subtitle: "125 Open positions", count: 125, icon: PenTool }
];

// =============================================================================
// STATS DATA
// =============================================================================
export const statsData = [
  {
    icon: Briefcase,
    title: "175,324",
    subtitle: "Live Jobs"
  },
  {
    icon: Building2,
    title: "97,354",
    subtitle: "Companies"
  },
  {
    icon: Users,
    title: "38,475",
    subtitle: "Candidates"
  },
  {
    icon: Sparkles,
    title: "7,532",
    subtitle: "New Jobs"
  }
];

// =============================================================================
// TESTIMONIALS DATA
// =============================================================================
export const testimonialsData = [
  {
    id: 1,
    name: "Robert Fox",
    title: "UI/UX Designer",
    avatar: avatar1,
    rating: 5,
    content: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."
  },
  {
    id: 2,
    name: "Bessie Cooper",
    title: "Creative Director",
    avatar: avatar2,
    rating: 5,
    content: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante"
  },
  {
    id: 3,
    name: "Jane Cooper",
    title: "Photographer",
    avatar: avatar3,
    rating: 5,
    content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus."
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Product Manager",
    avatar: avatar4,
    rating: 5,
    content: "Jobpilot helped me find my dream job in just 2 weeks! The platform is intuitive and the job recommendations are spot on."
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Software Engineer",
    avatar: avatar5,
    rating: 4,
    content: "Great platform for tech professionals. I love how easy it is to filter jobs by technology stack and experience level."
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    title: "Marketing Specialist",
    avatar: avatar6,
    rating: 5,
    content: "The best job portal I've used! Clean interface, relevant job suggestions, and excellent customer support."
  },
  {
    id: 7,
    name: "David Kim",
    title: "Data Scientist",
    avatar: avatar1,
    rating: 5,
    content: "Found multiple interview opportunities within the first week. The application process is streamlined and efficient."
  },
  {
    id: 8,
    name: "Jessica Wang",
    title: "UX Researcher",
    avatar: avatar2,
    rating: 4,
    content: "Excellent platform for finding remote work opportunities. The company profiles are detailed and helpful."
  },
  {
    id: 9,
    name: "Alex Thompson",
    title: "DevOps Engineer",
    avatar: avatar3,
    rating: 5,
    content: "Jobpilot's advanced search filters saved me hours of browsing. Highly recommend for serious job seekers!"
  }
]; // Updated testimonials data

// =============================================================================
// BLOG DATA
// =============================================================================
export const blogCategories = [
  { id: 1, name: "Career Tips", slug: "career-tips", count: 27 },
  { id: 2, name: "Interview Guide", slug: "interview-guide", count: 20 },
  { id: 3, name: "Resume Writing", slug: "resume-writing", count: 17 },
  { id: 4, name: "Industry Insights", slug: "industry-insights", count: 22 },
  { id: 5, name: "Remote Work", slug: "remote-work", count: 13 },
  { id: 6, name: "Salary Negotiation", slug: "salary-negotiation", count: 10 },
  { id: 7, name: "Professional Development", slug: "professional-development", count: 18 }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Landing Your Dream Job in 2024",
    slug: "10-essential-tips-landing-dream-job-2024",
    excerpt: "Discover the most effective strategies to stand out in today's competitive job market and secure the position you've always wanted.",
    image: "https://picsum.photos/400/250?random=1",
    date: "Dec 15, 2024",
    commentsCount: 12,
    category: "career",
    tags: ["career tips", "job search", "interview", "resume", "networking"],
    author: {
      name: "Sarah Mitchell",
      title: "Career Coach & HR Expert",
      avatar: avatar1
    },
    content: `
      <p class="mb-8">The job market in 2024 is more competitive than ever, but with the right strategies, you can position yourself as the ideal candidate for your dream job. Here are 10 essential tips that will give you a significant advantage.</p>
      
      <img src="https://picsum.photos/800/400?random=101" alt="Professional networking event" class="w-full h-64 object-cover rounded-lg mb-8" />
      
      <h2 class="mb-6">1. Optimize Your LinkedIn Profile</h2>
      <p class="mb-6">Your LinkedIn profile is often the first impression recruiters have of you. Make sure your headline is compelling, your summary tells your professional story, and your experience section highlights your achievements with quantifiable results.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p class="text-blue-800"><strong>Pro Tip:</strong> Use keywords from your target job descriptions in your LinkedIn profile to improve your visibility in recruiter searches.</p>
      </div>
      
      <h2 class="mb-6">2. Tailor Your Resume for Each Application</h2>
      <p class="mb-6">Generic resumes don't work anymore. Customize your resume for each position by incorporating keywords from the job description and highlighting relevant experiences that match the role requirements.</p>
      
      <img src="https://picsum.photos/800/300?random=102" alt="Resume customization process" class="w-full h-48 object-cover rounded-lg mb-6" />
      
      <h3 class="mb-4">Key Elements to Customize:</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Professional summary</li>
        <li>Key skills section</li>
        <li>Work experience descriptions</li>
        <li>Relevant achievements</li>
      </ul>
      
      <h2 class="mb-6">3. Build a Strong Personal Brand</h2>
      <p class="mb-6">Develop a consistent professional image across all platforms. Share industry insights, engage with thought leaders, and showcase your expertise through content creation.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Content Creation</h4>
          <p>Share valuable insights, industry trends, and professional experiences to establish yourself as a thought leader.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Engagement</h4>
          <p>Actively engage with industry leaders, comment on relevant posts, and participate in professional discussions.</p>
        </div>
      </div>
      
      <h2 class="mb-6">4. Network Strategically</h2>
      <p class="mb-6">Networking isn't just about collecting contacts—it's about building meaningful relationships. Attend industry events, join professional associations, and engage with peers in your field.</p>
      
      <img src="https://picsum.photos/800/400?random=103" alt="Professional networking" class="w-full h-64 object-cover rounded-lg mb-6" />
      
      <h3 class="mb-4">Effective Networking Strategies:</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Attend industry conferences and workshops</li>
        <li>Join professional associations and groups</li>
        <li>Participate in online forums and discussions</li>
        <li>Follow up with meaningful connections</li>
      </ol>
      
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p class="text-yellow-800"><strong>Remember:</strong> Quality connections are more valuable than quantity. Focus on building genuine relationships.</p>
      </div>
      
      <h2 class="mb-6">5. Prepare for Modern Interview Formats</h2>
      <p class="mb-6">Be ready for video interviews, panel discussions, and practical assessments. Practice your responses to common questions and prepare examples that demonstrate your problem-solving abilities.</p>
      
      <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-green-800 mb-3">Interview Preparation Checklist:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul class="list-disc pl-4 space-y-1">
            <li>Research the company thoroughly</li>
            <li>Prepare STAR method responses</li>
            <li>Test your technology setup</li>
            <li>Practice with mock interviews</li>
          </ul>
          <ul class="list-disc pl-4 space-y-1">
            <li>Prepare thoughtful questions</li>
            <li>Dress professionally</li>
            <li>Have backup plans ready</li>
            <li>Follow up after the interview</li>
          </ul>
        </div>
      </div>
      
      <h2 class="mb-6">6. Leverage Technology and Tools</h2>
      <p class="mb-6">Use modern job search tools and platforms to streamline your application process and increase your chances of success.</p>
      
      <img src="https://picsum.photos/800/300?random=104" alt="Job search technology" class="w-full h-48 object-cover rounded-lg mb-6" />
      
      <h3 class="mb-4">Essential Job Search Tools:</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="text-center p-4 bg-white border rounded-lg">
          <h4 class="font-semibold mb-2">Job Boards</h4>
          <p class="text-sm text-gray-600">LinkedIn, Indeed, Glassdoor</p>
        </div>
        <div class="text-center p-4 bg-white border rounded-lg">
          <h4 class="font-semibold mb-2">Resume Builders</h4>
          <p class="text-sm text-gray-600">Canva, Resume.io, Zety</p>
        </div>
        <div class="text-center p-4 bg-white border rounded-lg">
          <h4 class="font-semibold mb-2">Interview Prep</h4>
          <p class="text-sm text-gray-600">Pramp, InterviewBit, LeetCode</p>
        </div>
      </div>
      
      <h2 class="mb-6">7. Develop In-Demand Skills</h2>
      <p class="mb-6">Stay ahead of the curve by continuously developing skills that are in high demand in your industry.</p>
      
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-purple-800 mb-3">Top Skills for 2024:</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AI & ML</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Data Analysis</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Digital Marketing</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Project Management</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cloud Computing</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Leadership</span>
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Communication</span>
        </div>
      </div>
      
      <h2 class="mb-6">8. Master the Art of Follow-Up</h2>
      <p class="mb-6">Following up after interviews and applications shows professionalism and keeps you top of mind with hiring managers.</p>
      
      <img src="https://picsum.photos/800/400?random=105" alt="Professional follow-up" class="w-full h-64 object-cover rounded-lg mb-6" />
      
      <h3 class="mb-4">Follow-Up Best Practices:</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Send thank-you emails within 24 hours</li>
        <li>Reference specific points from the interview</li>
        <li>Reiterate your interest in the position</li>
        <li>Provide additional information if requested</li>
      </ul>
      
      <h2 class="mb-6">9. Build a Portfolio of Work</h2>
      <p class="mb-6">Create a portfolio that showcases your best work and demonstrates your skills and expertise to potential employers.</p>
      
      <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-orange-800 mb-3">Portfolio Elements:</h4>
        <div class="space-y-3">
          <div class="flex items-center">
            <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            <span>Project case studies with measurable results</span>
          </div>
          <div class="flex items-center">
            <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            <span>Testimonials from clients or colleagues</span>
          </div>
          <div class="flex items-center">
            <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            <span>Certifications and achievements</span>
          </div>
          <div class="flex items-center">
            <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            <span>Blog posts or articles you've written</span>
          </div>
        </div>
      </div>
      
      <h2 class="mb-6">10. Stay Persistent and Positive</h2>
      <p class="mb-6">Job searching can be challenging, but maintaining a positive attitude and staying persistent will ultimately lead to success.</p>
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-blue-800 mb-3">Maintaining Motivation:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium mb-2">Set Realistic Goals</h5>
            <p class="text-sm text-gray-600">Break down your job search into manageable daily and weekly goals.</p>
          </div>
          <div>
            <h5 class="font-medium mb-2">Celebrate Small Wins</h5>
            <p class="text-sm text-gray-600">Acknowledge progress, whether it's a networking connection or interview invitation.</p>
          </div>
          <div>
            <h5 class="font-medium mb-2">Learn from Rejections</h5>
            <p class="text-sm text-gray-600">Use feedback to improve your approach and refine your strategy.</p>
          </div>
          <div>
            <h5 class="font-medium mb-2">Stay Connected</h5>
            <p class="text-sm text-gray-600">Maintain relationships with mentors and peers for support and guidance.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-lg">
        <h3 class="font-semibold mb-3">Final Thoughts</h3>
        <p>Landing your dream job requires a combination of preparation, persistence, and strategic thinking. By implementing these 10 essential tips, you'll be well-positioned to stand out in today's competitive job market and achieve your career goals.</p>
        <p class="mt-4 text-sm text-gray-600">Remember, every successful professional started somewhere. Stay focused on your goals, continue learning and growing, and don't be afraid to step outside your comfort zone.</p>
      </div>
    `
  },
  {
    id: 2,
    title: "The Future of Remote Work: Trends and Best Practices",
    slug: "future-remote-work-trends-best-practices",
    excerpt: "Explore the evolving landscape of remote work and discover strategies to thrive in a distributed work environment.",
    image: "https://picsum.photos/400/250?random=2",
    date: "Dec 12, 2024",
    commentsCount: 8,
    category: "remote",
    tags: ["remote work", "workplace", "productivity", "technology", "flexibility"],
    author: {
      name: "Michael Chen",
      title: "Remote Work Specialist",
      avatar: avatar2
    },
    content: `
      <p class="mb-8">Remote work has transformed from a temporary solution to a permanent fixture in the modern workplace. As we move forward, understanding the trends and best practices is crucial for both employers and employees.</p>
      
      <h2 class="mb-6">Key Trends in Remote Work</h2>
      <p class="mb-6">The landscape of remote work continues to evolve with new technologies and changing workplace dynamics.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p class="text-blue-800"><strong>Trend:</strong> Hybrid work models are becoming the new standard, offering flexibility while maintaining team collaboration.</p>
      </div>
      
      <h2 class="mb-6">Best Practices for Remote Teams</h2>
      <p class="mb-6">Success in remote work requires intentional strategies and tools to maintain productivity and team cohesion.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Communication</h4>
          <p>Establish clear communication channels and regular check-ins to keep everyone aligned.</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Technology</h4>
          <p>Invest in reliable tools for collaboration, project management, and team building.</p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Interview Preparation: Common Questions and Expert Answers",
    slug: "interview-preparation-common-questions-expert-answers",
    excerpt: "Master the most common interview questions with expert strategies and sample answers that will help you stand out.",
    image: "https://picsum.photos/400/250?random=3",
    date: "Dec 10, 2024",
    commentsCount: 15,
    category: "interview",
    tags: ["interview", "preparation", "questions", "answers", "career"],
    author: {
      name: "Emily Rodriguez",
      title: "HR Manager",
      avatar: avatar3
    },
    content: `
      <p class="mb-8">Preparing for interviews can be overwhelming, but with the right approach, you can confidently tackle any question that comes your way.</p>
      
      <h2 class="mb-6">Most Common Interview Questions</h2>
      <p class="mb-6">Understanding what employers are looking for helps you craft compelling responses.</p>
      
      <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-green-800 mb-3">Question: "Tell me about yourself"</h4>
        <p class="text-green-800">Focus on your professional journey, key achievements, and what makes you unique. Keep it concise and relevant to the role.</p>
      </div>
      
      <h2 class="mb-6">Behavioral Questions</h2>
      <p class="mb-6">Use the STAR method to structure your responses effectively.</p>
    `
  },
  {
    id: 4,
    title: "Resume Writing Guide: How to Create a Standout Resume",
    slug: "resume-writing-guide-standout-resume",
    excerpt: "Learn the essential elements of a compelling resume and how to showcase your skills and experience effectively.",
    image: "https://picsum.photos/400/250?random=4",
    date: "Dec 8, 2024",
    commentsCount: 22,
    category: "resume",
    tags: ["resume", "writing", "career", "job search", "skills"],
    author: {
      name: "David Kim",
      title: "Resume Expert",
      avatar: avatar4
    },
    content: `
      <p class="mb-8">Your resume is your first opportunity to make a strong impression on potential employers. A well-crafted resume can open doors to exciting career opportunities.</p>
      
      <h2 class="mb-6">Essential Resume Sections</h2>
      <p class="mb-6">Every effective resume should include these key sections to present your qualifications clearly.</p>
      
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p class="text-yellow-800"><strong>Tip:</strong> Tailor your resume for each job application by highlighting relevant skills and experiences.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Salary Negotiation Strategies for 2024",
    slug: "salary-negotiation-strategies-2024",
    excerpt: "Master the art of salary negotiation with proven strategies and techniques to maximize your earning potential.",
    image: "https://picsum.photos/400/250?random=5",
    date: "Dec 6, 2024",
    commentsCount: 18,
    category: "salary",
    tags: ["salary", "negotiation", "compensation", "career", "money"],
    author: {
      name: "Lisa Wang",
      title: "Compensation Specialist",
      avatar: avatar5
    },
    content: `
      <p class="mb-8">Salary negotiation is a critical skill that can significantly impact your long-term earning potential. With the right approach, you can confidently advocate for fair compensation.</p>
      
      <h2 class="mb-6">Research and Preparation</h2>
      <p class="mb-6">Thorough research is the foundation of successful salary negotiation.</p>
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-blue-800 mb-3">Research Checklist:</h4>
        <ul class="list-disc pl-4 space-y-1">
          <li>Industry salary benchmarks</li>
          <li>Company-specific compensation data</li>
          <li>Your market value assessment</li>
          <li>Benefits and perks evaluation</li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    title: "Building Your Professional Network: A Complete Guide",
    slug: "building-professional-network-complete-guide",
    excerpt: "Discover effective strategies for building and maintaining a strong professional network that can advance your career.",
    image: "https://picsum.photos/400/250?random=6",
    date: "Dec 4, 2024",
    commentsCount: 14,
    category: "networking",
    tags: ["networking", "professional", "career", "relationships", "opportunities"],
    author: {
      name: "Alex Thompson",
      title: "Networking Coach",
      avatar: avatar6
    },
    content: `
      <p class="mb-8">Your professional network is one of your most valuable career assets. Building meaningful connections can open doors to opportunities you never knew existed.</p>
      
      <h2 class="mb-6">Networking Fundamentals</h2>
      <p class="mb-6">Effective networking is about building genuine relationships, not just collecting business cards.</p>
      
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h4 class="font-semibold text-purple-800 mb-3">Networking Principles:</h4>
        <div class="space-y-3">
          <div class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <span>Give before you ask</span>
          </div>
          <div class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <span>Focus on quality over quantity</span>
          </div>
          <div class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <span>Maintain regular contact</span>
          </div>
        </div>
      </div>
    `
  }
  ,
  {
    id: 7,
    title: "Top Portfolio Tips: Showcase Work That Gets You Hired",
    slug: "top-portfolio-tips-showcase-work",
    excerpt: "Craft a portfolio that highlights impact, context, and outcomes to impress hiring managers.",
    image: "https://picsum.photos/400/250?random=7",
    date: "Dec 3, 2024",
    commentsCount: 9,
    category: "career",
    tags: ["portfolio", "career", "design", "case studies", "hiring"],
    author: {
      name: "Robert Fox",
      title: "Design Lead",
      avatar: avatar1
    },
    content: `
      <p class="mb-8">A strong portfolio tells a story: problem, process, and impact. Go beyond visuals and explain decisions and results.</p>
      <h2 class="mb-6">What Recruiters Want to See</h2>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Clear problem statements</li>
        <li>Role and responsibilities</li>
        <li>Process and alternatives considered</li>
        <li>Measurable outcomes</li>
      </ul>
    `
  },
  {
    id: 8,
    title: "Career Switch in 6 Months: A Practical Roadmap",
    slug: "career-switch-6-months-roadmap",
    excerpt: "Planning a career change? Here’s a realistic step-by-step plan to transition without burning out.",
    image: "https://picsum.photos/400/250?random=8",
    date: "Dec 2, 2024",
    commentsCount: 11,
    category: "career",
    tags: ["career switch", "learning", "portfolio", "networking", "resume"],
    author: {
      name: "Bessie Cooper",
      title: "Career Strategist",
      avatar: avatar2
    },
    content: `
      <p class="mb-8">Switching careers is achievable with a focused plan. Allocate weekly time for learning, building, and networking.</p>
      <h2 class="mb-6">6-Month Milestones</h2>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Month 1-2: Foundation learning and industry research</li>
        <li>Month 3-4: Build 2-3 small projects, start sharing online</li>
        <li>Month 5: Create portfolio and tailored resume</li>
        <li>Month 6: Apply, interview prep, and targeted networking</li>
      </ol>
    `
  }
];

export const relatedPosts = (currentPostId, category, limit = 3) => {
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);
};

// Recent Posts for sidebar
export const recentPosts = [
  {
    id: 1,
    image: "https://picsum.photos/400/250?random=1",
    title: "How to Build a Successful Career in Tech",
    date: "Dec 15, 2024",
    commentsCount: 24,
    slug: "how-to-build-successful-career-in-tech"
  },
  {
    id: 2,
    image: "https://picsum.photos/400/250?random=2",
    title: "Remote Work Best Practices for 2024",
    date: "Dec 12, 2024",
    commentsCount: 18,
    slug: "remote-work-best-practices-2024"
  },
  {
    id: 3,
    image: "https://picsum.photos/400/250?random=3",
    title: "Interview Tips That Actually Work",
    date: "Dec 10, 2024",
    commentsCount: 32,
    slug: "interview-tips-that-actually-work"
  },
  {
    id: 4,
    image: "https://picsum.photos/400/250?random=4",
    title: "Salary Negotiation Strategies",
    date: "Dec 8, 2024",
    commentsCount: 15,
    slug: "salary-negotiation-strategies"
  },
  {
    id: 5,
    image: "https://picsum.photos/400/250?random=5",
    title: "Building Your Professional Network",
    date: "Dec 5, 2024",
    commentsCount: 21,
    slug: "building-professional-network"
  }
];

// Gallery Images for BlogDetail sidebar
export const galleryImages = [
  "https://picsum.photos/200/200?random=1",
  "https://picsum.photos/200/200?random=2", 
  "https://picsum.photos/200/200?random=3",
  "https://picsum.photos/200/200?random=4",
  "https://picsum.photos/200/200?random=5",
  "https://picsum.photos/200/200?random=6",
  "https://picsum.photos/200/200?random=7",
  "https://picsum.photos/200/200?random=8",
  "https://picsum.photos/200/200?random=9"
];