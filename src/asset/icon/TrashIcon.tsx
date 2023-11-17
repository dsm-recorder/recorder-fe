interface TrashPropsType {
  onClick?: () => void;
}

export const TrashIcon = ({ onClick }: TrashPropsType) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <path
        d='M6.66667 1.33325L6 1.99992H2V3.33325H2.73958L3.92839 13.5038V13.509C4.01573 14.1668 4.58688 14.6666 5.25 14.6666H10.7487C11.4118 14.6666 11.983 14.1668 12.0703 13.509L12.0716 13.5038L13.2604 3.33325H14V1.99992H10L9.33333 1.33325H6.66667ZM4.08333 3.33325H11.9167L10.7487 13.3333H5.25L4.08333 3.33325Z'
        fill='black'
      />
    </svg>
  );
};
