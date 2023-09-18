import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Vitest Doc</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Vitest Docs © 2023",
  },
};

export default config;
