import * as ui from "./ui";
import * as React from "react";
import {csx, Tabs} from "./ui";
import * as tab from "./tab";
import {DashBoardTab} from "./dashboardTab";

export interface Props {

}

export interface State {
    selectedTab: string;
    tabs: tab.Tab[];
}

@ui.Radium
export class TabsContainer extends ui.BaseComponent<Props, State>{

    constructor(props: Props) {
        super(props);
        
        let dashboard = 
        
        this.state = {
            selectedTab: null,
            tabs: []
        };
    }

    refs: { [string: string]: any; }


    render() {

        let tabs = this.state.tabs.map(t=> <ui.Tab>
                
            </ui.Tab>);

        return <Tabs>
                {tabs}
            </Tabs>;
    }

}