// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "devsheva";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
const skillData = [];

const buildSkills = (skills) =>
  skills.forEach((skill, id) =>
    skillData.push({
      id,
      skill: skill.icon,
      name: skill.name,
    })
  );

const frontendIcons = [
  {
    icon: <Icon icon="logos:react" className="display-4" />,
    name: "React",
  },
  {
    icon: <Icon icon="devicon:html5" className="display-4" />,
    name: "HTML5",
  },
  {
    icon: <Icon icon="devicon:css3" className="display-4" />,
    name: "CSS3",
  },
  {
    icon: <Icon icon="devicon:bootstrap" className="display-4" />,
    name: "Bootstrap",
  },
];

const miscellanousIcons = [
  {
    icon: <Icon icon="devicon:swagger" className="display-4" />,
    name: "Swagger Documentation",
  },
  {
    icon: <Icon icon="devicon-plain:jest" className="display-4" />,
    name: "Jest",
  },
];

const nodeIcons = [
  {
    icon: <Icon icon="skill-icons:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    icon: <Icon icon="devicon:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    icon: <Icon icon="devicon:denojs" className="display-4" />,
    name: "Deno",
  },
  {
    icon: <Icon icon="devicon:nodejs" className="display-4" />,
    name: "NodeJS",
  },
];

const sideProjectsIcons = [
  {
    icon: <Icon icon="devicon:csharp" className="display-4" />,
    name: "C#",
  },
  {
    icon: <Icon icon="logos:dotnet" className="display-4" />,
    name: ".NET & ASP.NET Core",
  },
  {
    icon: <Icon icon="devicon:python" className="display-4" />,
    name: "Python",
  },
  {
    icon: <Icon icon="devicon:elixir" className="display-4" />,
    name: "Elixir (learning) ",
  },
];

const persistenceIcons = [
  {
    icon: <Icon icon="devicon:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    icon: <Icon icon="devicon:mysql-wordmark" className="display-4" />,
    name: "MySQL",
  },
  {
    icon: <Icon icon="devicon:rabbitmq" className="display-4" />,
    name: "RabbitMQ",
  },
];

buildSkills([
  {
    icon: (
      <Icon
        icon="mdi:language-ruby-on-rails"
        color="#b63535"
        className="display-4"
      />
    ),
    name: "Ruby on Rails",
  },
  {
    icon: <Icon icon="devicon:rspec" className="display-4" />,
    name: "RSpec",
  },
  {
    icon: <Icon icon="logos:sidekiq-icon" className="display-4" />,
    name: "Sidekiq",
  },
  {
    icon: <Icon icon="skill-icons:aws-dark" className="display-4" />,
    name: "AWS",
  },
  ...nodeIcons,
  ...frontendIcons,

  {
    icon: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    icon: <Icon icon="devicon:docker" className="display-4" />,
    name: "Docker",
  },
  ...persistenceIcons,
  ...miscellanousIcons,
  ...sideProjectsIcons,
]);

export { skillData };

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["gemini-delete-chat", "hn-telegram-bot"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];
