const buildConfig = () => {
  const name = "Billionaire list";
  const copyright = "Owen";
  const defaultTitle = "Billionaire list";
  const defaultDescription = "NomardCoders Assignment";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
  };
};

export const config = buildConfig();
