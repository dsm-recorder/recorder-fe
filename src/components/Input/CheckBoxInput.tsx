export const CheckBoxInput = ({
  name,
  value,
  boxValue,
  onChange,
}: {
  name: string;
  value: string[];
  boxValue: string;
  onChange: (newValue: string[]) => void;
}) => {
  const onCheckedElement = (checked: boolean, item: string) => {
    if (checked) {
      onChange([...value, item]);
    } else if (!checked) {
      onChange(value.filter((el) => el !== item));
    }
  };

  return (
    <>
      <input
        type="checkbox"
        hidden
        name={name}
        value={boxValue}
        onChange={(e) => {
          onCheckedElement(e.target.checked, e.target.value);
        }}
        checked={value.includes(boxValue) ? true : false}
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="2"
          fill={value.includes(boxValue) ? "#005B45" : "white"}
        />
        <path
          d="M10.9372 16C10.7171 16 10.508 15.9107 10.3539 15.7544L7.23937 12.5957C6.92021 12.2721 6.92021 11.7363 7.23937 11.4126C7.55853 11.0889 8.08679 11.0889 8.40595 11.4126L10.9372 13.9798L16.594 8.24276C16.9132 7.91908 17.4415 7.91908 17.7606 8.24276C18.0798 8.56645 18.0798 9.1022 17.7606 9.42588L11.5205 15.7544C11.3664 15.9107 11.1573 16 10.9372 16Z"
          fill="white"
        />
      </svg>
    </>
  );
};
