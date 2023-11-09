import styled from 'styled-components';
import { DropDown, Input, ImageInput, TextAreaInput } from '@/components/Input';
import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';
import {
  GetIndividualRepo,
  GetOrganization,
  GetOrganizationRepo,
  PostProject,
} from '@/api/projects';
import { DeleteIcon } from '@/asset/icon';
import { HStack, VStack } from '@/components/Stack';
import { IRepoResponse } from '@/api/projects/type';
import { PostImage } from '@/api/images';
import { RepositoryCard } from '@/components/RepositoryCard';

export const ProjectRegisterPage = () => {
  const [skillInput, setSkillInput] = useState<string>('');
  const [dropDownValue, setDropDownValue] = useState('');
  const [selectRepos, setSelectRepos] = useState<IRepoResponse[] | undefined>(
    []
  );
  const [selectedRadio, setSelectedRadio] = useState<number>(0);
  const [project, setProject] = useState({
    projectName: '',
    description: '',
    skills: [] as string[],
    selectedImage: '',
  });

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
      setProject({ ...project, selectedImage: imgUrl.url });
    }
  }, [imgUrl]);

  const { mutate: ProjectMutation } = PostProject();

  const dropDownList = [
    '개인 레포지토리',
    ...(organizations?.organizations ?? []),
  ];

  useEffect(() => {
    if (!isLoadingIndividual && dropDownValue == '개인 레포지토리') {
      setSelectRepos(individualRepos?.repos);
    } else if (
      !isLoadingOrganization &&
      dropDownList?.includes(dropDownValue)
    ) {
      setSelectRepos(organizationRepos?.repos);
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
      setProject({
        ...project,
        skills: [...project.skills, skillInput],
      });
    }
  };

  const onDeleteSkills = (value: string) => {
    const updatedSkills = project.skills.filter((skill) => skill !== value);
    setProject({ ...project, skills: updatedSkills });
  };

  const onDropDownChange = async (value: string) => {
    setDropDownValue(String(value));
  };

  const onProjectRegister = () => {
    const { selectedImage, projectName, description, skills } = project;
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
    } else {
      alert('모두 입력해주세요');
    }
  };

  return (
    <>
      <Container>
        <Title>프로젝트 등록</Title>
        <VStack padding='30px 30px 30px 30px' gap={30}>
          <HStack justify='space-between' width={1068}>
            <ImageInput
              label='프로젝트 로고'
              width='200px'
              height='200px'
              placeholder='프로젝트 로고를 선택해주세요'
              value={project.selectedImage}
              handleImageChange={handleImageChange}
            />
            <Input
              type='text'
              label='프로젝트 이름'
              placeholder='프로젝트 이름을 입력해주세요'
              value={project.projectName}
              onChange={(e) => {
                setProject({ ...project, projectName: e.target.value });
              }}
            />
            <DropDown
              value={dropDownValue}
              onClick={onDropDownChange}
              label='Github Repository 이름'
              list={dropDownList}
              placeholder='Github Repository 위치를 선택해주세요'
            />
          </HStack>
          <TextAreaInput
            placeholder='프로젝트 설명을 입력해주세요'
            label='설명'
            width='1068px'
            value={project.description}
            onChange={(e) => {
              setProject({ ...project, description: e.target.value });
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
            <HStack align='end' gap={30}>
              <Input
                type='text'
                label='사용 기술'
                placeholder='사용한 기술을 입력해주세요'
                value={skillInput}
                onChange={(e) => {
                  setSkillInput(e.target.value);
                }}
              />
              <Button onClick={onAddSkills}>추가</Button>
            </HStack>
            <HStack height={40} gap={30} width={1068}>
              {project.skills?.map((skill, index) => (
                <SkillCard key={index}>
                  {skill}
                  <DeleteIcon onClick={() => onDeleteSkills(skill)} />
                </SkillCard>
              ))}
            </HStack>
          </VStack>
          <Button onClick={onProjectRegister}>프로젝트 등록</Button>
        </VStack>
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

const SkillCard = styled.div`
  display: flex;
  padding: 0 15px;
  height: 40px;
  gap: 5px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #999999;
`;

const RepositoryBox = styled.div`
  padding: 30px;
  border: 1px solid #999999;
  border-radius: 10px;
  column-gap: 60px;
  row-gap: 30px;
  height: 420px;
  width: 1068px;
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
`;
