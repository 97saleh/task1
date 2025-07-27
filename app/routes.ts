import { type RouteConfig, index , route } from "@react-router/dev/routes";

const routes: RouteConfig =[
    index("routes/home.tsx"),
    route("/usersList" , "./routes/usersList/usersList.tsx" )
]

export default routes;
