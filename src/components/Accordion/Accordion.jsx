import _ from 'lodash'
import React from 'react'
import { Accordion, Label, Message } from 'semantic-ui-react'
import AddProject from "../AddProject/AddProject";

const panels = _.times(1, (i) => ({
  key: `panel-${i}`,
  title: {
    content: <Label color='blue' content='Start a Collaborative Project' />,
  },
  content: {
    content: (
      <Message
        info
        content={<AddProject/>}
      />
    ),
  },
}))

const AccordionExampleShorthand = () => (
    <Accordion defaultActiveIndex={1} panels={panels} class="accordion"/>
  )
  

export default AccordionExampleShorthand
