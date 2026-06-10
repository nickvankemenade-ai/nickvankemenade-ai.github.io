export type Project = {
  id: string;
  title: string;
  summary: string;
  status: "published" | "ongoing";
  tags: string[];

  homepageArtifact: {
    type: "image" | "video" | "svg";
    src: string;
  };

  heroArtifact: {
    type: "image" | "video" | "svg";
    src: string;
  };

  artifacts: {
    type: "image" | "video" | "svg";
    src: string;
    caption?: string;
  }[];

  links: {
    paper?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    id: "rtgu",
    title: "RTGU",
    summary: "Novel neural layer architecture exploring temporal computation.",
    status: "published",
    tags: ["architecture", "efficiency"],
    homepageArtifact: {
      type: "image",
      src: "/artifacts/rtgu/image2.png",
    },
    heroArtifact: {
      type: "image",
      src: "/artifacts/rtgu/image2.png",
    },
    artifacts: [
      { type: "image", src: "/artifacts/rtgu/image2.png", caption: "Architecture" },
      { type: "image", src: "/artifacts/rtgu/wk_train.png", caption: "Training comparison" },
      { type: "image", src: "/artifacts/rtgu/wk_val.png", caption: "Validation comparison" },
    ],
    links: {
      paper: "https://example.com",
    },
  },

  {
    id: "cobi",
    title: "COBI",
    summary: "Edge-optimized single-class object detection system.",
    status: "published",
    tags: ["vision", "edge"],
    homepageArtifact: {
      type: "video",
      src: "/artifacts/cobi/field_1.MP4",
    },
    heroArtifact: {
      type: "video",
      src: "/artifacts/cobi/field_2.MP4",
    },
    artifacts: [
      { type: "video", src: "/artifacts/cobi/field_1.MP4", caption: "Short demo" },
      { type: "image", src: "/artifacts/cobi/new_reps.png", caption: "Internal representations" },
    ],
    links: {
      paper: "https://example.com",
    },
  },

  {
    id: "ae",
    title: "Autoencoder Research",
    summary: "Investigating latent structure formation in representation learning.",
    status: "ongoing",
    tags: ["representation-learning"],
    homepageArtifact: {
      type: "svg",
      src: "/artifacts/ae/diffusion_trajectory_pca.svg",
    },
    heroArtifact: {
      type: "svg",
      src: "/artifacts/ae/diffusion_trajectory_pca.svg",
    },
    artifacts: [
      {
        type: "svg",
        src: "/artifacts/ae/diffusion_trajectory_pca.svg",
        caption: "Latent trajectory (PCA)",
      },
    ],
    links: {},
  },
];