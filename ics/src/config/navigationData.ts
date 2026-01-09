export interface SubMenuItem {
  label: string;
  href: string;
}

export interface SubMenuSection {
  title?: string;
  items: SubMenuItem[];
}

export interface MenuItem {
  label: string;
  href: string;
  sections?: SubMenuSection[];
}

export const navigationData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Community and Partners",
    href: "/community",
    sections: [
      {
        items: [
          { label: "Industry Partners", href: "/community#industry-partners" },
          { label: "Government & Public Sector Partners", href: "/community#gov-partners" },
          { label: "Academic & Research Partners", href: "/community#academic-partners" },
          { label: "Community Engagement", href: "/community#engagement" },
          { label: "Student & Alumni Partnerships", href: "/community#student-partners" },
          { label: "International Partnerships", href: "/community#international" },
          { label: "Innovation & Entrepreneurship Ecosystem", href: "/community#innovation" },
          { label: "Memorandums of Understanding (MoUs)", href: "/community#mous" },
          { label: "Corporate Training & Workforce Development", href: "/community#corporate-training" },
          { label: "Social Impact & Sustainability Partners", href: "/community#social-impact" },
        ]
      }
    ],
  },
  {
    label: "Open Data",
    href: "/open-data",
    sections: [
      {
        items: [
          { label: "Open Data Portal", href: "/open-data#portal" },
          { label: "Geographic Data", href: "/open-data#geographic" },
          { label: "Open Data Policy", href: "/open-data#policy" },
          { label: "Data Proposal / Request", href: "/open-data#request" },
          { label: "Data Standards & Formats", href: "/open-data#standards" },
          { label: "Data Quality & Governance", href: "/open-data#quality" },
          { label: "Usage Terms & Licensing", href: "/open-data#terms" },
          { label: "National Open Data Integration", href: "/open-data#national" },
          { label: "Feedback & Improvement", href: "/open-data#feedback" },
        ]
      }
    ],
  },
  {
    label: "Digital Participation",
    href: "/digital-participation",
    sections: [
      {
        items: [
          { label: "Participate Digitally", href: "/digital-participation#participate" },
          { label: "E-Participation", href: "/digital-participation#e-participation" },
          { label: "Contact Senior Management", href: "/digital-participation#contact" },
          { label: "Customer Satisfaction Survey", href: "/digital-participation#survey" },
          { label: "E-Participation Policy", href: "/digital-participation#policy" },
          { label: "Customer Satisfaction Survey Results", href: "/digital-participation#results" },
          { label: "Sharik.ae", href: "/digital-participation#sharik" },
          { label: "Research and Reports", href: "/digital-participation#research" },
        ]
      }
    ],
  },
  {
    label: "Services",
    href: "/services",
    sections: [
      {
        items: [
          { label: "Services Index", href: "/services#index" },
          { label: "Priority Services", href: "/services#priority" },
          { label: "Academic Services", href: "/services#academic" },
          { label: "Student Services", href: "/services#student" },
          { label: "Library Services", href: "/services#library" },
          { label: "Career Development and Professional Services", href: "/services#career" },
        ]
      }
    ],
  },
  {
    label: "Academic Affairs",
    href: "/academics",
    sections: [
      {
        title: "Colleges",
        items: [
          { label: "ICS Abu Dhabi (Bani Yas)", href: "/academics/colleges#abu-dhabi" },
          { label: "ICS Al Ain", href: "/academics/colleges#al-ain" },
          { label: "ICS Al Dhafra", href: "/academics/colleges#al-dhafra" },
          { label: "ICS Dubai", href: "/academics/colleges#dubai" },
          { label: "ICS Fujairah", href: "/academics/colleges#fujairah" },
          { label: "ICS Ras Al Khaimah", href: "/academics/colleges#ras-al-khaimah" },
          { label: "ICS Sharjah", href: "/academics/colleges#sharjah" },
        ],
      },
      {
        title: "Acceptance",
        items: [
          { label: "Admission Requirements", href: "/academics/acceptance#requirements" },
          { label: "Open Day", href: "/academics/acceptance#open-day" },
          { label: "Frequently Asked Questions", href: "/academics/acceptance#faq" },
          { label: "Information for Applicants", href: "/academics/acceptance#applicants" },
        ],
      },
      {
        title: "Programs",
        items: [
          { label: "Applied Media", href: "/academics/programs#applied-media" },
          { label: "Business Administration", href: "/academics/programs#business" },
          { label: "Computer Science and Information", href: "/academics/programs#cs" },
          { label: "Education", href: "/academics/programs#education" },
          { label: "Engineering and Science Technology", href: "/academics/programs#engineering" },
          { label: "Health Sciences", href: "/academics/programs#health" },
        ],
      },
      {
        title: "Libraries",
        items: [
          { label: "About ICS Libraries", href: "/academics/libraries#about" },
          { label: "Databases", href: "/academics/libraries#databases" },
          { label: "Interlibrary Borrowing", href: "/academics/libraries#borrowing" },
          { label: "Working Hours and Staff Directory", href: "/academics/libraries#hours" },
          { label: "Request an Article", href: "/academics/libraries#request" },
          { label: "My Account", href: "/academics/libraries#account" },
        ],
      },
    ],
  },
  {
    label: "Who Are We",
    href: "/about",
    sections: [
      {
        title: "Our Community",
        items: [
          { label: "Information for Parents", href: "/about/community#parents" },
          { label: "Employees", href: "/about/community#employees" },
          { label: "Graduates", href: "/about/community#graduates" },
          { label: "Current Students", href: "/about/community#students" },
          { label: "New Students", href: "/about/community#new-students" },
          { label: "Business and Industry Sectors", href: "/about/community#business" },
          { label: "Suppliers", href: "/about/community#suppliers" },
        ],
      },
      {
        title: "Media Center",
        items: [
          { label: "College News", href: "/about/media#news" },
          { label: "Events", href: "/about/media#events" },
          { label: "Video Gallery", href: "/about/media#videos" },
          { label: "Photo Gallery", href: "/about/media#photos" },
          { label: "Social Media", href: "/about/media#social" },
        ],
      },
      {
        title: "Who Are We",
        items: [
          { label: "Leadership and Excellence", href: "/about#leadership" },
          { label: "Partnerships", href: "/about#partnerships" },
          { label: "Initiatives", href: "/about#initiatives" },
          { label: "Sustainability", href: "/about#sustainability" },
          { label: "Strategy", href: "/about#strategy" },
        ],
      },
      {
        title: "Leaders",
        items: [
          { label: "Board of Trustees", href: "/about/leaders#board" },
          { label: "Message from the President", href: "/about/leaders#president" },
          { label: "Message from the Director", href: "/about/leaders#director" },
          { label: "Top Leadership", href: "/about/leaders#top" },
          { label: "Academic Leaders", href: "/about/leaders#academic" },
        ],
      },
    ],
  },
];
