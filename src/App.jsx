import TabBody from "./components/TabBody/TabBody"
import Tab from "./components/Tab/Tab"
import Tabs from "./components/Tabs/Tabs"
import { DropDownExample } from "./components/DropdownMenu"
import ModalExample from "./components/Modal"

function App() {

  return (
    <div className="App">
    <h1>TINDO ExampleS</h1>
    <Tabs>
      <Tab label="Tab 1">
        <TabBody label={"Tab 1 dropDown"} content={<DropDownExample />}/>
      </Tab>
      <Tab label="Tab 2">
      <TabBody label={"Tab 2"} content={<ModalExample />}/>
      </Tab>
      <Tab label="Tab 3">
      <TabBody label={"Tab 3"}/>
      </Tab>
    </Tabs>
  </div>
  )
}

export default App
