export interface Project {
    id: number;
    title: string;
    link: string;
    portfolioLink?: string;
    appStore: string;
    playStore: string;
    description: string;
    problem: string;
    tech: string[];
    impact: string;
    image: string;
}

export const FEATURED_PROJECTS: Project[] = [
    {
        id: 1,
        image: "https://i.postimg.cc/90Lb2S2F/Dry-X-Laundry-Service-App.png",
        title: "DryX Laundry",
        link: "https://dryx.ae/",
        portfolioLink: "https://www.royex.ae/portfolio/dryx-laundry-service/",
        appStore: "https://apps.apple.com/ae/app/dryx/id6743483769",
        playStore: "https://play.google.com/store/apps/details?id=net.royex.dryx",
        description: "Premium dry cleaning & laundry service booking app with map-based location tracking.",
        problem: "Users lacked a seamless, real-time way to book laundry services with live tracking and secure payments.",
        impact: "Deployed to both iOS & Android. Integrated Magnati Secure Payment Gateway with Apple Pay and dynamic Wallet System.",
        tech: ["Flutter", "Magnati Payment", "Apple Pay", "Google Maps SDK", "Wallet System"],
    },
    {
        id: 2,
        image: "https://i.postimg.cc/qM8n2SSM/Off-The-Beaten-Track-UAE-App.png",
        title: "OffTheBeatenTrack – UAE",
        link: "https://www.offthebeatentrackuae.com/",
        portfolioLink: "https://www.royex.ae/portfolio/off-the-beaten-track-mobile-app/",
        appStore: "https://apps.apple.com/us/app/offthebeatentrack-uae/id1665161074",
        playStore: "https://play.google.com/store/apps/details?id=net.royex.otbt",
        description: "Location-based event management application for Dubai with Stripe-gated access control.",
        problem: "200+ Dubai events needed a single, map-centric platform with subscription-based premium access.",
        impact: "200+ events visualised on Google Map. Stripe subscription-based access control fully integrated.",
        tech: ["Flutter", "Google Maps SDK", "Google Pay", "Apple Pay", "Firebase", "GetX"],
    },
    {
        id: 3,
        image: "https://i.postimg.cc/SK5jBfHs/Cabby-Ride-Hailing-App.png",
        title: "Cabby – Ride Hailing App",
        link: "https://cabby.tech/index.html",
        portfolioLink: "https://www.royex.ae/portfolio/cabby-ride-hailing-app/",
        appStore: "https://apps.apple.com/us/app/cabby-rides/id6744155831",
        playStore: "https://play.google.com/store/apps/details?id=com.cabby.customer",
        description: "Real-time ride tracking platform with dedicated customer and driver-side applications.",
        problem: "Riders and drivers needed a unified, reliable GPS-based tracking experience in real time.",
        impact: "Engineered both customer and driver apps. Implemented real-time Google GPS for precise ride tracking.",
        tech: ["Flutter", "Google Maps GPS", "Real-time DB", "Firebase", "Stripe"],
    }, {
        id: 4,
        image: "https://i.postimg.cc/WzH0f0w2/Mumbrite-App.png",
        title: "Mumbrite",
        link: "https://mumbrite.com/",
        portfolioLink: "https://mumbrite.com/",
        appStore: "https://apps.apple.com/gb/app/blackmums/id6478812051",
        playStore: "https://play.google.com/store/apps/details?id=com.app.blackmums",
        description: "Mumbrite is a groundbreaking digital platform dedicated to connecting and empowering Black mothers.",
        problem: "Black mothers needed a dedicated space to share experiences, seek advice, and build supportive connections.",
        impact: "Created a safe, community-driven platform fostering connection and support among Black mothers.",
        tech: ["Agora RTC", "Video Calling", "GraphQL", "Firebase Auth", "Provider"],
    },
    {
        id: 5,
        image: "https://i.postimg.cc/jdJcmM9V/Motion-View-App.png",
        title: "Motion View App",
        link: "https://motionview.com.bd/",
        appStore: "https://apps.apple.com/us/app/motion-view/id6470707780",
        playStore: "https://play.google.com/store/apps/details?id=bd.com.motionview.motionview",
        description: "Full-featured e-commerce application serving 10K+ active users with local payment gateway support.",
        problem: "Business needed a robust, scalable e-commerce app supporting local BD payment gateways.",
        impact: "40+ REST APIs across 35+ screens. Firebase Google & Facebook Auth. 10K+ users in PlayStore.",
        tech: ["Flutter", "Firebase Auth", "bKash", "SSLCOMMERZ", "REST APIs (40+)"],
    }
];
export const OTHER_PROJECTS: Project[] = [
    {
        id: 1,
        image: "https://i.postimg.cc/sxFn0djk/polaris-expo-2025.png",
        title: "Polaris Expo",
        link: "https://polarisexpo.com/",
        portfolioLink: "https://www.royex.ae/portfolio/polaris-expo-bni-global-event-platform/",
        appStore: "https://apps.apple.com/au/app/polaris-expo/id6751562570",
        playStore: "https://play.google.com/store/apps/details?id=ae.royex.polaris_expo",
        description: "Premium dry cleaning & laundry service booking app with map-based location tracking.",
        problem: "Users lacked a seamless, real-time way to book laundry services with live tracking and secure payments.",
        impact: "Integrated QR code scanning for service verification. Push notifications for booking updates.",
        tech: ["Flutter", "Push Notifications", "QR Code Integration", "GetX"],
    },
    {
        id: 2,
        image: "https://i.postimg.cc/9QNYn5J5/Iraq-Shopping-App.png",
        title: "Iraq Shopping - Classified Marketplace App",
        link: "https://www.royex.ae/portfolio/iraq-shopping-classified-marketplace-app/",
        portfolioLink: "https://www.royex.ae/portfolio/iraq-shopping-classified-marketplace-app/",
        appStore: "https://apps.apple.com/us/app/iraq-classifieds-shopping/id6744931732",
        playStore: "https://play.google.com/store/apps/details?id=com.royex.iraqshopping",
        description: "A versatile marketplace app that connects buyers and sellers across various categories.",
        problem: "Users needed a seamless, real-time way to browse, search, and purchase items across multiple categories with secure payments.",
        impact: "Implemented in-app messaging for buyer-seller communication. Stripe integration for secure payments.",
        tech: ["In-app messaging", "Push Notifications", "Stripe", "Pagination"],
    },
    {
        id: 3,
        image: "https://i.postimg.cc/BQ5Fd8B0/Retailer-Motion-View-App.png",
        title: "Retailer - Motion View",
        link: "https://motionview.com.bd/",
        appStore: "https://apps.apple.com/us/app/retailer-motion-view/id6470738348",
        playStore: "http://play.google.com/store/apps/details?id=bd.com.motionview.retailer",
        description: "Any Retailer can connect to the Biggest Gadget Seller Motion View, Can Explore the Latest and biggest Collection of Smart Gadgets",
        problem: "Retailers needed a way to connect with the motion view and explore the latest collection of smart gadgets.",
        impact: "Retailers can now connect with the motion view and maintain their inventory efficiently.",
        tech: ["Flutter", "REST APIs", "Firebase Auth", "GetX"],
    },
    {
        id: 4,
        image: "https://i.postimg.cc/CLfnSXwY/Noa-Market-App.png",
        title: "noa.market",
        link: "https://noa.market/",
        portfolioLink: "https://www.royex.ae/portfolio/noa-market/",
        appStore: "https://apps.apple.com/us/app/noa-market/id1629859129",
        playStore: "",
        description: "Real-time location-based e-commerce app integrated with supplier-side application and Stripe.",
        problem: "Buyers and suppliers needed a location-aware commerce experience with frictionless checkout.",
        impact: "Fully integrated with supplier application. Stripe payment gateway implemented end-to-end.",
        tech: ["Flutter", "Stripe", "Firebase", "REST APIs", "Push Notifications"],
    },
    {
        id: 5,
        image: "https://i.postimg.cc/3wYYVVRZ/Linkify-App.png",
        title: "Linkify - General E-Commerce App",
        link: "https://www.royex.ae/portfolio/linkify-general-e-commerce-shopping-app/",
        portfolioLink: "https://www.royex.ae/portfolio/linkify-general-e-commerce-shopping-app/",
        appStore: "",
        playStore: "",
        description: "Linkify, a user-friendly e-commerce app designed to provide seamless shopping across multiple categories.",
        problem: "Users needed a seamless, real-time way to browse, search, and purchase items across multiple categories with secure payments.",
        impact: "Implemented in-app messaging for buyer-seller communication. Stripe integration for secure payments.",
        tech: ["Flutter", "REST APIs", "Firebase Auth", "GetX"],
    },
    {
        id: 6,
        image: "https://i.postimg.cc/PrdGtYH0/Iconic-Collectors.png",
        title: "Iconic Collectors",
        link: "https://iconiccollectors.com/",
        portfolioLink: "https://www.royex.ae/portfolio/iconic-collectors-memorabilia-marketplace-platform/",
        appStore: "",
        playStore: "",
        description: "Iconic Collectors as a premium digital platform for rare, authenticated memorabilia.",
        problem: "The challenge was to create a platform that not only showcases rare items but also ensures their authenticity and provides a secure, trustworthy environment for collectors and investors.",
        impact: "The solution caters to collectors, investors, and enthusiasts seeking trusted access to exclusive collectibles through a seamless and secure experience.",
        tech: ["Flutter", "REST APIs", "Firebase Auth", "ASP .NET Backend"],
    }
];