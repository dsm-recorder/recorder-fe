import styled from 'styled-components';

interface DirectionType {
  direction: 'left' | 'top' | 'right' | 'bottom';
  onClick?: () => void;
}

const rotateDeg: Record<DirectionType['direction'], string> = {
  left: '90deg',
  top: '0deg',
  right: '270deg',
  bottom: '180deg',
};

export const Arrow = ({ direction, onClick }: DirectionType) => {
  return (
    <Svg
      width='13'
      height='7'
      viewBox='0 0 13 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      direction={direction}
      onClick={onClick}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8531 0.146856C12.8067 0.100305 12.7515 0.0633711 12.6908 0.0381711C12.63 0.0129711 12.5649 0 12.4992 0C12.4334 0 12.3683 0.0129711 12.3076 0.0381711C12.2468 0.0633711 12.1916 0.100305 12.1452 0.146856L6.49987 5.79242L0.854531 0.146856C0.808049 0.10038 0.752866 0.063513 0.692134 0.0383603C0.631402 0.0132077 0.566309 0.000261717 0.500573 0.000261717C0.434836 0.000261717 0.369744 0.0132077 0.309011 0.0383603C0.24828 0.063513 0.193097 0.10038 0.146614 0.146856C0.100132 0.193332 0.0632601 0.248507 0.0381041 0.309231C0.0129471 0.369955 0 0.435039 0 0.500766C0 0.566493 0.0129471 0.631577 0.0381041 0.6923C0.0632601 0.753024 0.100132 0.808199 0.146614 0.854675L6.14591 6.85314C6.19235 6.8997 6.24752 6.93663 6.30826 6.96183C6.369 6.98703 6.43411 7 6.49987 7C6.56563 7 6.63074 6.98703 6.69148 6.96183C6.75222 6.93663 6.80739 6.8997 6.85383 6.85314L12.8531 0.854675C12.8997 0.808242 12.9366 0.75308 12.9618 0.692351C12.987 0.631621 13 0.566516 13 0.500766C13 0.435015 12.987 0.369911 12.9618 0.309181C12.9366 0.248451 12.8997 0.19329 12.8531 0.146856Z'
        fill='#999999'
      />
    </Svg>
  );
};

const Svg = styled.svg<{ direction: DirectionType['direction'] }>`
  color: ${({theme}) => theme.colors.gray[50]};
  transition: 0.5s;
  transform: rotate(${({ direction }) => rotateDeg[direction]});
`;
