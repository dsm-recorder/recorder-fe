import styled from "styled-components";
import { DropDown, Input, ImageInput, RadioInput } from "../components/Input";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { GetRepository, PostProject } from "../api/project";
import { DeleteIcon } from "../asset/icon/DeleteIcon";
import { HStack, VStack } from "../components/Stack";

export const ProjectRegisterPage = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>("");
  const [dropDownValue, setDropDownValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data: repositories } = GetRepository();
  const { mutate: ProjectMutation } = PostProject();

  const uniqueNames = repositories
    ?.map((item) => item.name.split("/")[0])
    ?.filter((value, index, self) => self.indexOf(value) === index);

  const onAddSkills = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const onDeleteSkills = (value: string) => {
    const updatedSkills = skills.filter((skill) => skill !== value);
    setSkills(updatedSkills);
  };

  const onDropDownChange = (value: string) => {
    setDropDownValue(String(value));
  };

  const filteredItems = repositories
    ? repositories.filter((item) => item.name.startsWith(`${dropDownValue}/`))
    : [];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onProjectRegister = () => {
    if (
      repositories &&
      selectedRadio >= 0 &&
      selectedRadio < repositories.length
    ) {
      ProjectMutation({
        projectName: projectName,
        description: description,
        repositoryName: repositories[selectedRadio].name,
        skills: skills,
      });
    }
  };

  return (
    <>
      <Container>
        <Title>프로젝트 등록</Title>
        <Box>
          <VStack gap={30}>
            <ImageInput
              label="프로젝트 로고"
              value={selectedImage}
              handleImageChange={handleImageChange}
            />
            <Input
              type="text"
              label="프로젝트 이름"
              placeholder="프로젝트 이름을 입력해주세요"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            />
            <Input
              type="text"
              label="설명"
              placeholder="프로젝트 설명을 입력해주세요"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <DropDown
              value={dropDownValue}
              onClick={(e) => onDropDownChange(e)}
              label="Github Repository 이름"
              list={uniqueNames}
              placeholder="Github Repository 위치를 선택해주세요"
            />
          </VStack>
          <RepositoryBox>
            {filteredItems.map((item, index) => {
              const { name, description, language } = item;
              const radioId = String(index);
              const isRadioSelected = String(selectedRadio) === radioId;
              return (
                <RepositoryCard key={index}>
                  <VStack>
                    <Name>{name.split("/")[1]}</Name>
                    <Description>{description}</Description>
                    <Language>{language}</Language>
                  </VStack>
                  <RadioInput
                    radioId={radioId}
                    isRadioSelected={isRadioSelected}
                    onClick={() => {
                      setSelectedRadio(index);
                    }}
                  />
                </RepositoryCard>
              );
            })}
          </RepositoryBox>
          <VStack gap={30}>
            <HStack align="end" gap={30}>
              <Input
                type="text"
                label="사용 기술"
                placeholder="사용한 기술을 입력해주세요"
                value={skillInput}
                onChange={(e) => {
                  setSkillInput(e.target.value);
                }}
              />
              <Button onClick={onAddSkills}>추가</Button>
            </HStack>
            <HStack height={40} gap={30}>
              {skills?.map((skill, index) => (
                <SkillCard key={index}>
                  {skill}
                  <DeleteIcon onClick={() => onDeleteSkills(skill)} />
                </SkillCard>
              ))}
            </HStack>
          </VStack>
          <Button onClick={onProjectRegister}>프로젝트 등록</Button>
        </Box>
      </Container>
    </>
  );
};

export default ProjectRegisterPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 180px 300px 120px 300px;
  gap: 60px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.brownSurface.light.default};
`;

const Title = styled.div`
  width: 360px;
  height: 32px;
  border-bottom: 2px solid black;
  text-align: left;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 30px 30px 30px;
`;

const SkillCard = styled.div`
  display: flex;
  padding: 0 15px 0 15px;
  height: 40px;
  gap: 5px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #999999;
`;

const RepositoryBox = styled.div`
  padding: 30px 30px 30px 30px;
  border: 1px solid #999999;
  border-radius: 10px;
  gap: 60px;
  height: 420px;
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
`;

const RepositoryCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #999999;
  border-radius: 10px;
  align-items: center;
  width: 473px;
  height: 120px;
`;

const Name = styled.p`
  height: 21px;
  font-size: 16px;
`;

const Description = styled.p`
  height: 18px;
  font-size: 16px;
`;
const Language = styled.p`
  height: 18px;
  font-size: 16px;
`;
