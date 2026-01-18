import ErrorIcon from "@/assets/img/icons/error.svg?react";

export default function Error({ error }) {
  return (
    <div className="container mx-auto flex items-center gap-2 justify-center space-x-2 px-4 py-9">
      <ErrorIcon className="text-red-500" />
      {error?.message || "Error occurred, please refresh the page."}
    </div>
  );
}
