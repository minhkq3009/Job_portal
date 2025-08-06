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