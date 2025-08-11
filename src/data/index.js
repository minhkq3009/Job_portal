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
    `,
    author: {
      name: "Sarah Mitchell",
      title: "Career Coach & HR Expert",
      avatar: avatar1
    },
    category: "Career Tips",
    categorySlug: "career-tips",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["job search", "career advice", "professional development"],
    featured: true,
    views: 2847,
    likes: 156
  },
  {
    id: 2,
    title: "The Ultimate Guide to Remote Work Success",
    slug: "ultimate-guide-remote-work-success",
    excerpt: "Master the art of working from home with proven strategies for productivity, communication, and work-life balance.",
    image: "https://picsum.photos/400/250?random=2",
    content: `
      <p>Remote work has become the new normal for millions of professionals worldwide. While it offers flexibility and freedom, it also presents unique challenges that require specific skills and strategies to overcome.</p>
      
      <h2>Setting Up Your Home Office</h2>
      <p>Creating a dedicated workspace is crucial for remote work success. Choose a quiet area with good lighting, invest in ergonomic furniture, and ensure you have reliable internet connectivity.</p>
      
      <h2>Establishing Boundaries</h2>
      <p>One of the biggest challenges of remote work is maintaining work-life balance. Set clear boundaries by establishing specific work hours, creating morning routines, and communicating your availability to family members.</p>
      
      <h2>Communication Best Practices</h2>
      <p>Effective communication becomes even more important when working remotely. Use video calls for important discussions, be proactive in sharing updates, and choose the right communication tools for different types of interactions.</p>
    `,
    author: {
      name: "David Chen",
      title: "Remote Work Consultant",
      avatar: avatar2
    },
    category: "Remote Work",
    categorySlug: "remote-work",
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    tags: ["remote work", "productivity", "work-life balance"],
    featured: true,
    views: 1923,
    likes: 89
  },
  {
    id: 3,
    title: "How to Negotiate Your Salary Like a Pro",
    slug: "how-to-negotiate-salary-like-pro",
    excerpt: "Learn the art of salary negotiation with expert tips and real-world examples that will help you maximize your earning potential.",
    image: "https://picsum.photos/400/250?random=3",
    content: `
      <p>Salary negotiation is a critical skill that can significantly impact your lifetime earnings. Yet many professionals avoid these conversations or approach them unprepared. Here's how to negotiate like a pro.</p>
      
      <h2>Research Market Rates</h2>
      <p>Before entering any negotiation, arm yourself with data. Research salary ranges for your position in your geographic area using resources like Glassdoor, PayScale, and industry reports.</p>
      
      <h2>Timing is Everything</h2>
      <p>The best time to negotiate is when you have leverage—typically during the job offer process or after a successful performance review. Avoid salary discussions during company-wide budget cuts or layoffs.</p>
      
      <h2>Present Your Value Proposition</h2>
      <p>Focus on the value you bring to the organization. Prepare specific examples of your achievements, quantify your contributions, and demonstrate how you've exceeded expectations.</p>
    `,
    author: {
      name: "Emily Rodriguez",
      title: "Compensation Specialist",
      avatar: avatar3
    },
    category: "Salary Negotiation",
    categorySlug: "salary-negotiation",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    tags: ["salary negotiation", "career advancement", "compensation"],
    featured: false,
    views: 1654,
    likes: 73
  },
  {
    id: 4,
    title: "Common Interview Mistakes and How to Avoid Them",
    slug: "common-interview-mistakes-how-to-avoid",
    excerpt: "Don't let these common interview pitfalls derail your job search. Learn what to avoid and how to make a lasting positive impression.",
    image: "https://picsum.photos/400/250?random=4",
    content: `
      <p>Even the most qualified candidates can sabotage their chances with common interview mistakes. Here are the most frequent errors and how to avoid them.</p>
      
      <h2>Arriving Unprepared</h2>
      <p>Failing to research the company and role is one of the biggest red flags for interviewers. Spend time understanding the company's mission, recent news, and the specific requirements of the position.</p>
      
      <h2>Speaking Negatively About Previous Employers</h2>
      <p>No matter how difficult your previous work situation was, avoid speaking negatively about former employers. Instead, focus on what you learned and how you're looking forward to new challenges.</p>
      
      <h2>Not Asking Questions</h2>
      <p>Interviews are two-way conversations. Prepare thoughtful questions about the role, team dynamics, and company culture to show your genuine interest and engagement.</p>
    `,
    author: {
      name: "Michael Johnson",
      title: "Recruitment Director",
      avatar: avatar4
    },
    category: "Interview Guide",
    categorySlug: "interview-guide",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    tags: ["interviews", "job search", "career tips"],
    featured: false,
    views: 2156,
    likes: 94
  },
  {
    id: 5,
    title: "Building a Resume That Gets Results",
    slug: "building-resume-that-gets-results",
    excerpt: "Transform your resume from ordinary to extraordinary with these proven strategies that capture recruiters' attention.",
    image: "https://picsum.photos/400/250?random=5",
    content: `
      <p>Your resume is your personal marketing document—it needs to quickly communicate your value and convince employers to invite you for an interview. Here's how to create a resume that gets results.</p>
      
      <h2>Start with a Compelling Summary</h2>
      <p>Your professional summary should be a powerful elevator pitch that highlights your key qualifications and career objectives. Keep it concise but impactful, focusing on what makes you unique.</p>
      
      <h2>Use Action Verbs and Quantify Achievements</h2>
      <p>Replace passive language with strong action verbs like "achieved," "implemented," and "optimized." Whenever possible, include numbers to quantify your accomplishments and demonstrate impact.</p>
      
      <h2>Optimize for Applicant Tracking Systems</h2>
      <p>Many companies use ATS software to screen resumes. Include relevant keywords from the job description, use standard section headings, and avoid complex formatting that might confuse the system.</p>
    `,
    author: {
      name: "Lisa Thompson",
      title: "Resume Writing Expert",
      avatar: avatar5
    },
    category: "Resume Writing",
    categorySlug: "resume-writing",
    publishedAt: "2024-01-05",
    readTime: "9 min read",
    tags: ["resume writing", "job applications", "career tools"],
    featured: false,
    views: 1789,
    likes: 67
  },
  {
    id: 6,
    title: "The Future of Work: Trends Shaping 2024 and Beyond",
    slug: "future-of-work-trends-2024-beyond",
    excerpt: "Explore the emerging trends that are reshaping the workplace and learn how to prepare for the future of work.",
    image: "https://picsum.photos/400/250?random=6",
    content: `
      <p>The workplace is evolving rapidly, driven by technological advances, changing employee expectations, and global events. Understanding these trends is crucial for career planning and professional development.</p>
      
      <h2>Artificial Intelligence and Automation</h2>
      <p>AI is transforming how we work, automating routine tasks and creating new opportunities for human-AI collaboration. Focus on developing skills that complement AI capabilities rather than compete with them.</p>
      
      <h2>Hybrid Work Models</h2>
      <p>The future of work is hybrid, combining remote and in-office experiences. Organizations are reimagining office spaces and developing new policies to support flexible work arrangements.</p>
      
      <h2>Skills-Based Hiring</h2>
      <p>Employers are increasingly focusing on skills rather than traditional qualifications. Continuous learning and skill development are becoming essential for career advancement.</p>
    `,
    author: {
      name: "Robert Kim",
      title: "Future of Work Analyst",
      avatar: avatar6
    },
    category: "Industry Insights",
    categorySlug: "industry-insights",
    publishedAt: "2024-01-03",
    readTime: "11 min read",
    tags: ["future of work", "workplace trends", "career planning"],
    featured: true,
    views: 3241,
    likes: 187
  },
  {
    id: 7,
    title: "Mastering the Art of Professional Networking in the Digital Age",
    slug: "mastering-professional-networking-digital-age",
    excerpt: "Build meaningful professional relationships and expand your network using modern digital tools and time-tested networking principles.",
    image: "https://picsum.photos/400/250?random=7",
    content: `
      <p>Professional networking has evolved dramatically in the digital age. While the fundamentals of building relationships remain the same, the tools and strategies have transformed. Here's your comprehensive guide to mastering modern networking.</p>
      
      <h2>The Foundation of Effective Networking</h2>
      <p>Successful networking isn't about collecting business cards or LinkedIn connections—it's about building genuine, mutually beneficial relationships. Start with a clear understanding of your networking goals and what value you can offer to others.</p>
      
      <h2>Digital Networking Strategies</h2>
      <p>LinkedIn remains the premier platform for professional networking, but don't overlook Twitter, industry-specific forums, and virtual events. Engage authentically by sharing insights, commenting thoughtfully on posts, and offering help when appropriate.</p>
      
      <h2>Virtual Networking Events</h2>
      <p>The pandemic accelerated the adoption of virtual networking events. These offer unique advantages: lower barriers to entry, access to global professionals, and often more structured interaction formats. Prepare an elevator pitch, test your technology beforehand, and follow up promptly with new connections.</p>
      
      <h2>Building Your Personal Brand</h2>
      <p>Your personal brand is your networking foundation. Consistently share valuable content, showcase your expertise, and maintain a professional online presence across all platforms. Remember, people network with people they know, like, and trust.</p>
      
      <h2>The Follow-Up Formula</h2>
      <p>The magic happens in the follow-up. Send personalized messages within 24-48 hours of meeting someone new. Reference specific conversation points, offer value, and suggest concrete next steps for maintaining the relationship.</p>
    `,
    author: {
      name: "Jennifer Walsh",
      title: "Networking Coach & Business Development Expert",
      avatar: avatar1
    },
    category: "Professional Development",
    categorySlug: "professional-development",
    publishedAt: "2024-01-20",
    readTime: "14 min read",
    tags: ["networking", "professional development", "personal branding", "digital marketing"],
    featured: false,
    views: 1876,
    likes: 92
  },
  {
    id: 8,
    title: "The Complete Guide to Career Transitions: Changing Industries Successfully",
    slug: "complete-guide-career-transitions-changing-industries",
    excerpt: "Navigate career changes with confidence using proven strategies for transitioning between industries and roles.",
    image: "https://picsum.photos/400/250?random=8",
    content: `
      <p>Career transitions can be both exciting and daunting. Whether you're seeking new challenges, better work-life balance, or higher compensation, changing industries requires careful planning and strategic execution.</p>
      
      <h2>Assessing Your Transferable Skills</h2>
      <p>Start by conducting a thorough skills inventory. Identify competencies that translate across industries: leadership, project management, communication, analytical thinking, and problem-solving. These form the foundation of your transition strategy.</p>
      
      <h2>Research and Market Analysis</h2>
      <p>Thoroughly research your target industry. Understand market trends, key players, required qualifications, and salary expectations. Use resources like industry reports, professional associations, and informational interviews to gather insights.</p>
      
      <h2>Bridging the Knowledge Gap</h2>
      <p>Identify skill gaps and create a learning plan. Consider online courses, certifications, workshops, or even volunteer work in your target field. Platforms like Coursera, LinkedIn Learning, and industry-specific training programs can accelerate your transition.</p>
      
      <h2>Strategic Networking for Career Change</h2>
      <p>Networking becomes even more critical during career transitions. Attend industry events, join professional associations, and seek mentorship from professionals in your target field. Their insights can provide valuable guidance and potential opportunities.</p>
      
      <h2>Crafting Your Transition Narrative</h2>
      <p>Develop a compelling story that explains your career change motivation and demonstrates how your background adds unique value. Practice articulating this narrative in interviews, networking conversations, and your resume summary.</p>
      
      <h2>Managing the Financial Transition</h2>
      <p>Career changes often involve temporary income reduction. Build a financial cushion, consider part-time or consulting work in your new field, and be realistic about timeline expectations. The investment in your long-term career satisfaction is often worth short-term sacrifices.</p>
    `,
    author: {
      name: "Marcus Thompson",
      title: "Career Transition Specialist",
      avatar: avatar2
    },
    category: "Career Tips",
    categorySlug: "career-tips",
    publishedAt: "2024-01-18",
    readTime: "16 min read",
    tags: ["career change", "industry transition", "professional development", "career planning"],
    featured: false,
    views: 2134,
    likes: 118
  },
  {
    id: 9,
    title: "Behavioral Interview Questions: The STAR Method Mastery Guide",
    slug: "behavioral-interview-questions-star-method-guide",
    excerpt: "Master behavioral interviews using the STAR method with detailed examples and practice scenarios for common questions.",
    image: "https://picsum.photos/400/250?random=9",
    content: `
      <p>Behavioral interviews have become the gold standard for assessing candidates' past performance and predicting future success. The STAR method (Situation, Task, Action, Result) provides a structured approach to answering these questions effectively.</p>
      
      <h2>Understanding the STAR Method</h2>
      <p><strong>Situation:</strong> Set the context by describing the background and circumstances. <strong>Task:</strong> Explain your responsibility or the challenge you faced. <strong>Action:</strong> Detail the specific steps you took to address the situation. <strong>Result:</strong> Share the outcomes and what you learned.</p>
      
      <h2>Common Behavioral Interview Categories</h2>
      <p>Prepare stories for key competency areas: leadership, teamwork, problem-solving, conflict resolution, adaptability, and time management. Having 6-8 well-prepared STAR stories allows you to adapt to various question formats.</p>
      
      <h2>Leadership and Initiative Examples</h2>
      <p>Questions like "Tell me about a time you led a team through a difficult project" require stories that demonstrate your ability to motivate others, make tough decisions, and drive results. Focus on specific actions you took and quantifiable outcomes.</p>
      
      <h2>Problem-Solving and Innovation</h2>
      <p>Employers want to see how you approach challenges creatively. Prepare examples that show your analytical thinking, resourcefulness, and ability to implement solutions. Include metrics whenever possible to demonstrate impact.</p>
      
      <h2>Handling Failure and Learning</h2>
      <p>Questions about failures or mistakes test your self-awareness and growth mindset. Choose examples where you took responsibility, learned valuable lessons, and applied those learnings to future situations. Show vulnerability while maintaining professionalism.</p>
      
      <h2>Practice and Preparation Strategies</h2>
      <p>Record yourself answering questions, practice with friends or mentors, and time your responses (aim for 2-3 minutes). Create a story bank with detailed notes, but avoid memorizing scripts—authenticity is key to connecting with interviewers.</p>
    `,
    author: {
      name: "Dr. Amanda Foster",
      title: "Interview Coach & Organizational Psychologist",
      avatar: avatar3
    },
    category: "Interview Guide",
    categorySlug: "interview-guide",
    publishedAt: "2024-01-16",
    readTime: "13 min read",
    tags: ["behavioral interviews", "STAR method", "interview preparation", "job interviews"],
    featured: false,
    views: 2567,
    likes: 145
  },
  {
    id: 10,
    title: "Building a Portfolio Career: Thriving in the Gig Economy",
    slug: "building-portfolio-career-thriving-gig-economy",
    excerpt: "Learn how to create a successful portfolio career by combining multiple income streams and leveraging your diverse skills.",
    image: "https://picsum.photos/400/250?random=10",
    content: `
      <p>The traditional career path is evolving. More professionals are embracing portfolio careers—combining multiple roles, projects, and income streams to create a more flexible and fulfilling work life. Here's how to build and thrive in a portfolio career.</p>
      
      <h2>Defining Your Portfolio Career Vision</h2>
      <p>Start by identifying your core skills, passions, and financial goals. A successful portfolio career aligns your various activities with your values and long-term objectives. Consider what combination of work would energize rather than exhaust you.</p>
      
      <h2>Diversifying Your Income Streams</h2>
      <p>Aim for 3-5 different income sources to reduce risk and increase opportunities. These might include consulting, freelancing, part-time employment, passive income from investments or digital products, and project-based work. Diversification provides financial stability and creative fulfillment.</p>
      
      <h2>Time Management and Organization</h2>
      <p>Portfolio careers require exceptional organizational skills. Use project management tools, maintain separate calendars for different roles, and establish clear boundaries between activities. Time-blocking and batch processing similar tasks can significantly improve efficiency.</p>
      
      <h2>Building Your Professional Brand</h2>
      <p>Your personal brand becomes even more critical in a portfolio career. Develop a cohesive narrative that connects your various activities and demonstrates your unique value proposition. Maintain consistent messaging across all platforms and client interactions.</p>
      
      <h2>Financial Planning and Management</h2>
      <p>Irregular income requires careful financial planning. Build an emergency fund covering 6-12 months of expenses, separate business and personal finances, track income and expenses meticulously, and consider working with a financial advisor familiar with freelance income patterns.</p>
      
      <h2>Networking and Relationship Building</h2>
      <p>Your network becomes your net worth in a portfolio career. Maintain relationships across all your professional areas, seek referrals and recommendations, and always deliver exceptional work to build a strong reputation that generates repeat business and new opportunities.</p>
    `,
    author: {
      name: "Rachel Green",
      title: "Portfolio Career Coach & Entrepreneur",
      avatar: avatar4
    },
    category: "Career Tips",
    categorySlug: "career-tips",
    publishedAt: "2024-01-14",
    readTime: "15 min read",
    tags: ["portfolio career", "gig economy", "freelancing", "career planning", "entrepreneurship"],
    featured: false,
    views: 1789,
    likes: 87
  },
  {
    id: 11,
    title: "The Psychology of Workplace Productivity: Science-Based Strategies",
    slug: "psychology-workplace-productivity-science-based-strategies",
    excerpt: "Discover evidence-based techniques to boost your productivity and create sustainable work habits that enhance performance.",
    image: "https://picsum.photos/400/250?random=11",
    content: `
      <p>Productivity isn't just about working harder—it's about understanding how your brain works and creating systems that support peak performance. Recent research in cognitive psychology and neuroscience offers valuable insights for optimizing workplace productivity.</p>
      
      <h2>The Science of Focus and Attention</h2>
      <p>Our brains aren't designed for constant multitasking. Research shows that task-switching can reduce productivity by up to 40%. Implement focused work blocks, eliminate distractions, and use techniques like the Pomodoro Technique to maintain sustained attention.</p>
      
      <h2>Energy Management Over Time Management</h2>
      <p>Managing your energy is more important than managing your time. Identify your natural energy rhythms and schedule demanding tasks during peak hours. Take regular breaks, maintain proper nutrition, and ensure adequate sleep to sustain high performance throughout the day.</p>
      
      <h2>The Power of Habit Formation</h2>
      <p>Habits reduce cognitive load and create automatic behaviors that support productivity. Use the habit loop (cue, routine, reward) to establish positive work patterns. Start small, be consistent, and gradually build complexity as new habits become ingrained.</p>
      
      <h2>Cognitive Load Theory in Practice</h2>
      <p>Your working memory has limited capacity. Reduce cognitive load by organizing information clearly, using external memory aids (notes, calendars, task lists), and breaking complex projects into smaller, manageable components.</p>
      
      <h2>The Role of Environment in Performance</h2>
      <p>Your physical and digital environments significantly impact productivity. Optimize lighting, reduce clutter, organize digital files systematically, and create dedicated spaces for different types of work. Small environmental changes can yield significant productivity gains.</p>
      
      <h2>Motivation and Goal Setting</h2>
      <p>Set SMART goals that align with your values and provide clear direction. Use implementation intentions ("if-then" planning) to bridge the gap between goals and actions. Celebrate small wins to maintain motivation and momentum.</p>
    `,
    author: {
      name: "Dr. Kevin Park",
      title: "Cognitive Psychologist & Productivity Researcher",
      avatar: avatar5
    },
    category: "Professional Development",
    categorySlug: "professional-development",
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    tags: ["productivity", "psychology", "workplace efficiency", "cognitive science", "performance"],
    featured: false,
    views: 2245,
    likes: 134
  },
  {
    id: 12,
    title: "Crafting the Perfect Cover Letter: Templates and Examples for 2024",
    slug: "crafting-perfect-cover-letter-templates-examples-2024",
    excerpt: "Write compelling cover letters that complement your resume and showcase your personality with modern templates and proven strategies.",
    image: "https://picsum.photos/400/250?random=12",
    content: `
      <p>Despite predictions of its demise, the cover letter remains a crucial component of job applications. When done well, it provides context for your resume, demonstrates your communication skills, and shows genuine interest in the position.</p>
      
      <h2>The Modern Cover Letter Structure</h2>
      <p>Keep it concise (3-4 paragraphs, under 400 words) and focused. Start with a compelling opening that mentions the specific role and how you learned about it. Use the body to highlight relevant achievements and demonstrate knowledge of the company. Close with a strong call to action.</p>
      
      <h2>Personalization is Key</h2>
      <p>Generic cover letters are easily spotted and quickly discarded. Research the company culture, recent news, and the hiring manager's background when possible. Reference specific aspects of the role or company that excite you and explain why you're a perfect fit.</p>
      
      <h2>Storytelling Techniques</h2>
      <p>Use your cover letter to tell a story that your resume can't. Explain career transitions, highlight passion projects, or describe how your unique background brings fresh perspective to the role. Make it personal while maintaining professionalism.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Don't simply repeat your resume, use generic templates without customization, focus solely on what you want from the job, or include irrelevant personal information. Avoid clichés like "I'm a people person" and instead provide specific examples.</p>
      
      <h2>Industry-Specific Considerations</h2>
      <p>Different industries have varying expectations for cover letters. Creative fields may appreciate more personality and visual elements, while conservative industries prefer traditional formats. Research industry norms and adjust your approach accordingly.</p>
      
      <h2>Digital Age Adaptations</h2>
      <p>Many applications are now submitted online through ATS systems. Use standard formatting, include keywords from the job description, and save as a PDF to preserve formatting. For email applications, your email body becomes your cover letter.</p>
    `,
    author: {
      name: "Sarah Williams",
      title: "Career Services Director & Resume Writer",
      avatar: avatar6
    },
    category: "Resume Writing",
    categorySlug: "resume-writing",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    tags: ["cover letter", "job applications", "resume writing", "career tools"],
    featured: false,
    views: 1923,
    likes: 98
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