export const onKeyDownRunfFn = (
  e: React.KeyboardEvent<HTMLInputElement>,
  onChange: () => void
) => {
  if (
    e.key === 'Enter' &&
    e.nativeEvent.isComposing === false &&
    e.currentTarget.value.trim() !== ''
  ) {
    e.preventDefault();
    onChange();
  }
};
