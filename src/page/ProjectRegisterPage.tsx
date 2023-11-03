import styled from 'styled-components';
import {
  DropDown,
  Input,
  ImageInput,
  TextAreaInput,
} from '../components/Input';
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';
import {
  GetIndividualRepo,
  GetOrganization,
  GetOrganizationRepo,
  PostProject,
} from '../api/project';
import { DeleteIcon } from '../asset/icon/DeleteIcon';
import { HStack, VStack } from '../components/Stack';
import { IRepoResponse } from '../api/project/type';
import { PostImage } from '../api/image';
import { RepositoryCard } from '../components/RepositoryCard';

export const ProjectRegisterPage = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [skillInput, setSkillInput] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [dropDownValue, setDropDownValue] = useState('');
  const [selectRepos, setSelectRepos] = useState<IRepoResponse[] | undefined>(
    []
  );

  const [selectedRadio, setSelectedRadio] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data: organizations } = GetOrganization();
  const { data: organizationRepos, isLoading: isLoadingOrganization } =
    GetOrganizationRepo(dropDownValue);
  const { data: individualRepos, isLoading: isLoadingIndividual } =
    GetIndividualRepo();

  const { mutate: ImageMutation, data: imgUrl } = PostImage();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      ImageMutation(file);
    }
  };

  useEffect(() => {
    if (imgUrl) {
      setSelectedImage(imgUrl);
    }
  }, [imgUrl]);

  const { mutate: ProjectMutation } = PostProject();

  const dropDownList = [
    '개인 레포지토리',
    ...(organizations ? organizations : []),
  ];

  useEffect(() => {
    if (!isLoadingIndividual && dropDownValue == '개인 레포지토리') {
      setSelectRepos(individualRepos);
    } else if (
      !isLoadingOrganization &&
      dropDownList?.includes(dropDownValue)
    ) {
      setSelectRepos(organizationRepos);
    }
  }, [
    dropDownValue,
    isLoadingIndividual,
    individualRepos,
    isLoadingOrganization,
    organizationRepos,
  ]);

  const onAddSkills = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const onDeleteSkills = (value: string) => {
    const updatedSkills = skills.filter((skill) => skill !== value);
    setSkills(updatedSkills);
  };

  const onDropDownChange = async (value: string) => {
    setDropDownValue(String(value));
  };

  const onProjectRegister = () => {
    if (
      selectedImage !== null &&
      projectName.length >= 1 &&
      description.length >= 1 &&
      skills.length >= 1 &&
      selectRepos &&
      selectedRadio >= 0 &&
      selectedRadio < selectRepos.length
    ) {
      ProjectMutation({
        logoImageUrl: selectedImage,
        projectName: projectName,
        description: description,
        repositoryName: selectRepos[selectedRadio].name,
        skills: skills,
      });
    } else alert('모두 입력해주세요');
  };

  return (
    <>
      <Container>
        <Title>프로젝트 등록</Title>
        <Box>
          <HStack justify="space-between" width={1068}>
            <ImageInput
              label="프로젝트 로고"
              width="200px"
              height="200px"
              placeholder="프로젝트 로고를 선택해주세요"
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
            <DropDown
              value={dropDownValue}
              onClick={(e) => onDropDownChange(e)}
              label="Github Repository 이름"
              list={dropDownList}
              placeholder="Github Repository 위치를 선택해주세요"
            />
          </HStack>
          <TextAreaInput
            placeholder="프로젝트 설명을 입력해주세요"
            label="설명"
            width="1068px"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <RepositoryBox>
            {dropDownValue ? (
              selectRepos?.map((item, index) => {
                const { name, description, language } = item;
                const radioId = String(index);
                const isRadioSelected = String(selectedRadio) === radioId;
                return (
                  <RepositoryCard
                    key={index}
                    name={name}
                    description={description}
                    language={language}
                    isRadioSelected={isRadioSelected}
                    radioId={radioId}
                    onClick={() => setSelectedRadio(index)}
                  />
                );
              })
            ) : (
              <p>값을 먼저 선택하세요.</p>
            )}
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
            <HStack height={40} gap={30} width={1068}>
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
  width: 1068px;
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
