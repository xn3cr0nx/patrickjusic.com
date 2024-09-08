import { Html, Container, Heading, Text } from "@react-email/components";

export const Email: React.FC<
  Readonly<{ name: string; email: string; message: string }>
> = ({ name, email, message }) => {
  return (
    <Html lang="en">
      <Container>
        <Heading>{`New message from ${name} - ${email}`}</Heading>
        <Text>{message}</Text>
      </Container>
    </Html>
  );
};

export default Email;
