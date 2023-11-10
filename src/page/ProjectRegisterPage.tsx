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
import { useInput } from '@/hook/useInput';

export const ProjectRegisterPage = () => {
  const [skillInput, setSkillInput] = useState<string>('');
  const [dropDownValue, setDropDownValue] = useState('');
  const [selectRepos, setSelectRepos] = useState<IRepoResponse[] | undefined>(
    []
  );
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const {
    form: project,
    setForm: setProject,
    onChange: onChangeProject,
  } = useInput({
    projectName: '',
    description: '',
    skills: [] as string[],
    logoImageUrl: '',
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
      setProject({ ...project, logoImageUrl: imgUrl.url });
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
    setProject({
      ...project,
      skills: [...project.skills, skillInput],
    });
    setSkillInput('');
  };

  const onDeleteSkills = (value: string) => {
    const updatedSkills = project.skills.filter((skill) => skill !== value);
    setProject({ ...project, skills: updatedSkills });
  };

  const onDropDownChange = (value: string) => {
    setDropDownValue(String(value));
  };

  const onProjectRegister = () => {
    const { logoImageUrl, projectName, description, skills } = project;
    if (
      logoImageUrl !== null &&
      projectName.length >= 1 &&
      description.length >= 1 &&
      skills.length >= 1 &&
      selectRepos &&
      selectedProject >= 0 &&
      selectedProject < selectRepos.length
    ) {
      ProjectMutation({
        ...project,
        repositoryName: selectRepos[selectedProject].name,
      });
    } else {
      alert('모두 입력해주세요');
    }
  };

  return (
    <>
      <Container>
        <Title>프로젝트 등록</Title>
        <VStack padding='30px' gap={30}>
          <HStack justify='space-between' width={1068}>
            <ImageInput
              label='프로젝트 로고'
              width='200px'
              height='200px'
              placeholder='프로젝트 로고를 선택해주세요'
              value={project.logoImageUrl}
              handleImageChange={handleImageChange}
            />
            <Input
              type='text'
              name='projectName'
              label='프로젝트 이름'
              placeholder='프로젝트 이름을 입력해주세요'
              value={project.projectName}
              onChange={onChangeProject}
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
            name='description'
            width='1068px'
            value={project.description}
            onChange={onChangeProject}
          />
          <RepositoryBox>
            {dropDownValue ? (
              selectRepos?.map((item, index) => {
                const { name, description, language } = item;
                const radioId = String(index);
                const isRadioSelected = String(selectedProject) === radioId;
                return (
                  <RepositoryCard
                    key={index}
                    name={name}
                    description={description}
                    language={language}
                    isRadioSelected={isRadioSelected}
                    radioId={radioId}
                    onClick={() => setSelectedProject(index)}
                  />
                );
              })
            ) : (
              <p>깃허브 레포지토리를 선택해주세요.</p>
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
              <Button onClick={onAddSkills} disabled={skillInput.trim() === ''}>
                추가
              </Button>
            </HStack>
            <HStack height={40} gap={30} width={1068}>
              {project.skills?.map((skill, index) => (
                <SkillCard key={index}>
                  {skill}
                  <DeleteIcon
                    cursor='pointer'
                    onClick={() => onDeleteSkills(skill)}
                  />
                </SkillCard>
              ))}
            </HStack>
          </VStack>
          <Button
            onClick={onProjectRegister}
            disabled={
              Object.values(project).some((item) => !!item === false) &&
              selectRepos &&
              selectedProject >= 0 &&
              selectedProject < selectRepos.length
            }
          >
            프로젝트 등록
          </Button>
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
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
`;

const RepositoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 1068px;
  height: 420px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
  max-height: 420px;
  overflow-y: auto;
`;
