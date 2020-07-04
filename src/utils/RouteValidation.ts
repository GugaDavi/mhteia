import { RouteProp } from "@react-navigation/native";

class RouteValidation {
  private navigation: RouteProp<Record<string, object | undefined>, string>;

  constructor(state: RouteProp<Record<string, object | undefined>, string>) {
    this.navigation = state;
  }

  public validateBottomNavigationColor(): string {
    if (this.navigation.name === "Home") {
      return "#0FEBDE";
    }
    return "#EB9D9D";
  }
}

export default RouteValidation;
