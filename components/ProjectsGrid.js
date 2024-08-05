import styled from "styled-components"
import ProjectBox from "./ProjectBox";
import Center from "./Center";

const StyledProjectsGrid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 40px;
//  overflow:hidden;
        @media  screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        }

                @keyframes down {
    0% {
      transform: translateY(-1%);
      opacity:0;

    }
    100% {
      transform: translateY(0%);
      opacity:1;
    }
  }

  animation: down 1s ease-in-out;
  
 

`

export default function ProjectsGrid({projects}){
    return(

        <StyledProjectsGrid>
            {projects?.length > 0 && projects.map(project => (
            <ProjectBox key={project._id }{...project} />
            ))}
        </StyledProjectsGrid>

    )
}