import * as ui from "./ui";
import * as React from "react";
import * as tab from "./tab";

export interface Props extends tab.Tab {

}
export interface State {

}

export class DashBoard extends React.Component<Props, State> {

}

export class DashBoardTab implements tab.Tab {
    getUrl() {
        return tab.getUrl('dashboard://');
    }
    getTitle = () => 'DashBoard';
    component = DashBoard;
}


