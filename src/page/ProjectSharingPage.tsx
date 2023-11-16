import { styled } from "styled-components";
import { GetPRReport } from "@/api/pr-records";
import { useLocation } from "react-router-dom";
import { PatchShareProject } from "@/api/projects";
import { useState } from "react";
import { useInput } from "@/hook/useInput";
import { TextAreaInput } from "@/components/Input";
import { CheckBoxInput } from "@/components/Input/CheckBoxInput";
import { Button } from "@/components/Button";
import { Arrow } from "@/asset/icon";
import PRCard from "@/components/PRCard";

const ProjectSharingPage = () => {
  const location = useLocation();
  const state = location.state as { id: string };
  const [length, setLength] = useState(0);
  const {
    form: project,
    setForm: setProject,
    onChange: onChangeProject,
  } = useInput({
    role: "",
    learned: "",
    prRecordIds: [] as string[],
  });

  const { data: prLists } = GetPRReport(state.id);
  const { mutate: ShareProject } = PatchShareProject(state.id);

  const onClickRightSLide = () => {
    setLength(length + 1);
  };

  const onClickLeftSLide = () => {
    setLength(length - 1);
  };

  const onShare = () => {
    const { role, learned, prRecordIds } = project;
    if (role.length >= 1 && learned.length >= 1 && prRecordIds[0]) {
      ShareProject({ ...project });
    } else {
      alert("모두 입력해주세요");
    }
  };

  return (
    <Container>
      <PageWrapper>
        <Slide style={{ transform: `translateX(${-length * 100}vw)` }}>
          <SlideWrapper>
            <TextAreaInput
              name="role"
              value={project.role}
              onChange={onChangeProject}
              label="프로젝트에서 한 역할을 입력해주세요"
              height="280px"
              placeholder="프로젝트에서 한 역할을 입력해주세요"
            />
          </SlideWrapper>
          <SlideWrapper>
            <TextAreaInput
              name="learned"
              value={project.learned}
              onChange={onChangeProject}
              label="프로젝트을 통해서 배운점을 입력해주세요"
              height="280px"
              placeholder="프로젝트을 통해서 배운점을 입력해주세요"
            />
          </SlideWrapper>
          <SlideWrapper>
            <Label>포트폴리오에 들어갈 이슈나 개선사항을 선택해주세요</Label>
            <PRCheckWrapper>
              {prLists?.prRecords.map((pr, index) => {
                return (
                  <PRCard key={index} {...pr}>
                    <CheckBoxInput
                      name="prRecordIds"
                      value={project.prRecordIds}
                      boxValue={pr.id}
                      onChange={(selectedIds) =>
                        setProject({ ...project, prRecordIds: selectedIds })
                      }
                    />
                  </PRCard>
                );
              })}
            </PRCheckWrapper>
            <Button onClick={onShare}>내보내기</Button>
          </SlideWrapper>
        </Slide>
        <ButtonWrapper>
          <Arrow
            direction="left"
            size="large"
            onClick={onClickLeftSLide}
            disabled={length != 0}
          />
          <Arrow
            direction="right"
            size="large"
            onClick={onClickRightSLide}
            disabled={length != 2}
          />
        </ButtonWrapper>
      </PageWrapper>
    </Container>
  );
};

export default ProjectSharingPage;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  overflow: hidden;
`;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  transition: 1s;
`;

const SlideWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  position: absolute;
  left: 180px;
  right: 180px;
`;

const Label = styled.p`
  font-size: 22px;
  font-weight: 700px;
`;

const PRCheckWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
`;
