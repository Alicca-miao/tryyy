import axios from 'axios'
import { doGet, doDelete, doPut, doPost } from "./service/crud";
export async function dataaa() {
  // localhost:5173/api/film/0 => vite会将该地址代理到localhost:8173/film/0
  const  image  = await doGet(`/users`);
  return image;
}