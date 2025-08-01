// src/data/mockJobs.js
export const mockJobs = [
  {
    id: 1,
    company: "Dribbble",
    location: "California, USA",
    title: "Senior UX Designer",
    salary: "$80k-120k/year",
    logoText: "D",
    logo: "https://cdn.dribbble.com/assets/favicon-b38525134603b4b47e2d7dc2d81772cb1e7c8f924d9e934d1c6169af3e221b80.ico",
    topLabel: "Featured",
    topVariant: "danger",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    timePosted: "2 days ago",
    description: "We're looking for a Senior UX Designer to lead user experience initiatives.",
    skills: ["Figma", "Sketch", "User Research", "Prototyping"]
  },
  {
    id: 2,
    company: "Google",
    location: "Mountain View, CA",
    title: "Frontend Engineer",
    salary: "$120k-180k/year",
    logoText: "G",
    logo: "https://www.google.com/favicon.ico",
    topLabel: "Urgent",
    topVariant: "warning",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    timePosted: "1 day ago",
    description: "Join our team to build the next generation of web applications.",
    skills: ["React", "TypeScript", "JavaScript", "CSS"]
  },
  {
    id: 3,
    company: "Meta",
    location: "Menlo Park, CA",
    title: "Backend Developer",
    salary: "$110k-160k/year",
    logoText: "M",
    topLabel: "Hot",
    topVariant: "danger",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    timePosted: "3 days ago",
    description: "Build scalable backend systems for billions of users.",
    skills: ["Python", "Django", "PostgreSQL", "AWS"]
  },
  {
    id: 4,
    company: "Netflix",
    location: "Los Gatos, CA",
    title: "Data Scientist",
    salary: "$130k-200k/year",
    logoText: "N",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    timePosted: "5 days ago",
    description: "Analyze data to improve user experience and content recommendations.",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"]
  },
  {
    id: 5,
    company: "Spotify",
    location: "New York, NY",
    title: "Mobile Developer",
    salary: "$100k-150k/year",
    logoText: "S",
    typeLabel: "Contract",
    typeVariant: "success",
    timePosted: "1 week ago",
    description: "Develop mobile applications for iOS and Android platforms.",
    skills: ["Swift", "Kotlin", "React Native", "Mobile UI"]
  },
  {
    id: 6,
    company: "Airbnb",
    location: "San Francisco, CA",
    title: "Product Manager",
    salary: "$140k-220k/year",
    logoText: "A",
    topLabel: "Featured",
    topVariant: "danger",
    typeLabel: "Full-Time",
    typeVariant: "primary",
    timePosted: "4 days ago",
    description: "Lead product strategy and development for our core platform.",
    skills: ["Product Strategy", "Analytics", "Agile", "Leadership"]
  }
];

export const jobCategories = [
  {
    id: 1,
    name: "Technology",
    count: 1250,
    icon: "💻",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    id: 2,
    name: "Design",
    count: 890,
    icon: "🎨",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    id: 3,
    name: "Marketing",
    count: 567,
    icon: "📈",
    color: "bg-green-50 text-green-600 border-green-200"
  },
  {
    id: 4,
    name: "Sales",
    count: 432,
    icon: "💼",
    color: "bg-orange-50 text-orange-600 border-orange-200"
  },
  {
    id: 5,
    name: "Finance",
    count: 324,
    icon: "💰",
    color: "bg-yellow-50 text-yellow-600 border-yellow-200"
  },
  {
    id: 6,
    name: "Healthcare",
    count: 789,
    icon: "🏥",
    color: "bg-red-50 text-red-600 border-red-200"
  },
  {
    id: 7,
    name: "Education",
    count: 445,
    icon: "📚",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200"
  },
  {
    id: 8,
    name: "Remote",
    count: 1100,
    icon: "🌍",
    color: "bg-teal-50 text-teal-600 border-teal-200"
  }
];

export const trustedCompanies = [
  {
    id: 1,
    name: "Google",
    logo: "https://www.google.com/favicon.ico"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico"
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://www.apple.com/favicon.ico"
  },
  {
    id: 4,
    name: "Netflix",
    logo: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
  },
  {
    id: 6,
    name: "Amazon",
    logo: "https://www.amazon.com/favicon.ico"
  }
];

export const jobStats = [
  {
    id: 1,
    number: "50,000+",
    label: "Jobs Available",
    icon: "💼"
  },
  {
    id: 2,
    number: "12,000+",
    label: "Companies",
    icon: "🏢"
  },
  {
    id: 3,
    number: "100,000+",
    label: "Job Seekers",
    icon: "👥"
  },
  {
    id: 4,
    number: "25,000+",
    label: "Success Stories",
    icon: "✅"
  }
];
