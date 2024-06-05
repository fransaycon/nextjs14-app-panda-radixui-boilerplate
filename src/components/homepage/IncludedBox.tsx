"use client"

import React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import VerticalGrid from "@components/common/VerticalGrid"
import { css } from "@styled-system/css"
import { ChevronUpIcon } from "@radix-ui/react-icons"

const rootStyle = css({
  overflowY: "hidden",
  "& > [data-state='open']": {
    animation: "collapsibleReveal 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
    "& > #chevron": {
      animation: "chevronFlip 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
    },
  },
  "& > [data-state='closed']": {
    animation: "collapsibleClose 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
})

const triggerStyle = css({
  display: "flex",
  gap: "2",
  textDecoration: "underline",
  alignItems: "center",
  my: "4",
  "&:hover": {
    cursor: "pointer",
  },
})

const headerStyle = css({ fontWeight: "bold", fontSize: "xl" })

const ulStyle = css({
  position: "relative",
  listStyleType: "circle",
  listStylePosition: "inside",
  textAlign: "left",
  padding: 0,
  margin: 0,
})

const IncludedBox = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible.Root className={rootStyle} open={open} onOpenChange={setOpen}>
      <h1 className={headerStyle}>
        NextJS App Router + PandaCSS + RadixUI Boilerplate
      </h1>
      <Collapsible.Trigger className={triggerStyle}>
        <div>Click to see what&apos;s included.</div>
        <div id="chevron">
          <ChevronUpIcon />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <VerticalGrid css={{ width: "100%" }}>
          <ul className={ulStyle}>
            <li>
              uses latest nextjs version 14 paradigms, including server actions.
            </li>
            <li>
              uses panda css for styling and radix-ui for headless ui components
              w/ built-in accessibility
            </li>
            <li>
              js tooling for codebase consistency and quality: eslint, prettier,
              typescript
            </li>
            <li>
              commit automations: commitlint, commitizen, husky,
              semantic-release
            </li>
            <li>
              testing: jest, react-testing-library, playright e2e, msw for
              mocking api requests
            </li>
            <li>github action ci for prs</li>
          </ul>
        </VerticalGrid>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default IncludedBox
