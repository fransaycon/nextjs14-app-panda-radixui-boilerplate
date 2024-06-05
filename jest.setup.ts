import "@testing-library/jest-dom"
import server from "./src/mocks/server"
import fetch from "isomorphic-fetch"

// @ts-ignore
global.fetch = fetch

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
