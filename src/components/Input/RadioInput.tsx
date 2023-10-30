interface RadioInputType {
  radioId: string;
  isRadioSelected: boolean;
  onClick?: () => void;
}

export const RadioInput = ({
  radioId,
  isRadioSelected,
  onClick,
}: RadioInputType) => {
  return (
    <>
      <input
        type='radio'
        id={radioId}
        name='repository'
        hidden
        checked={isRadioSelected}
        onChange={onClick}
      />
      <label htmlFor={radioId}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='24' height='24' fill='white' />
          {isRadioSelected && <circle cx='12' cy='12' r='5' fill='#005B45' />}
          <circle cx='12' cy='12' r='8.5' stroke='#005B45' />
        </svg>
      </label>
    </>
  );
};
