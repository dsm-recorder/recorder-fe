import { PostProjectComment } from '@/api/comments';
import { Button } from '@/components/Button';
import { TextAreaInput } from '@/components/Input';
import { VStack } from '@/components/Stack';
import { useInput } from '@/hook/useInput';

const WriteComment = ({ projectId }: { projectId: string }) => {
  const {
    form: comment,
    setForm: setComment,
    onChange: onChangeComment,
  } = useInput('');

  const { mutate: postProjectComment } = PostProjectComment(projectId);

  const onClick = () => {
    setComment('');
    postProjectComment(comment);
  };
  return (
    <VStack align='end' gap={10}>
      <TextAreaInput
        placeholder='댓글을 작성하세요'
        value={comment}
        setValue={setComment}
        onChange={onChangeComment}
      />
      <div style={{ width: '110px' }}>
        <Button onClick={onClick} disabled={comment.trim() === ''}>
          댓글 작성
        </Button>
      </div>
    </VStack>
  );
};

export default WriteComment;
