import React from "react";
import FavoritesSelector from "../components/FavoritesSelector";
import MyPageLink from "../components/MyPageLink";
import * as Nav from "../style/MyPageNavDesign";

export default function MyEditFavoritePage() {
  return (
    <div>
      <Nav.StickyNavbar>
        <MyPageLink />
      </Nav.StickyNavbar>
      <FavoritesSelector mode="edit" />
    </div>
  );
}
