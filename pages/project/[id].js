import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { Project } from "@/models/project";
import { mongooseConnect } from "@/components/lib/mongoose";
import styled, { keyframes } from "styled-components";
import WhitwBox from "@/components/WhitwBox";
import ProjectImages from "@/components/ProjectImages";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px;
  gap: 40px;
  margin: 40px 0;
  animation: ${fadeIn} 1.5s ease;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const Description = styled.p`
  white-space: pre-wrap; /* Handle newlines */
  line-height: 1.6; /* Improve readability */
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    padding-right: 300px;
  }
`;

export default function ProjectPage({ project }) {
  return (
    <>
      <Header />
      <ColWrapper>
        <WhitwBox>
          <ProjectImages images={project.Images} />
        </WhitwBox>
        <div>
          <Title><b>{project.Title}</b></Title>
          <Description>{project.Description}</Description>
          {project.Price && (
            <Price>${project.Price}</Price>
          )}
        </div>
      </ColWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const project = await Project.findById(id);
  return {
    props: {
      project: JSON.parse(JSON.stringify(project)),
    },
  };
}
