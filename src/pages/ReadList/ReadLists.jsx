import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadLists = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Read Book List</Tab>
        <Tab>My Wish List</Tab>
      </TabList>

      <TabPanel>
        <h2>Book i read </h2>
      </TabPanel>
      <TabPanel>
        <h2>My wish list</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ReadLists;
