// @flow
import * as React from "react";
import Home from "../../stories/screens/Home";
import data from "./data";
export interface Props {
	navigation: any,
}
export interface State {}
export default class HomeContainer extends React.Component<Props, State> {
	render() {
		return <Home navigation={this.props.navigation} list={data} />;
	}
}
