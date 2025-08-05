export interface ProjectContent {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  overview: {
    description: string[];
    keyFeatures: string[];
  };
  architecture?: {
    img: string;
    components: Array<{
      name: string;
      description: string;
    }>;
  };
  technicalImplementation: {
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
  challenges: Array<{
    title: string;
    description: string;
  }>;
  futureEnhancements: string[];
}

export const kdtransfer: ProjectContent = {
 id: "kdtransfer",
 title: "KDTransfer - P2P File Transfer",
 subtitle: "End-to-end encrypted peer-to-peer file transfer system with connection racing",
 tags: ["go", "p2p", "tcp", "webrtc", "e2ee", "binary-protocol", "goroutines", "networking"],
 links: {
   github: "https://github.com/KD0S-02/KDTransfer",
   demo: "#",
   docs: "#"
 },
 overview: {
   description: [
     "KDTransfer is a distributed peer-to-peer file transfer system featuring connection racing between TCP (LAN) and WebRTC (WAN), end-to-end encryption, and a custom binary protocol. Uses out-of-band session codes and passphrases for secure peer discovery.",
     "Built from scratch using Go's networking stack with automatic network interface discovery. Features streaming file transfer with transport-specific chunking and concurrent multi-file receiving capabilities. Achieves ~17 MB/s on local networks."
   ],
   keyFeatures: [
     "8-character session codes for secure peer discovery",
     "Out-of-band passphrase encryption (in development)",
     "Automatic network interface discovery",
     "Connection racing: TCP for LAN, WebRTC for WAN",
     "Custom binary protocol with minimal overhead",
     "Concurrent multi-file receiving with sync.Map"
   ]
 },
 architecture: {
   img: "/images/projects/kdtransfer_architecture.png",
   components: [
     {
       name: "CLI Client",
       description: "Auto-discovers all network interfaces, registers with signaling server, and performs connection racing between TCP direct and WebRTC data channels"
     },
     {
       name: "Signaling Server",
       description: "Generates 8-char session codes, stores encrypted peer info, handles mutual address exchange between sender and receiver"
     },
     {
       name: "Encryption Layer (In Development)",
       description: "PBKDF2 key derivation from passphrase, AES-256-GCM for both address info and file data encryption"
     }
   ]
 },
 technicalImplementation: {
   sections: [
     {
       title: "Peer Discovery & Security",
       items: [
         "8-character alphanumeric session codes",
         "Out-of-band passphrase exchange",
         "Encrypted address info storage on server",
         "Automatic network interface enumeration"
       ]
     },
     {
       title: "Connection Racing (WebRTC in Development)",
       items: [
         "Pion WebRTC library for data channels",
         "STUN server integration for public IP discovery",
         "Parallel TCP and WebRTC connection attempts",
         "Transport-specific chunking (512KB TCP, 64KB WebRTC)"
       ]
     }
   ]
 },
 challenges: [
   {
     title: "Secure Peer Discovery Design",
     description: "Implemented session-based peer discovery where receivers get 8-character codes from signaling server. Senders use codes + out-of-band passphrases to decrypt peer address info, enabling secure connection establishment."
   },
   {
     title: "Network Interface Auto-Discovery",
     description: "Built automatic detection of all available network interfaces (ethernet, WiFi, etc.) and registers them with signaling server, allowing senders to attempt direct connections across multiple network paths."
   },
   {
     title: "WebRTC Integration & Connection Racing",
     description: "Developing Pion WebRTC integration with STUN servers for public IP discovery. Connection racing attempts both TCP direct (LAN) and WebRTC data channels (WAN) simultaneously, using the fastest successful connection."
   }
 ],
 futureEnhancements: [
   "Complete WebRTC data channel implementation",
   "Passphrase-based encryption for all data",
   "Browser client with WebSocket signaling",
   "TURN server support for restricted networks",
   "Resumable transfers with chunk acknowledgment",
   "GUI application with drag-and-drop interface"
 ]
};

export const kdchat: ProjectContent = {
  id: "kdchat",
  title: "KDChat - Group chat platform",
  subtitle: "Full-stack group chat with microservices architecture",
  tags: ["java", "spring-boot", "typescript", "react", "websockets", "microservices"],
  links: {
    github: "https://github.com/KD0S-02/KDChat",
    demo: "#"
  },
  overview: {
    description: [
      "A full-stack group chat application built with microservices architecture, featuring real-time messaging capabilities and persistent chat history.",
      "The system separates concerns across multiple services: user authentication, chat handling, and message persistence, demonstrating scalable backend design patterns."
    ],
    keyFeatures: [
      "Real-time group messaging",
      "Multi-room support",
      "JWT-based authentication",
      "Microservices architecture"
    ]
  },
  architecture: {
    img: "/images/projects/kdchat_architecture.png",
    components: [
      {
        name: "KDChat Frontend",
        description: "TypeScript/React interface with real-time WebSocket integration"
      },
      {
        name: "User Auth Service",
        description: "JWT-based authentication and user management"
      },
      {
        name: "Chat Service",
        description: "WebSocket handling and real-time communication"
      },
      {
        name: "Message Service",
        description: "Message persistence and retrieval operations"
      }
    ]
  },
  technicalImplementation: {
    sections: [
      {
        title: "Frontend (TypeScript/React)",
        items: [
          "Real-time WebSocket connections",
          "State management for chat rooms",
          "Responsive UI with modern React patterns",
          "Message history pagination"
        ]
      },
      {
        title: "Backend Services (Java/Spring Boot)",
        items: [
          "RESTful API design",
          "JWT token validation",
          "Database integration with JPA",
          "Inter-service communication"
        ]
      }
    ]
  },
  challenges: [
    {
      title: "Service Communication",
      description: "Implemented proper API contracts between microservices with error handling and fallback mechanisms for service unavailability."
    },
    {
      title: "WebSocket State Management",
      description: "Managed WebSocket connections across multiple chat rooms while ensuring proper cleanup and message delivery guarantees."
    },
    {
      title: "Authentication Flow",
      description: "Integrated JWT authentication across multiple services while maintaining stateless design and secure token validation."
    }
  ],
  futureEnhancements: [
    "Message encryption for privacy",
    "File sharing capabilities",
    "Push notifications",
    "Mobile app development",
    "Kubernetes deployment"
  ]
};

export const projectIds: string[] = ["kdtransfer", "kdchat"] as const;

export const featuredIds: string[] = ["kdtransfer", "kdchat"] as const;


export const projectsData: Record<string, ProjectContent> = {
  kdtransfer,
  kdchat
};
