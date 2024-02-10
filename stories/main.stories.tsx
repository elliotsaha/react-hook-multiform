import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import Globalform from "../src/examples/globalform"

const meta: Meta<typeof Globalform> = {
  component: Globalform
}

export default meta

type Story = StoryObj<typeof Globalform>

export const Main: Story = {
  render: () => <Globalform />
}
