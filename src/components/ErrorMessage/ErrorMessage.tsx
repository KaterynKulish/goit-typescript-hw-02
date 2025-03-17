interface ErrorMessageProps {
  error: string;
}
const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p>Something went wrong: {error}</p>;
};

export default ErrorMessage;
