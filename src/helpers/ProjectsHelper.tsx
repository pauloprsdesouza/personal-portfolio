import { ProjectsModel } from "../pages/Home/Components/Projects/Models/ProjectModel";

var projects: ProjectsModel = [];

projects.push({ name: "Passwordless", github: "https://github.com/pauloprsdesouza/passwordless-demo-dotnet", image:"https://quicklaunch.io/wp-content/uploads/2020/03/passwordless-authencation-blog.png", liveDemoLink: "https://4h826bb802.execute-api.us-east-1.amazonaws.com/dev/docs/index.html" });
projects.push({ name: "Crypto Quotation", github: "https://github.com/pauloprsdesouza/cryptocurrency-demo-dotnet", image:"https://static.vecteezy.com/system/resources/previews/008/070/270/non_2x/simple-modern-trend-illustration-of-bitcoin-and-cryptocurrency-growth-free-vector.jpg", liveDemoLink: "https://master.d2u0ja9j6d5de3.amplifyapp.com/"});

export default projects;