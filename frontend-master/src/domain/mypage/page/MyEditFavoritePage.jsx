import React from "react";
import FavoritesSelector from "../components/FavoritesSelector";
import MyPageLink from "../components/MyPageLink";
import * as Nav from "../style/MyPageNavDesign";
import * as Favorite from "../style/FavoriteDesign";

export default function MyEditFavoritePage() {
  return (
    <Favorite.MyEditFavoritePage>
      <Nav.StickyNavbar>
        <MyPageLink />
      </Nav.StickyNavbar>
      <FavoritesSelector mode="edit" />
    </Favorite.MyEditFavoritePage>
  );
}
