import { styled } from "@styled-system/jsx"

const VerticalGrid = styled("div", {
  base: {
    display: "grid",
    height: "fit-content",
    gridTemplateColumns: "1fr",
    gridGap: "6",
    width: "full",
  },
})

export default VerticalGrid
