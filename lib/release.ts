export interface Release {
  version: string;
  date: string;
  filename: string;
  size: string;
  platform: string;
  downloadUrl: string;
  isLatest: boolean;
  changelog?: string[];
}

export const RELEASE_METADATA = {
  version: "Beta v1.0.1",
  platform: "Windows x64",
  filename: "MLTE-beta-v1.0.1.zip",
  supportUrl: "https://buymeacoffee.com/irvantaufik28",
  lastUpdated: "August 2026",
};

export function getReleases(): Release[] {
  const list: Release[] = [];

  // Map environment variables up to 10 releases statically.
  // Added an 'id' property to each configuration group so we can dynamically sort them.
  const envMap = [
    {
      id: 1,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_1,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_1,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_1,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_1,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_1,
    },
    {
      id: 2,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_2,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_2,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_2,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_2,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_2,
    },
    {
      id: 3,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_3,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_3,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_3,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_3,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_3,
    },
    {
      id: 4,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_4,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_4,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_4,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_4,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_4,
    },
    {
      id: 5,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_5,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_5,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_5,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_5,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_5,
    },
    {
      id: 6,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_6,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_6,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_6,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_6,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_6,
    },
    {
      id: 7,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_7,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_7,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_7,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_7,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_7,
    },
    {
      id: 8,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_8,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_8,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_8,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_8,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_8,
    },
    {
      id: 9,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_9,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_9,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_9,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_9,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_9,
    },
    {
      id: 10,
      link: process.env.NEXT_PUBLIC_DOWNLOAD_LINK_10,
      name: process.env.NEXT_PUBLIC_DOWNLOAD_NAME_10,
      date: process.env.NEXT_PUBLIC_DOWNLOAD_DATE_10,
      size: process.env.NEXT_PUBLIC_DOWNLOAD_SIZE_10,
      file: process.env.NEXT_PUBLIC_DOWNLOAD_FILE_10,
    }
  ];

  // Filter active releases (only ones with defined download link) 
  // and sort them by ID in descending order (Largest number/ID first!)
  const activeReleases = envMap
    .filter(item => !!item.link)
    .sort((a, b) => b.id - a.id);

  activeReleases.forEach((item, index) => {
    list.push({
      version: item.name || `Beta v1.0.${item.id}`,
      date: item.date || "August 2026",
      filename: item.file || `MLTE-package-${item.id}.zip`,
      size: item.size || "4.0 MB",
      platform: "Windows x64",
      downloadUrl: item.link as string,
      isLatest: index === 0, // The item with the largest ID is treated as the latest recommended release!
    });
  });

  // Fallback defaults if no env is set
  if (list.length === 0) {
    return [
      {
        version: "Beta v1.0.1",
        date: "August 28, 2026",
        filename: "MLTE-beta-v1.0.1.zip",
        size: "4.2 MB",
        platform: "Windows x64",
        downloadUrl: "https://www.mediafire.com/file/placeholder-latest/MLTE-beta-v1.0.1.zip/file",
        isLatest: true,
      },
      {
        version: "Beta v1.0.0",
        date: "July 15, 2026",
        filename: "MLTE-beta-v1.0.0.zip",
        size: "3.9 MB",
        platform: "Windows x64",
        downloadUrl: "https://www.mediafire.com/file/placeholder-old/MLTE-beta-v1.0.0.zip/file",
        isLatest: false,
      }
    ];
  }

  return list;
}
