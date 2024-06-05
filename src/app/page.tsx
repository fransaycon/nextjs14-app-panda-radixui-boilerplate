import React from "react"
import { getUser } from "@/actions/github-actions"
import { Box, Flex } from "@styled-system/jsx"
import VerticalGrid from "@components/common/VerticalGrid"
import { css } from "@styled-system/css"
import IncludedBox from "@components/homepage/IncludedBox"

const avatarStyle = css({
  width: "4rem",
  height: "4rem",
  borderRadius: "100%",
})

const headerStyle = css({ fontWeight: "bold", fontSize: "xl" })

export default async function RootPage() {
  const githubResult = await getUser("fransaycon")

  return (
    <Flex
      css={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        p: "4",
      }}
    >
      <Flex
        css={{
          flexDir: "column",
          maxWidth: "600px",
          width: "100%",
          margin: "auto",
        }}
      >
        <VerticalGrid
          css={{
            border: "1px solid token(raisinBlack)",
            padding: "6",
            borderRadius: "xl",
            textAlign: "center",
          }}
        >
          <h1 className={headerStyle}>A @FRANSAYCON BOILERPLATE</h1>
          <Flex
            css={{ alignItems: "center", gap: "4", justifyContent: "center" }}
          >
            <img
              className={avatarStyle}
              src={githubResult.avatar_url}
              alt={`Avatar of ${githubResult.name}`}
            />
            <Box>{githubResult.name}</Box>
          </Flex>
          <Box>{githubResult.bio}</Box>
        </VerticalGrid>
        <IncludedBox />
      </Flex>
    </Flex>
  )
}
