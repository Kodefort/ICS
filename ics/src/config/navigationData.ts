export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

export const navigationData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    subItems: [
      { label: "Overview", href: "/#overview" },
      { label: "Key Highlights", href: "/#highlights" },
      { label: "Upcoming Batches", href: "/#batches" },
      { label: "Success Stories", href: "/#stories" },
      { label: "Announcements", href: "/#announcements" },
    ],
  },
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "Our Story", href: "/about#story" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Leadership Team", href: "/about#leadership" },
      { label: "Faculty & Mentors", href: "/about#faculty" },
      { label: "Infrastructure", href: "/about#infrastructure" },
      { label: "Partnerships", href: "/about#partnerships" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Course Offerings", href: "/services#courses" },
      { label: "Corporate Training", href: "/services#corporate-training" },
      { label: "Career Counseling", href: "/services#counseling" },
      { label: "Internship Programs", href: "/services#internships" },
      { label: "Placement Assistance", href: "/services#placement" },
      { label: "Workshops & Bootcamps", href: "/services#workshops" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    subItems: [
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Learning Paths", href: "/academics#learning-paths" },
      { label: "Programming Languages", href: "/academics#languages" },
      { label: "Projects & Labs", href: "/academics#projects" },
      { label: "Assessments", href: "/academics#assessments" },
      { label: "Certifications", href: "/academics#certifications" },
      { label: "Academic Calendar", href: "/academics#calendar" },
    ],
  },
  {
    label: "Community",
    href: "/community",
    subItems: [
      { label: "Student Community", href: "/community#students" },
      { label: "Alumni Network", href: "/community#alumni" },
      { label: "Events & Meetups", href: "/community#events" },
      { label: "Hackathons", href: "/community#hackathons" },
      { label: "Forums & Discussions", href: "/community#forums" },
      { label: "Blogs", href: "/community#blogs" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    subItems: [
      { label: "Get in Touch", href: "/contact#get-in-touch" },
      { label: "Admissions Enquiry", href: "/contact#admissions" },
      { label: "Visit Campus", href: "/contact#visit" },
      { label: "Support & Helpdesk", href: "/contact#support" },
      { label: "FAQs", href: "/contact#faqs" },
      { label: "Feedback", href: "/contact#feedback" },
    ],
  },
];
