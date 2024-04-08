import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>Client Project Page</h1>
      <button
        onClick={() => {
          loadProjectHandler();
        }}
      >
        Load a Project A
      </button>
    </div>
  );
}
