import { useParams } from "next/navigation";

export default function User() {
  const params = useParams();
  return (
    <>
      <p>Hi {JSON.stringify(params)}</p>
    </>
  );
}
