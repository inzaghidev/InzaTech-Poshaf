"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const GitHubButtonInner = dynamic(() => import("react-github-btn"), {
  ssr: false,
});

export type GitHubBtnProps = ComponentProps<typeof GitHubButtonInner>;

export function GitHubBtn(props: GitHubBtnProps) {
  return <GitHubButtonInner {...props} />;
}
