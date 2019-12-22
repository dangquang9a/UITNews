import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  Icon,
  TabHeading
} from "native-base";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import Tab5 from "./tab5";
import {
  faBriefcase,
  faMobile,
  faRunning,
  faMusic
} from "@fortawesome/free-solid-svg-icons";
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 95 }}>
          <Left />
          <Body>
            <Title style={{ marginLeft: 80, marginTop: 30 }}>UIT News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="General">
            <Tab1 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <FontAwesomeIcon icon={faBriefcase} color={"white"} />
              </TabHeading>
            }
          >
            <Tab2 />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <FontAwesomeIcon icon={faMobile} color={"white"} />
              </TabHeading>
            }
          >
            <Tab3 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <FontAwesomeIcon icon={faRunning} color={"white"} />
              </TabHeading>
            }
          >
            <Tab4 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <FontAwesomeIcon icon={faMusic} color={"white"} />
              </TabHeading>
            }
          >
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
