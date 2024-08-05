import { useEffect, useState } from "react";

export const useNavList = (showSignUp) => {
  console.log(showSignUp);
  const [navList, setNavList] = useState([
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Rooms",
    },
    {   
      id: 5,
      path: "/page",
      text: "Page",
      subItems: [
        {
          id: 51,
          path: "/booking",
          text: "Booking",
        },
        {
          id: 52,
          path: "/team",
          text: "Our Team",
        },
        {
          id: 53,
          path: "/testimonial",
          text: "Testimonial",
        },
      ],
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
    {
      id: 123,
      path: "/signup",
      text: "SignUp",
    },
  ]);

  useEffect(() => {
    setNavList((prevNavList) => {
      return prevNavList.map((item) => {
        if (item.id === 123) {
          return {
            ...item,
            text: showSignUp ? "Logout" : "SignUp"
          };
        }
        if (item.id === 4) {
          return {
            ...item,
            path: showSignUp ? "/rooms" : "/signup",
          };
        }
        return item;
      });
    });
  }, [showSignUp]);

  return { navList };
};


export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    link: "https://www.facebook.com/yourprofile"
  },
  {
    icon: <i className="fab fa-twitter"></i>,
    link: "https://twitter.com/yourprofile"
  },
  {
    icon: <i className="fab fa-instagram"></i>,
    link: "https://www.instagram.com/ram.xo_efx/?igsh=MW5jc2x6YXZiMnVsdg%3D%3D"
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/in/yourprofile"
  },
  {
    icon: <i className="fab fa-youtube"></i>,
    link: "https://www.youtube.com/channel/yourchannel"
  }
];


export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Naveen",
    designation: "Trichy",
  },
  {
    image: "../assets/img/rajesh.jpg",
    name: "Ashok",
    designation: "Chennai",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Rama Krishnan",
    designation: "Kanchipuram",
  },
  {
    image: "../assets/img/ram proo.jpg",
    name: "Tharun",
    designation: "Thiruvallur",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
  header: "Location",
  iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131228785!2d80.04419819043571!3d13.047473316234447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722848861193!5m2!1sen!2sin"

  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "127/b Kanchipuram",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+91 63791 90586",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "ramakrishnan@gmail.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "RamBookings.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "Ramrooms@gmail.com",
  },  
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "ramakrishnanramakrishnan906906@gmail.com",
  },
];
export const testimonial = [
  {
    description:
      "I Am Glad To Say That i have Rent A Room In A Ram Rooms . It Was So Awesome And Peaceful",
    name: "Sujatha",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "The room was immaculatel very comfortable. The housekeeping staff job maintaining the space throughout our stay",
    name: "Tharun",
    profession: "Lawyer",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "The room featured modern décor and was well-appointed with a luxurious bathroom and a spacious workspace",
    name: "Thamizharasan",
    profession: "Manager",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "$110/night",
    name: "Junior Suit",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  },
  {
    img: "../assets/img/room-2.jpg",
    price: "$110/night",
    name: "Executive Suite",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "$110/night",
    name: "Super Deluxe",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  },
];