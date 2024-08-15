import Center from "@/components/Center"
import styled from "styled-components"
import Header from "@/components/Header"
import { mongooseConnect } from "@/components/lib/mongoose"
import { Project } from "@/models/project"
import ProjectsGrid from "@/components/ProjectsGrid"



export default function ProjectsPage({projects}){

    const Title2 = styled.h1`
       font-size: 3rem;   
        font-weight: bold;
        text-align: center; // Horizontally centers the text
          padding: 70px 20px 20px; /* Default padding for larger screens */

  /* Remove or adjust top padding on mobile screens */
  @media screen and (max-width: 768px) {
    padding: 90px 20px 20px; /* Reduced padding for mobile screens */
  }
    
        margin: 0; // Remove default margin that might affect alignment
    animation: nope 1s ease;

`


    return(
        <>
        <Header />
        <Center>
        <Title2>All Projects</Title2>
        <ProjectsGrid projects={projects}/>
        </Center>
        
        </>
    )
}

export async function getServerSideProps(){
    await mongooseConnect();
    const projects = await Project.find({}, null, {sort:{'_id':-1}})


    return{
        props: {
          projects: JSON.parse(JSON.stringify(projects)),
        }
    }
}