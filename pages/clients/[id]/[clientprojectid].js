import { useRouter } from "next/router";
export default function ClientProjectPageDetail() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Client Project Detail Page</h1>
      <p>Project page for a specific project for a selected client</p>
    </div>
  );
}
