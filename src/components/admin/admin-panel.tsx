"use client";
import { Admin, Resource, EditGuesser } from "react-admin";
import { dataProvider } from "./data-provider";
import { ArticleCreate, ArticleEdit, ArticleList } from "./page/article";

const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="article"
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
    />
  </Admin>
);

export default AdminPanel;
