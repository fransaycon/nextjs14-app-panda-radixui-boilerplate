import { render, waitFor, screen } from "@testing-library/react"
import RootPage from "@/app/page"

describe("Homepage", () => {
  it("should render without problems", async () => {
    render(await RootPage())
    await waitFor(() => {
      expect(screen.getByText("fake bio")).toBeInTheDocument()
      expect(screen.getByText("fake name")).toBeInTheDocument()
    })
  })
})
