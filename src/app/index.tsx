import { Redirect } from "expo-router";
import Login from "./login";

export default function Index() {
  return (
      <Redirect href="/gas-booking" />
    // <Redirect href="/login" />
  );
}