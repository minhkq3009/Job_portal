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
  { id: 1, name: "Career Tips", slug: "career-tips", count: 24 },
  { id: 2, name: "Interview Guide", slug: "interview-guide", count: 18 },
  { id: 3, name: "Resume Writing", slug: "resume-writing", count: 15 },
  { id: 4, name: "Industry Insights", slug: "industry-insights", count: 21 },
  { id: 5, name: "Remote Work", slug: "remote-work", count: 12 },
  { id: 6, name: "Salary Negotiation", slug: "salary-negotiation", count: 9 },
  { id: 7, name: "Professional Development", slug: "professional-development", count: 16 }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Landing Your Dream Job in 2024",
    slug: "10-essential-tips-landing-dream-job-2024",
    excerpt: "Discover the most effective strategies to stand out in today's competitive job market and secure the position you've always wanted.",
    content: `
      <p>The job market in 2024 is more competitive than ever, but with the right strategies, you can position yourself as the ideal candidate for your dream job. Here are 10 essential tips that will give you a significant advantage.</p>
      
      <h2>1. Optimize Your LinkedIn Profile</h2>
      <p>Your LinkedIn profile is often the first impression recruiters have of you. Make sure your headline is compelling, your summary tells your professional story, and your experience section highlights your achievements with quantifiable results.</p>
      
      <h2>2. Tailor Your Resume for Each Application</h2>
      <p>Generic resumes don't work anymore. Customize your resume for each position by incorporating keywords from the job description and highlighting relevant experiences that match the role requirements.</p>
      
      <h2>3. Build a Strong Personal Brand</h2>
      <p>Develop a consistent professional image across all platforms. Share industry insights, engage with thought leaders, and showcase your expertise through content creation.</p>
      
      <h2>4. Network Strategically</h2>
      <p>Networking isn't just about collecting contacts—it's about building meaningful relationships. Attend industry events, join professional associations, and engage with peers in your field.</p>
      
      <h2>5. Prepare for Modern Interview Formats</h2>
      <p>Be ready for video interviews, panel discussions, and practical assessments. Practice your responses to common questions and prepare examples that demonstrate your problem-solving abilities.</p>
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
  }
];

export const relatedPosts = (currentPostId, category, limit = 3) => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
};