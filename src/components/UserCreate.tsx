import {
  Create,
  FileInput,
  ImageField,
  NumberInput,
  SimpleForm,
  TextInput,
  choices,
  email,
  maxLength,
  minLength,
  minValue,
  number,
  regex,
  required,
} from "react-admin";

export const UserCreate = () => {
  const validateName = [
    required("필수항목입니다."),
    minLength(2),
    maxLength(15),
  ];
  const validateEmail = email();
  const validatePhone = [number(), minValue(18)];
  const validateZipCode = regex(/^\d{5}$/, "Must be a valid Zip Code");
  const validateGender = choices(
    ["m", "f", "nc"],
    "Please choose one of the values"
  );

  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="name" validate={validateName} />
        <TextInput source="username" validate={required()} />
        <TextInput source="description" fullWidth multiline />
        <TextInput source="address.street" />
        <NumberInput source="phone" validate={validatePhone} />
        <TextInput source="website" />
        <TextInput source="company.name" />
        <FileInput
          source="files"
          placeholder={<p>Drop your file here</p>}
          multiple
        >
          <ImageField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};
