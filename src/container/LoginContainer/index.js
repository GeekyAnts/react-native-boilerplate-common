// @flow
import * as React from "react";
import { Item, Input, Icon, View } from "native-base";
import Login from "../../stories/screens/Login";
export interface Props {
	navigation: any,
}
export interface State {}
export default class LoginContainer extends React.Component<Props, State> {
	render() {
		const form = (
			<View>
				<Item>
					<Icon active name="person" />
					<Input placeholder="EMAIL" keyboardType="email-address" />
				</Item>
				<Item>
					<Icon active name="unlock" />
					<Input placeholder="PASSWORD" secureTextEntry />
				</Item>
			</View>
		);
		return (
			<Login
				navigation={this.props.navigation}
				loginForm={form}
				onLogin={() => this.props.navigation.navigate("Drawer")}
			/>
		);
	}
}
