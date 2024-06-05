import { styled } from "@styled-system/jsx"

const Button = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: "0 15px",
    height: 35,
    backgroundColor: "almond",
    fontWeight: "bold",
    color: "#202020",
    border: "none",
    "&:hover": { opacity: 0.9 },
  },
})

export default Button
