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
  const [searchRepo, setSearchRepo] = useState('');
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

  const FilterRepo = selectRepos?.filter((repoName) =>
    repoName.name.includes(searchRepo)
  );

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
        <PageWrapper>
          <ImageInput
            width='200px'
            height='200px'
            placeholder='프로젝트 로고를 선택해주세요'
            value={project.logoImageUrl}
            handleImageChange={handleImageChange}
          />
          <Input
            type='text'
            label='프로젝트 명'
            name='projectName'
            placeholder='프로젝트 이름을 입력해주세요'
            value={project.projectName}
            onChange={onChangeProject}
          />
          <TextAreaInput
            placeholder='프로젝트 설명을 입력해주세요'
            label='설명'
            name='description'
            width='100%'
            value={project.description}
            setValue={(e) => setProject({ ...project, description: e})}
            onChange={onChangeProject}
          />
          <RepositoryWrapper>
            <HStack gap={60} align='center'>
              <MainTitle>깃허브 Repository</MainTitle>
              <SideTitle>
                프로젝트를 진행할때 사용할 레포지토리를 선택해주세요
              </SideTitle>
            </HStack>
            <HStack justify='space-between' width={700}>
              <DropDown
                value={dropDownValue}
                onClick={onDropDownChange}
                list={dropDownList}
                placeholder='Github Repository 위치를 선택해주세요'
              />
              <Input
                type='text'
                placeholder='레포지토리 이름을 입력해주세요'
                value={searchRepo}
                onChange={(e) => {
                  setSearchRepo(e.target.value);
                }}
              />
            </HStack>
            <RepositoryBox>
              {dropDownValue ? (
                FilterRepo?.map((item, index) => {
                  const { name, description, language } = item;
                  const radioId = String(index);
                  const isRadioSelected = String(selectedProject) === radioId;
                  return (
                    <RepositoryCard
                      key={name}
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
                <p>값을 먼저 선택하세요.</p>
              )}
            </RepositoryBox>
          </RepositoryWrapper>
          <VStack gap={30}>
            <HStack align='end' gap={30}>
              <Input
                type='text'
                label='사용 기술'
                placeholder='사용한 기술을 입력해주세요'
                value={skillInput}
                onKeyDown={(e) => e.key === 'Enter' && onAddSkills()}
                onChange={(e) => {
                  setSkillInput(e.target.value);
                }}
              />
              <Button onClick={onAddSkills} disabled={skillInput.trim() === ''}>
                추가
              </Button>
            </HStack>
            <HStack gap={30} width={800} wrap='wrap'>
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
          <Button onClick={onProjectRegister}>프로젝트 등록</Button>
        </PageWrapper>
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

const PageWrapper = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  border-radius: 10px;
  height: 420px;
  width: 700px;
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const MainTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

const SideTitle = styled.p`
  color: #ababab;
  font-size: 15px;
`;

const RepositoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
