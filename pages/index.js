import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProjects from "@/components/NewProjects";
import { mongooseConnect } from "@/components/lib/mongoose";
import { Project } from "@/models/project";
import Email from "@/components/Email";

export default function HomePage({featuredProject, newProjects}){

  return(
  <div>
    
    <Header />
    <Featured project={featuredProject} />
    <NewProjects projects={newProjects} />
    
  </div>
  );
}

export async function getServerSideProps(){
  const featuredProjectId = '667c8bbca8e2dedb8382dcd2';
  await mongooseConnect();
  const featuredProject = await Project.findById(featuredProjectId);4
  const newProjects = await Project.find({} , null, {sort: {'_id':-1}, limit:8})
  return {
    props: {featuredProject: JSON.parse(JSON.stringify(featuredProject)),
    newProjects: JSON.parse(JSON.stringify(newProjects)),

    }
  }
}