import styled from "styled-components"
import Center from "./Center"
import ProjectsGrid from "./ProjectsGrid"



const Title = styled.h2`
       font-size: 3rem;   
        font-weight: bold;
        text-align: center; // Horizontally centers the text
        padding: 40px;
    
        margin: 0; // Remove default margin that might affect alignment
    animation: nope 1s ease;
`


export default function NewProjects({projects}){
    return (

        <Center>
            <Title>Recent Projects</Title>
            <ProjectsGrid projects={projects}/>
        </Center>
    )
}